import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursor',
  standalone: true,
  templateUrl: './cursor.html',
  styleUrls: ['./cursor.css']
})
export class CursorComponent implements OnInit {
  mouseX = -100;
  mouseY = -100;
  targetX = -100;
  targetY = -100;
  isHovered = false;

  ngOnInit() {
    this.animate();
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.targetX = event.clientX;
    this.targetY = event.clientY;
    
    // Check if hovering over an interactive element
    const target = event.target as HTMLElement;
    this.isHovered = !!target.closest('a, button, .interactive');
  }

  animate() {
    if (typeof window === 'undefined') return;
    
    // Smooth follow
    this.mouseX += (this.targetX - this.mouseX) * 0.2;
    this.mouseY += (this.targetY - this.mouseY) * 0.2;
    
    requestAnimationFrame(() => this.animate());
  }
}
