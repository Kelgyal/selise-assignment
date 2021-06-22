import {Component, OnInit, ViewChild} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import {Router} from "@angular/router";
import { faFacebookSquare} from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  @ViewChild(MatSidenav) sidenav! : MatSidenav;
    faFacebookSquare = faFacebookSquare;
    faTwitterSquare = faTwitterSquare;

  constructor(private obsever: BreakpointObserver, private router: Router) {

  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.obsever.observe(['(max-width: 800px)'])
        .subscribe((res) => {
          if (res.matches) {
            this.sidenav.mode = 'over';
            this.sidenav.close();
          } else {
            this.sidenav.mode = 'side';
            this.sidenav.open();
          }
        });
  }
}
