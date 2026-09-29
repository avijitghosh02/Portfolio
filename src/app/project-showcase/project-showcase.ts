import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-showcase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-showcase.html',
  styleUrls: ['./project-showcase.css']
})
export class ProjectShowcaseComponent {
  projects = [
    {
      title: 'Exceed HMS',
      role: 'Front-End Developer',
      problem: 'Hotels needed a fast, scalable, and highly optimized web platform to communicate their SaaS capabilities and improve search visibility.',
      solution: 'Developed the official SaaS platform website with modern UI/UX, near 100 SEO score, and optimized performance architecture.',
      tech: ['Angular', 'SEO', 'SaaS Design', 'Performance'],
      image: 'exceedwebsite.png',
      link: 'https://exceedhms.com/'
    },
    {
      title: 'Exceed Self Ordering',
      role: 'Front-End Developer',
      problem: 'Hotel guests faced friction in ordering room service due to physical menus and the requirement to download mobile apps.',
      solution: 'Built a contactless, instant-access web app using ES6+ where guests receive a direct link via WhatsApp to order seamlessly.',
      tech: ['JavaScript (ES6+)', 'UI/UX', 'Responsive'],
      image: 'selfordering.png',
      link: 'https://orderinggg.netlify.app/'
    },
    {
      title: 'Expand ERP Platform',
      role: 'Front-End Developer',
      problem: 'The existing ERP software and external portals suffered from usability issues, slow performance, and outdated interfaces.',
      solution: 'Led the UI/UX redesign and introduced new modules (e.g., Tour Guide). Revamped Vendor and Dealer portals resulting in a 20% performance boost.',
      tech: ['Angular', 'ERP', 'UI Architecture'],
      image: 'erp.png',
      link: 'https://www.expanderp.com/'
    },
    {
      title: 'Internship4you',
      role: 'Full-Stack Developer',
      problem: 'Manual tracking of internship applications and lack of a centralized platform for students and recruiters.',
      solution: 'Built a full-stack platform with secure authentication, AJAX real-time updates, and a customized content management dashboard.',
      tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
      image: 'internship4you.png',
      link: 'https://internship4you.com/'
    }
  ];
}
