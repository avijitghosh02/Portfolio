import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { BodycomponentComponent } from './bodycomponent/bodycomponent.component';
import { EngineeringPhilosophyComponent } from './engineering-philosophy/engineering-philosophy';
import { ExperienceComponent } from './experience/experience';
import { TechStackComponent } from './tech-stack/tech-stack';
import { SystemEcosystemComponent } from './system-ecosystem/system-ecosystem';
import { ProjectShowcaseComponent } from './project-showcase/project-showcase';
import { FooterComponent } from './footer/footer.component';
import { CursorComponent } from './shared/cursor/cursor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    BodycomponentComponent,
    EngineeringPhilosophyComponent,
    ExperienceComponent,
    TechStackComponent,
    SystemEcosystemComponent,
    ProjectShowcaseComponent,
    FooterComponent,
    CursorComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
