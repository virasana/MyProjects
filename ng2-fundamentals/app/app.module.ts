import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NavBarComponent } from './nav/navbar.component'
import { ToastrService } from './common/toastr.service'
import { AppRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { Error404Component } from './errors/404.errors.component';
import { EventsAppComponent } from './events-app.component'
import { AuthService } from './user/auth.service'

import {
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver, 
    CreateSessionComponent,
    SessionListComponent
} from './events/index'


@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(AppRoutes),
        FormsModule, 
        ReactiveFormsModule
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
        SessionListComponent
    ],
    providers: [
        EventService, ToastrService, EventRouteActivator, EventListResolver, AuthService,
        { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }
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