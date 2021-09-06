import { Component, Input, OnInit } from '@angular/core';

/*
  Used by parent component to show page control arrows to flip to next pages.
  Use absolute path for accurate routing
*/
@Component({
  selector: 'app-page-control',
  templateUrl: './page-control.component.html',
  styleUrls: ['./page-control.component.scss']
})
export class PageControlComponent implements OnInit {

  @Input() prevRoute: string = '';
  @Input() nextRoute: string = '';
  @Input() prevRouteText: string = '';
  @Input() nextRouteText: string = '';
  navListFlexJustifySpace: string = ''; // for setting the justify-content value on the nav-list class.

  constructor() {}

  ngOnInit(): void {
    this.setNavListFlexSpace();
  }

  // TODO: potentially no longer used
  setNavListFlexSpace(): void {
    if (this.prevRoute.length > 0 && this.nextRoute.length === 0) {
      this.navListFlexJustifySpace = 'flex-start';
    } else if (this.nextRoute.length > 0 && this.prevRoute.length === 0)  {
      this.navListFlexJustifySpace = 'flex-end';
    } else {
      this.navListFlexJustifySpace = 'space-between'
    }
  }
}
