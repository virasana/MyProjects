import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'navbar',
    templateUrl: 'app/nav/navbar.component.html',
    styles: [`
    .nav.navbar-nav { font-size: 15px; }
    #searchForm { margin-right: 100px; }
    @media (max-width: 1200px) { #searchForm {display:none}}
    li > a.active { color: #F97924;  }
    `]
})

export class NavBarComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}