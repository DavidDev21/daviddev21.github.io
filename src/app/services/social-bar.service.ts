import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

/* 
  Not used, but an POC
*/
@Injectable({
  providedIn: 'root'
})
export class SocialBarService {

  private isVisible: boolean = true;

  constructor(private router: Router) { 
    this.isVisible = true;

    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        console.log("Route Change detected. Resetting to default");
        this.setVisibleOn();
      }
    });
  }

  setVisibleOff() {
    this.isVisible = false;
  }

  setVisibleOn() {
    this.isVisible = true;
  }

  getIsVisible() {
    return this.isVisible;
  }

  toggle() { this.isVisible = !this.isVisible; }

}
