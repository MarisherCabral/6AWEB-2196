import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  imports: [FormsModule],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
  isStaticNoteVisible: boolean = false;
  isNoteVisible: boolean = true;
  isParagraphVisible: boolean = true;

  showNote() {
    this.isNoteVisible = true;
  }
  hideNote() {
    this.isNoteVisible = false;
  }
  toggleNote() {
    this.isParagraphVisible = !this.isParagraphVisible;
  }

  monthNameStatic: string = 'Nov';
  monthNameDynamic: string = 'Nov';

  cityList: String[] = ["Angeles", "San Fernando", "Sta. Rosa", "Baguio", "Pasig"];

  studentList: any[] = [
    {stud_name: 'Marisher Cabral', course: 'Web Development', isActive: true},
    {stud_name: 'fel Cabral', course: 'Network Administration', isActive: true},
    {stud_name: 'Angelene Guiao', course: 'Systems Development', isActive: true},
    {stud_name: 'Julie Jane', course: 'CyberSecurity', isActive: true},
    {stud_name: 'Alden Richards', course: 'Web Development', isActive: true},
  ];
}
