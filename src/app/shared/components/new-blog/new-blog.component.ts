import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UpdatesModel} from '../../models/updates.model';
import {CommonModule} from '@angular/common';
import {BlogService} from '../../services/blog.service';
import {EditorModule} from 'primeng/editor';
import {transition} from '@angular/animations';
import {DatePicker} from 'primeng/datepicker';
import {Bold, ClassicEditor, Essentials, Italic, Paragraph} from 'ckeditor5';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';

@Component({
  selector: 'app-new-blog',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    EditorModule,
    DatePicker,
    CKEditorModule
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
    img: null,
    link: '',
    theme: '',
    title: ''

  };
  public Editor = ClassicEditor;
  public config = {
    plugins: [Essentials, Paragraph, Bold, Italic],
    toolbar: ['undo', 'redo', '|', 'bold', 'italic']

  }

  options: string[] = ['EVENT', 'BLOG'];
  selectedFiles!: File;
  protected readonly transition = transition;

  constructor(private blogService: BlogService) {
  }

  public ngOnInit(): void {

  }

  addBlog() {
    console.log(this.blog);
    this.blogService.addBlog(this.blog)
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
