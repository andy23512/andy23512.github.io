import { Component } from '@angular/core';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Observable, zip } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    private scullyService: ScullyRoutesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.loadData();
      });
  }
  title = 'blog';
  page: number;
  itemCount: number;
  links$: Observable<ScullyRoute[]>;

  private loadData() {
    const pageSize = 10;

    this.scullyService.available$.subscribe(console.log);

    this.links$ = zip(
      this.scullyService.available$,
      this.route.queryParams
    ).pipe(
      map(([routes, params]) => {
        console.log(routes, params);
        this.page = parseInt(params.page || 1, 10); // 取得QueryString的頁數

        const items = routes
          .filter((route) => !!route.title)
          .reverse()
          .slice((this.page - 1) * pageSize, this.page * pageSize); // 使用slice來切割Arrary

        this.itemCount = items.length;

        return items;
      })
    );
  }

  public previous() {
    let pageNum = this.page - 1;

    if (pageNum === 0) {
      pageNum = 1;
    }

    this.router.navigate(['/'], {
      queryParams: { page: pageNum },
      replaceUrl: true,
    });
  }

  public next() {
    this.router.navigate(['/'], {
      queryParams: { page: this.page + 1 },
      replaceUrl: true,
    });
  }
}
