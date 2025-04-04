import {Injectable} from '@angular/core';
import {UpdatesModel} from '../models/updates.model';
import {BehaviorSubject, finalize, lastValueFrom} from 'rxjs';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/compat/database';
import {Router} from '@angular/router';
import {AngularFireStorage} from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  blogsRef!: AngularFireList<any>

  // Tableau pour stocker les URL de téléchargement
  downloadURLs: string[] = [];
  private _loading = new BehaviorSubject<boolean>(false);
  private _getAllBlogsSubject$ = new BehaviorSubject<UpdatesModel[]>([new UpdatesModel()])
  private dbPath = '/blogs';

  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage, private afs: AngularFirestore, private router: Router) {
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


  // Méthode pour uploader toutes les images sélectionnées
  uploadImages(selectedFile: File): void {
    if (!selectedFile) return;

    const filePath = `uploads/${Date.now()}_${selectedFile.name}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, selectedFile);

    task.snapshotChanges().pipe(
      finalize(async () => {
        try {
          const url = await lastValueFrom(fileRef.getDownloadURL());
          this.downloadURLs.push(url);

          // Optionnel : stocker l'URL dans Firestore
          await this.afs.collection('images').add({
            url: url,
            fileName: selectedFile.name,
            uploadedAt: new Date()
          });

          console.log('Image uploadée avec succès');
        } catch (error) {
          console.error('Erreur lors de l\'upload de l\'image :', error);
        }
      })
    ).subscribe();
  }
}
