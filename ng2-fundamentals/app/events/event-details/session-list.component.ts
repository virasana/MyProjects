import { Component, OnInit, Input } from '@angular/core';
import { ISession } from '../shared/index'

@Component({
    selector: 'session-list',
    templateUrl: 'app/events/event-details/session-list.component.html'
})

export class SessionListComponent implements OnInit {
    constructor() { }
    @Input() sessions: ISession[]

    ngOnInit() { }
}