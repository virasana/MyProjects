import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { EventService } from './shared/event.service'

@Injectable()
export class EventResolver implements Resolve<any> {
    constructor(private eventService: EventService) {
    }

    resolve(route: ActivatedRouteSnapshot) {
        return this.eventService.getEvent( route.params['id'] ); //would normally need to add .subscribe() here, but the resolver calls .subscribe() for us.
    }
}
