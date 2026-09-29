import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TechItem {
  name: string;
  systems: string[];
}

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-stack.html',
  styleUrls: ['./tech-stack.css']
})
export class TechStackComponent {
  
  businessSystems = [
    'CRM / Leads',
    'ERP / Inventory',
    'Internal Recruitment',
    'Business Dashboards',
    'System APIs',
    'Workflow Automation'
  ];

  stack = [
    {
      category: 'FRONTEND',
      items: [
        { name: 'Angular', systems: ['Internal Recruitment', 'Business Dashboards', 'ERP / Inventory'] },
        { name: 'React', systems: ['CRM / Leads', 'Workflow Automation'] },
        { name: 'TypeScript', systems: ['CRM / Leads', 'ERP / Inventory', 'Internal Recruitment', 'System APIs'] },
        { name: 'JavaScript', systems: ['Business Dashboards'] }
      ]
    },
    {
      category: 'BACKEND',
      items: [
        { name: 'Node.js', systems: ['System APIs', 'Internal Recruitment', 'Workflow Automation'] },
        { name: 'Express.js', systems: ['System APIs'] },
        { name: 'Go', systems: ['System APIs', 'ERP / Inventory'] }
      ]
    },
    {
      category: 'DATA & INFRA',
      items: [
        { name: 'PostgreSQL', systems: ['CRM / Leads', 'ERP / Inventory', 'Internal Recruitment'] },
        { name: 'MySQL', systems: ['ERP / Inventory'] },
        { name: 'MongoDB', systems: ['Business Dashboards', 'Workflow Automation'] },
        { name: 'REST APIs', systems: ['System APIs', 'CRM / Leads', 'ERP / Inventory'] }
      ]
    }
  ];

  activeTech: TechItem | null = null;

  isSystemHighlighted(system: string): boolean {
    if (!this.activeTech) return false;
    return this.activeTech.systems.includes(system);
  }
}
