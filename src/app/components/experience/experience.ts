import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ExperienceItem {
  title: string;
  subtitle: string;
  period: string;
  description: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class ExperienceComponent {
  experience: ExperienceItem[] = [
    {
      title: 'B.Tech in Computer Science Engineering',
      subtitle: 'Your College Name, Pune',
      period: '2023 – Present',
      description: 'Learning core CS fundamentals, data structures, algorithms, and building projects.'
    },
    {
      title: 'Freelance Web Developer',
      subtitle: 'Remote',
      period: '2024 – Present',
      description: 'Developing Angular and Spring Boot based applications for small clients and personal projects.'
    }
  ];
}
