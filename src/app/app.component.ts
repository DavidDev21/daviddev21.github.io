import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [  trigger('routerAnimations', [
    transition(':increment', slideTo('right') ),
    transition(':decrement', slideTo('left') ),
  ])]
})
export class AppComponent {
  title = 'portfolio-v3';

  hiddenSocialBarRoutes: string[] = ['contact'];

  constructor(private router: Router) {
  }

  /*
    Hides the social bar if routes match those in the list 
    ** deprecated. unused. keeping this for reference
  */
  isSocialBarVisible() {
    return this.hiddenSocialBarRoutes.filter((routeString) => {
      return this.router.url.includes(routeString);
    }).length === 0;
  }

  getActiveRouteId(outlet: RouterOutlet) {
    // console.log("routeId:" + outlet && outlet.activatedRouteData && outlet.activatedRouteData.routeId);
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.routeId;
  }
}

function slideTo(direction: any) {
  const optional = { optional: true };
  return [
    style({ position: 'relative'}),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        [direction]: 0,
        width: '100%'
      })
    ]),
    query(':enter', [style({ [direction]: '-100%', opacity: 0})]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('1s ease-in-out', style({ [direction]: '100%', opacity: 0}))]),
      query(':enter', [animate('1s ease-in-out', style({ [direction]: '0%', opacity: 1}))])
    ]),
    query(':enter', animateChild())
 ];
}

/*
Slide animation, but has horizontal scroll problem (resolved via overflow hidden on the body)
====
[
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        overflow: 'hidden'
      })
    ]),
    query(':enter', [style({ left: '-100%', opacity: 0,         overflow: 'hidden' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('1s ease-out', style({ left: '100%', opacity: 0,         overflow: 'hidden' }))]),
      query(':enter', [animate('1s ease-out', style({ left: '0%', opacity: 1,         overflow: 'hidden' }))])
    ]),
    query(':enter', animateChild())
 ];
 */