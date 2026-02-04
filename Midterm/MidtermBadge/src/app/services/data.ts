import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap, catchError, of } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class Data {
  private postsSubject = new BehaviorSubject<Post[]>([]);
  posts$: Observable<Post[]> = this.postsSubject.asObservable();

  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();

  private errorSubject = new BehaviorSubject<string | null>(null);
  error$ = this.errorSubject.asObservable();

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  fetchPosts(): void {
    if (this.postsSubject.value.length === 0) {
      this.loadingSubject.next(true);
      this.http.get<Post[]>(this.apiUrl)
        .pipe(
          tap(posts => {
            this.postsSubject.next(posts);
            this.errorSubject.next(null); // clear error
            this.loadingSubject.next(false);
          }),
          catchError(err => {
            console.error('Error fetching posts', err);
            this.errorSubject.next('Failed to load posts.');
            this.loadingSubject.next(false);
            return of([]);
          })
        )
        .subscribe();
    }
  }
}
