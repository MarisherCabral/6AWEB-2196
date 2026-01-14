import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PipesDemo } from './pipes-demo/pipes-demo';
import { UpperCasePipe } from '@angular/common';  // ✅ Import this pipe

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PipesDemo,
    UpperCasePipe  // ✅ Add it here so your template can use | uppercase
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('mid-project');
}
