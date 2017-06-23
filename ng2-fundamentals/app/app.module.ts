import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NavBarComponent } from './nav/navbar.component'
import { HttpModule } from '@angular/http';

import {
    JQ_TOKEN,
    TOASTR_TOKEN,
    Toaster,
    CollapsableComponent,
    SimpleModalComponent,
    ModalTriggerDirective
} from './common/index';
import {
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver,
    CreateSessionComponent,
    SessionListComponent,
    DurationPipe,
    UpvoteComponent, 
    VoterService,
    LocationValidator
} from './events/index'
import { AppRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { Error404Component } from './errors/404.errors.component';
import { EventsAppComponent } from './events-app.component'
import { AuthService } from './user/auth.service'


declare let toastr: Toaster;
declare let jQuery: Object;

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(AppRoutes),
        FormsModule,
        ReactiveFormsModule,
        HttpModule
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component,
        CreateSessionComponent,
        SessionListComponent,
        CollapsableComponent,
        SimpleModalComponent,
        DurationPipe,
        ModalTriggerDirective,
        UpvoteComponent, 
        LocationValidator
    ],
    providers: [
        EventService, EventRouteActivator, EventListResolver, AuthService, VoterService,
        { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
        { provide: TOASTR_TOKEN, useValue: toastr } ,
        { provide: JQ_TOKEN, useValue: jQuery }

    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule { }

function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty) {
        return window.confirm('You have not saved this component.  Do you really want to cancel?');
    }
    return true;
}