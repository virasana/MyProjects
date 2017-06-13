import { Component, OnInit, Input } from '@angular/core';
import { IEvent } from './shared/index';

@Component({
    selector: 'event-thumbnail',
    template: `
<div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
    <h2>{{event.name}}</h2>
    <div>Date: {{event.date}}</div>
    <div>Time: {{event.time}}</div>
    <div>Price: £{{event.price}}</div>
    <div *ngIf="event?.location">
        Location: {{event.address}}
        <span class = "pad-left" >
            {{event.location.city}}, {{event.location.country}}
        </span>
    </div>
</div>
    `,
    styles: [`
    .pad-left { margin-left: 10px; }
    .thumbnail { min-height: 210px; }
    .well div { color: #bbb; }
    `]
}) 
export class EventThumbnailComponent implements OnInit {
    constructor() { }
    @Input() event: IEvent;
    ngOnInit() { }
}