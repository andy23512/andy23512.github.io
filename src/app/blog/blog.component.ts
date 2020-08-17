import {
  Component,
  OnInit,
  ViewEncapsulation,
  Renderer2,
  Inject,
} from '@angular/core';
import { ActivatedRoute, Router, ROUTES } from '@angular/router';
import { DOCUMENT } from '@angular/common';

declare var ng: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated,
})
export class BlogComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private document
  ) {}

  public ngOnInit() {
    const s = this.renderer2.createElement('script');
    s.type = 'text/javascript';
    s.src = 'https://utteranc.es/client.js';
    s.setAttribute('repo', 'andy23512/andy23512.github.io');
    s.setAttribute('issue-term', 'pathname');
    s.setAttribute('theme', 'github-light');
    s.setAttribute('crossorigin', 'anonymous');
    s.text = ``;
    this.renderer2.appendChild(this.document.querySelector('#comments'), s);
  }
}
