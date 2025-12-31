import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Skill {
  name: string;
  iconClass: string;
  level: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class SkillsComponent {
  skills: Skill[] = [
    { name: 'Angular',        iconClass: 'fa-brands fa-angular',   level: 'Intermediate' },
    { name: 'TypeScript',     iconClass: 'fa-brands fa-js',        level: 'Intermediate' },
    { name: 'HTML & CSS',     iconClass: 'fa-solid fa-code',       level: 'Advanced' },
    { name: 'Spring Boot',    iconClass: 'fa-solid fa-leaf',       level: 'Intermediate' },
    { name: 'MySQL',          iconClass: 'fa-solid fa-database',   level: 'Intermediate' },
    { name: 'Git & GitHub',   iconClass: 'fa-brands fa-git-alt',   level: 'Intermediate' }
  ];
}
