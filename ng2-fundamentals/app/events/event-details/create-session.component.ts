import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: 'app/events/event-details/create-session.component.html'
})

export class CreateSessionComponent implements OnInit {
    name: FormControl;
    duration: FormControl;
    presenter: FormControl;
    level: FormControl;
    abstract: FormControl;
    newSessionForm: FormGroup;
    constructor() { 
        
    }
    
    ngOnInit() {
        this.name = new FormControl('', Validators.required);
        this.duration = new FormControl('', Validators.required);
        this.presenter = new FormControl('', Validators.required);
        this.level = new FormControl('', Validators.required);
        this.abstract = new FormControl('', [
            Validators.required,
            Validators.maxLength(400)
        ]);

        this.newSessionForm = new FormGroup({
            name: this.name,
            duration: this.duration,
            presenter: this.presenter, 
            level: this.level,
            abstract: this.abstract
        });
     }

     saveSession(formValues) {
        console.log(formValues);
     }
}