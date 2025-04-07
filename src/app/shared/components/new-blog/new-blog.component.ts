import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UpdatesModel} from '../../models/updates.model';
import {CommonModule} from '@angular/common';
import {BlogService} from '../../services/blog.service';
import {QuillModule} from 'ngx-quill';

@Component({
  selector: 'app-new-blog',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    QuillModule
  ],
  templateUrl: './new-blog.component.html',
  styleUrl: './new-blog.component.css'
})
export class NewBlogComponent {
  modules = {
    toolbar: [
      [{'header': [1, 2, 3, false]}],
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{'list': 'ordered'}, {'list': 'bullet'}],
      [{'script': 'sub'}, {'script': 'super'}],
      [{'indent': '-1'}, {'indent': '+1'}],
      [{'direction': 'rtl'}],
      [{'size': ['small', false, 'large', 'huge']}],
      [{'color': []}, {'background': []}],
      [{'font': []}],
      [{'align': []}],
      ['link', 'image', 'video'],
      ['clean']
    ]
  };
  blog: UpdatesModel = {
    category: 'BLOG',
    content: '',
    date: new Date(),
    id: '',
    img: null,
    link: '',
    theme: '',
    title: ''

  };

  options: string[] = ['EVENT', 'BLOG'];
  selectedFiles!: File;


  constructor(private blogService: BlogService) {
  }

  addBlog() {
    console.log(this.blog);
    alert('wdvkwvw')
    // this.blogService.addBlog(this.blog)
  }

  onFileSelected(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    if (element.files) {
      this.selectedFiles = element.files[0];
      this.blog.img = this.selectedFiles;
    }
  }

  uploadImages() {
    this.blogService.uploadImages(this.selectedFiles)
  }

  resetForm() {
    this.blog.img = null
    this.blog.title = ''
    this.blog.theme = ''
    this.blog.link = ''
    this.blog.date = new Date()
    this.blog.content = ''
    this.blog.category = ''
  }
}
