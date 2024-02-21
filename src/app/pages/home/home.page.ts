import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MenuController } from '@ionic/angular'; 
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { AppService } from '../../services/subject/app.service';
import { numberCommasToString } from '../../utils/number.util';
import { swapArrayElements } from '../../utils/array.util';
 
import {
  trigger,
  state,
  style,
  animate,
  transition 
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'], 
  animations: [
    trigger('moveFinger', [ 
      state('startMoveFinger', style({
        top: '5.4rem',
        right: 0,
        display: 'block'
      })),
      state('endMoveFinger', style({
        top: 'calc(5.4rem + 33.33vw)',
        right: '33.33vw',
        display: 'none'
      })),
      transition('startMoveFinger => endMoveFinger', [
        animate('0.5s')
      ]), 
    ]),
  ],
})
export class HomePage implements OnInit {
  // left budget
  budgetLeft = '';
   
  //  dragging card ID
  draggingCardId : number = -1;

  // the boolean trigger of animation : move finger
  isMoveFinger :boolean = false;

  // cards infor
  cards = [{
    id: 0,
    text: 'My Budget',
    icon: 'My Budget',
    active: true,
    url: '/budget'
  }, {
    id: 1,
    text: 'My Goals',
    icon: 'My Goals',
    active: true,
    url: '/goal'
  }, {
    id: 2,
    text: 'My Dashboard',
    icon: 'My Dashboard',
    active: true,
    url: '/dashboard'
  }, {
    id: 3,
    text: 'My Spend',
    icon: 'My Spend',
    active: true,
    url: '/transaction/spend'
  }, {
    id: 4,
    text: 'My Income',
    icon: 'My Borrowings',
    active: true,
    url: '/transaction/income'
  }, {
    id: 5,
    text: 'Transaction',
    icon: 'My Growth',
    active: true,
    url: '/transaction'
  }, {
    id: 6,
    text: 'My Advice',
    icon: 'My Advice',
    active: false,
    url: '/home'
  }, {
    id: 7,
    text: 'My Protection',
    icon: 'My Protection',
    active: false,
    url: '/home'
  }];


  constructor(
    private appService: AppService,
    private menu: MenuController,
    private router: Router) {

  }

  ngOnInit(): void {
    this.appService.app$.subscribe(data => { 
      if (data) {
        this.budgetLeft = numberCommasToString(data['budgetLeft']);
        this.isMoveFinger = true;
        setTimeout(() => {
          swapArrayElements(this.cards, 2, 4);
        }, 600);
      }
    });

  }

  /**
   * get class name by item label
   * @param item string, 
   */
  getIconClass(item: string): string {
    return item.toLocaleLowerCase().replace(' ', '-');
  }
  /**
   * open menu
   * */
  menuOpen(): void {
    this.menu.enable(true, 'side');
    this.menu.open('side');
  } 

  /**
   * dragging card item
   * */
  goToUrl(d: any): void { 
    if (d.active && d.url) {
      this.router.navigateByUrl(d.url);
    }
  } 

  /**
   * get image src
   * */
  getImageAddress(d: any): string{
     return 'assets/image/icon/' + this.getIconClass(d.icon) + '.png';
  } 

  /**
   * when starting drag
   * */
  onDragStart(event: any, id: number): void { 
    this.draggingCardId = id; 
  } 
  
  /**
   * when dragging over
   * */
  allowDrop(event: any): void { 
    event.preventDefault();
  }
  
  /**
   * when dropping
   * */
  onDrop(event: any, id: number): void { 
    event.preventDefault(); 
    swapArrayElements(this.cards, this.draggingCardId, id);
  }
} 

