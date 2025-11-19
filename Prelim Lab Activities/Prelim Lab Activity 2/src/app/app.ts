import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Skills } from './skills/skills';
import { Footer } from './footer/footer';
import { Education } from './education/education';
import { Work } from './work/work';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
  RouterOutlet,
  Header,
  Skills,
  Education,
  Work,
  Footer
],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('my-first-app');
}
