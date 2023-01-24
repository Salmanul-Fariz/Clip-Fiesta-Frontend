import { AfterViewInit, Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { delay } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements AfterViewInit {
  collapsed = true;
  flexCenter: boolean;

  constructor(private observer: BreakpointObserver) {}

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  ngAfterViewInit(): void {
    this.observer
      .observe(['(max-width: 992px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.collapsed = true;
          this.flexCenter = false;
        } else {
          this.flexCenter = true;
          this.collapsed = false;
        }
      });
  }
}
