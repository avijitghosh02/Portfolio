import { Component } from '@angular/core';

@Component({
  selector: 'app-bodycomponent',
  standalone: true,
  imports: [],
  templateUrl: './bodycomponent.component.html',
  styleUrl: './bodycomponent.component.css'
})
export class BodycomponentComponent {
  mouseX = 0;
  mouseY = 0;

  onMouseMove(event: MouseEvent) {
    // Calculate relative mouse position for 3D tilt (-1 to 1)
    this.mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouseY = -((event.clientY / window.innerHeight) * 2 - 1);
  }
}
