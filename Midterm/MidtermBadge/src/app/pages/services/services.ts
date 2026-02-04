import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Data } from '../../services/data';
import { Observable, BehaviorSubject, combineLatest, map, startWith } from 'rxjs';
import { Post } from '../../models/post';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './services.html',
  styleUrls: ['./services.css']
})
export class Services {
  posts$!: Observable<Post[]>;
  filteredPosts$!: Observable<Post[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  searchTerm$ = new BehaviorSubject<string>('');

  constructor(private data: Data) {
    // ✅ assign inside constructor, after injection
    this.posts$ = this.data.posts$;
    this.loading$ = this.data.loading$;
    this.error$ = this.data.error$;

    this.data.fetchPosts();

    this.filteredPosts$ = combineLatest([
      this.posts$,
      this.searchTerm$.pipe(startWith(''))
    ]).pipe(
      map(([posts, term]) =>
        posts.filter(post =>
          post.title.toLowerCase().includes(term.toLowerCase()) ||
          post.body.toLowerCase().includes(term.toLowerCase())
        )
      )
    );
  }

  onSearch(term: string) {
    this.searchTerm$.next(term);
  }
}
