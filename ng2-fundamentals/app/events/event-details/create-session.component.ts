import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISession, restrictedWords } from '../shared/index'

@Component({
    templateUrl: 'app/events/event-details/create-session.component.html',
    styles: [`
    em { float:right;  color: #E05C65; padding-left: 10px; }
    .error input, .error.select, error.textarea { background-color: #E3C365; }
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error ::-ms-input-placeholder { color: #999; }
  `],
  selector: 'create-session'
})

export class CreateSessionComponent implements OnInit {
    @Output() saveNewSession = new EventEmitter();
    @Output() cancelAddSession = new EventEmitter();

    name: FormControl;
    duration: FormControl;
    presenter: FormControl;
    level: FormControl;
    abstract: FormControl;
    newSessionForm: FormGroup;
    constructor() { }

    ngOnInit() {
        this.name = new FormControl('', Validators.required);
        this.duration = new FormControl('', Validators.required);
        this.presenter = new FormControl('', Validators.required);
        this.level = new FormControl('', Validators.required);
        this.abstract = new FormControl('', [
            Validators.required,
            Validators.maxLength(400),
            restrictedWords(['foo', 'bar'])
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
        let session: ISession = {
            id: undefined,
            name: formValues.name,
            duration: formValues.duration,
            presenter: formValues.presenter,
            level: formValues.level,
            abstract: formValues.abstract,
            voters: []
        };

        this.saveNewSession.emit(session);
    }

    cancel(){
        this.cancelAddSession.emit();
    }
}