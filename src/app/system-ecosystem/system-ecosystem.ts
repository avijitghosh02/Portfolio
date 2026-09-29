import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-system-ecosystem',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './system-ecosystem.html',
  styleUrls: ['./system-ecosystem.css']
})
export class SystemEcosystemComponent {
  
  mouseX = 0;
  mouseY = 0;
  
  activeSystem: string = 'recruitment';

  systemData: Record<string, any> = {
    recruitment: {
      title: 'Recruitment Module',
      purpose: 'Automates hiring workflows, tracks candidates, and integrates with employee onboarding.',
      role: 'Full Stack Development',
      tech: 'Angular, Node.js, PostgreSQL'
    },
    crm: {
      title: 'CRM Application',
      purpose: 'Manages client relationships, tracks sales pipelines, and provides data insights.',
      role: 'Frontend & API Integration',
      tech: 'React, Node.js, MongoDB'
    },
    erp: {
      title: 'ERP Core',
      purpose: 'Centralizes business resources, inventory, and inter-departmental workflows.',
      role: 'Architecture & UI/UX',
      tech: 'Angular, Go, MySQL'
    },
    operations: {
      title: 'Operations Dashboard',
      purpose: 'Provides real-time visibility into business metrics and automated processes.',
      role: 'Frontend Development',
      tech: 'Angular, Tailwind, REST APIs'
    }
  };

  get activeSystemData() {
    return this.systemData[this.activeSystem];
  }

  onMouseMove(event: MouseEvent) {
    this.mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouseY = -((event.clientY / window.innerHeight) * 2 - 1);
  }

  getParallax() {
    return `translate3d(${this.mouseX * -20}px, ${this.mouseY * 20}px, 0)`;
  }
}
