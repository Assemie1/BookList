import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {filter, mergeMap, Observable} from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  private breakpointObserver = inject(BreakpointObserver);

  public title = "Bücherliste"

  isHandset$: Observable<boolean> = this.breakpointObserver.observe('(max-width: 700px)')
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private router: Router, private route: ActivatedRoute) {  }

  ngOnInit(): void{
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.route),
      map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter(route => route.outlet ==='primary'),
      mergeMap(route => route.data)
    ).subscribe(data => {
      this.title = data['title'];
    })


  }


}
