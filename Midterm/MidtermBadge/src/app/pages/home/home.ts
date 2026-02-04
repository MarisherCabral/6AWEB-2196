import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncPipe, SlicePipe } from '@angular/common';
import { Data } from '../../services/data';
import { Observable } from 'rxjs';
import { Post } from '../../models/post';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AsyncPipe, SlicePipe],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  private data = inject(Data);
  posts$: Observable<Post[]> = this.data.posts$;
}
