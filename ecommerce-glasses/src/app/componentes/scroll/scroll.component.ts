import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss']
})
export class ScrollComponent {
  showBackToTopButton = false;

  @HostListener('window:scroll', [])
  onScroll() {
    this.scrollFunction();
  }

  scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      this.showBackToTopButton = true;
    } else {
      this.showBackToTopButton = false;
    }
  }

  backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
