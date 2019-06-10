import { Component, OnInit } from '@angular/core';
import { ROUTES } from './sidebar-routes.config';
import { ROUTES_LEARNER } from './sidebar-routes.config';
import { RouteInfo } from './sidebar.metadata';
import { Router, ActivatedRoute } from '@angular/router';
declare var $: any;

@Component({
  selector: 'codetrac-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  public menuItemsLearner: any[];
  currentdomainid = '';
  hide = false;

  studentLoginned = false;
  adminLoginned = true;

  constructor(public router: Router, private route: ActivatedRoute) {}

  ngOnInit() {


//    $.getScript('./assets/app/js/core/app-menu.js');
//    $.getScript('./assets/app/js/core/app.js');
this.getRole();
this.menuItems = ROUTES.filter(menuItem => menuItem);
this.menuItemsLearner = ROUTES_LEARNER.filter(menuItem => menuItem);
const localStorageDomainData = JSON.parse(window.localStorage.getItem('domain_details'));
this.currentdomainid = localStorageDomainData.Domain.fk_domainid;
const localStorageMenuLocked = JSON.parse(
            window.localStorage.getItem('menuLocked')
          );
// if (!localStorageMenuLocked) {
//            this.userpopup.hidesideinnermenus.next(true);
//           }
// this.userpopup.hidesideinnermenus.subscribe( data => {
//            this.hide = data;
//         });
  }

  getRole() {
    // alert('under')
    const allData = window.localStorage.getItem('jwtToken');
    const parsedData = JSON.parse(allData);
    console.log(parsedData.role);

    console.log('Local DATA', parsedData);
    if (parsedData.role === 'Domain Admin') {
      this.adminLoginned = true;
      this.studentLoginned = false;
    } else {
        this.studentLoginned = true;
        this.adminLoginned = false;
    }
  }


  mouseEnter() {
    console.log('entered');
    // this.userpopup.hidesideinnermenus.next(false);
    // this.userpopup.mouseenter.next(true);

  }

  mouseLeave() {
    console.log('left');
    // this.userpopup.mouseenter.next(false);

  }
}
