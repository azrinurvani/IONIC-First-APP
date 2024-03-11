import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-advisee',
  templateUrl: './advisee.page.html',
  styleUrls: ['./advisee.page.scss'],
})
export class AdviseePage implements OnInit {

  constructor(
    private menuController : MenuController
  ) { }

  ngOnInit() {
  }

  openMenu(){
    this.menuController.toggle('mainMenu')
  }  
}
