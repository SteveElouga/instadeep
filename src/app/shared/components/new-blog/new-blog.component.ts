import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BlogService} from '../../services/blog.service';
import {UpdatesModel} from '../../models/updates.model';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-new-blog',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './new-blog.component.html',
  styleUrl: './new-blog.component.css'
})
export class NewBlogComponent implements OnInit {
  blog: UpdatesModel = {
    category: 'BLOG',
    content: '',
    date: new Date(),
    id: '',
    img: '',
    link: '',
    theme: '',
    title: ''

  };
  options: string[] = ['EVENT', 'BLOG'];

  constructor(private blogService: BlogService) {

  }

  ngOnInit() {
  }

  addBlog() {
    console.log(this.blog);
    this.blogService.addBlog(this.blog)

  }

  resetForm() {
    this.blog.img = ''
    this.blog.title = ''
    this.blog.theme = ''
    this.blog.link = ''
    this.blog.date = new Date()
    this.blog.content = ''
    this.blog.category = ''
  }

}
