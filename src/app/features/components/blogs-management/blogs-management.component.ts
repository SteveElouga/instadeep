import {Component, OnInit, signal, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {BlogService} from '../../../shared/services/blog.service';
import {UpdatesModel} from '../../../shared/models/updates.model';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {tap} from 'rxjs';


@Component({
  selector: 'app-blogs-management',
  standalone: true,
  imports: [RouterLink, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, ReactiveFormsModule],
  templateUrl: './blogs-management.component.html',
  styleUrl: './blogs-management.component.css'
})
export class BlogsManagementComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'theme', 'date'];
  dataSource: MatTableDataSource<UpdatesModel>;
  blogs = signal<UpdatesModel[]>([])

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private blogService: BlogService) {
    this.dataSource = new MatTableDataSource(this.blogs());
  }

  ngOnInit() {
    this.getAllBlogs()
  }

  getAllBlogs() {
    // this.blogs = toSignal(this.blogService.getAllBlogs())

    this.blogService.getAllBlogs().snapshotChanges().pipe(
      tap((data) => {
          data.forEach((item) => {
              let blog = item.payload.toJSON() as UpdatesModel;
              this.blogs.update(currentBlogs => [...currentBlogs!, blog]);
              console.log('Blog ajouté:', blog);
            }
          )
        }
      )
    ).subscribe(() => {
      // Mise à jour de la dataSource après la récupération des blogs
      this.dataSource.data = this.blogs()!;
      // Si vous utilisez MatPaginator et MatSort, vous pouvez les assigner ici
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log('Blogs totaux:', this.blogs());
    });

  }

  updateBlog() {
  }

  deleteBlog(blogId: string) {
    if (window.confirm('Are you sure you want to delete the blog?')) {
      this.blogService.deleteBlog(blogId)
    }
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

