import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../core/services/dashboard.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'codetrac-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dashbordData = []

  constructor(private dashboardService: DashboardService,
              private router: Router) { }

  ngOnInit() {
    this.dashboardService.getDashboard()
    .subscribe(res => this.dashbordData = res,
      err => {
        if (err instanceof HttpErrorResponse) {
           if (err.status === 401) {
            this.router.navigate(['/signin']);
           }
        }
      });
  }

}
