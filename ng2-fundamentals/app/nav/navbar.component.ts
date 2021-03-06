import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession, IEvent } from '../events/shared/event.model';
import { EventService } from '../events/shared/event.service';
import { Router } from '@angular/router'

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
    constructor(private authService: AuthService, private eventService: EventService, private router: Router ) { 
    
    }
    searchTerm: string = '';
    foundSessions: ISession[];
    events: IEvent[];

    ngOnInit() { 
        this.getEvents();
    }

    searchSessions(searchTerm){
        this.eventService.searchSessions(searchTerm).subscribe(sessions => {
            this.foundSessions = sessions;
        });
    }

    getEvents(){
        this.eventService.getEvents().subscribe((events: IEvent[]) => {
            this.events = events;
        });
    }

    onLinkClick(id: number){
        this.router.navigate(['events/', id])
    }
}