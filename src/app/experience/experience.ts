import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrls: ['./experience.css']
})
export class ExperienceComponent {
  activeIndex: number | null = 0;

  systems = [
    {
      name: 'INTERNAL RECRUITMENT',
      company: 'Vivre Panels',
      role: 'Executive Software Developer',
      purpose: 'Automates hiring pipelines, candidate tracking, and employee onboarding into a centralized internal dashboard.',
      workflow: ['Candidate Intake', 'Pipeline Tracking', 'Automated Notifications', 'Onboarding Hand-off'],
      tech: ['Angular', 'Node.js', 'PostgreSQL', 'REST APIs']
    },
    {
      name: 'CRM & ERP MODULES',
      company: 'Vivre Panels / eDominer',
      role: 'Software Developer',
      purpose: 'End-to-end management of client relations, sales pipelines, inventory, and cross-departmental data.',
      workflow: ['Lead Generation', 'Sales Tracking', 'Inventory Sync', 'Reporting'],
      tech: ['React', 'Angular', 'Go', 'MySQL']
    },
    {
      name: 'WORKFLOW AUTOMATION',
      company: 'Vivre Panels',
      role: 'Executive Software Developer',
      purpose: 'Replaces manual spreadsheet-based processes with custom logic and automated operational tools.',
      workflow: ['Data Ingestion', 'Logic Processing', 'Approval Chains', 'Analytics'],
      tech: ['TypeScript', 'Express.js', 'MongoDB']
    },
    {
      name: 'HOTEL MANAGEMENT',
      company: 'Bestman Exceed Software',
      role: 'Front-End Developer',
      purpose: 'Self-ordering systems and Point of Sale (POS) applications for the hospitality industry.',
      workflow: ['Guest Ordering', 'Kitchen Ticketing', 'Billing', 'Analytics'],
      tech: ['JavaScript (ES6+)', 'HTML/CSS', 'SEO']
    }
  ];

  toggleSystem(index: number) {
    if (this.activeIndex === index) {
      this.activeIndex = null;
    } else {
      this.activeIndex = index;
    }
  }
}
