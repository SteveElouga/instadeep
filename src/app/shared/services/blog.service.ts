import {inject, Injectable} from '@angular/core';
import {UpdatesModel} from '../models/updates.model';
import {BehaviorSubject} from 'rxjs';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/compat/database';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  blogsRef!: AngularFireList<any>
  private afs = inject(AngularFirestore);
  private afd = inject(AngularFireDatabase)
  private _loading = new BehaviorSubject<boolean>(false);
  private _getAllBlogsSubject$ = new BehaviorSubject<UpdatesModel[]>([new UpdatesModel()])
  private dbPath = '/blogs';

  constructor(private db: AngularFireDatabase, private router: Router) {
    this.blogsRef = db.list(this.dbPath)
  }

  get getAllBlogs$() {
    return this._getAllBlogsSubject$.asObservable()
  }

  getLoading() {
    return this._loading.asObservable()
  }

  //add blog
  addBlog(blog: UpdatesModel) {
    console.log(blog.id)
    blog.id = this.afs.createId()
    this.blogsRef.push(blog)
    this.router.navigate(['/dashboard/blogs'])
  }

  //get all blogs
  getAllBlogs() {
    return this.blogsRef
  }


  getBlog(blogId: string) {
    return this.db.object(`${this.dbPath}/${blogId}`)
  }

  //delete blog
  deleteBlog(blogId: string) {
    return this.blogsRef.remove(blogId)
  }

  //update blog
  updateBlog(blogId: string, blog: UpdatesModel) {
    this.blogsRef.update(blogId, blog)
  }
}
