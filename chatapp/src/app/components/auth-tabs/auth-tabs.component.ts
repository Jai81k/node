import { Component, OnInit } from '@angular/core';

import * as M from 'materialize-css';

@Component({
  selector: 'app-auth-tabs',
  templateUrl: './auth-tabs.component.html',
  styleUrls: ['./auth-tabs.component.css']
})
export class AuthTabsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      const options = {
        duration: 300,
        //swipeable: true,
        /*responsiveThreshold: 1280,
        onShow: {}*/
      }
      const myTabs = document.querySelector('.tabs');
      M.Tabs.init(myTabs, options);
  }

}
