import { Component, OnInit, HostListener   } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headAct: boolean = false;

  headMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.headMenu = !this.headMenu;
  }


  @HostListener('window:scroll', ['$event'])
    scrollHandler(event) {
      if (window.pageYOffset >= 100) {
        this.headAct = true;
      } else {
        this.headAct = false;
      }
  }

}
