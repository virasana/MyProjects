import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from './shared/event.service'

@Injectable()
export class EventListResolver implements Resolve<any> {
    constructor(private eventService: EventService) {

    }

    resolve() {
        return this.eventService.getEvents(); //would normally need to add .subscribe() here, but the resolver calls .subscribe() for us.
    }
}
