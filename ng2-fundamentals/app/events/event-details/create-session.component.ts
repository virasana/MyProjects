import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISession } from '../shared/index'

@Component({
    templateUrl: 'app/events/event-details/create-session.component.html',
    styles: [`
    em { float:right;  color: #E05C65; padding-left: 10px; }
    .error input, .error.select, error.textarea { background-color: #E3C365; }
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error ::-ms-input-placeholder { color: #999; }
  `]
})

export class CreateSessionComponent implements OnInit {
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
            this.restrictedWords(['foo', 'bar'])
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
    }

    private restrictedWords(words) {
        return (control: FormControl): { [key: string]: any } => {
            if(!words) return null;

            var invalidWords = words
            .map(w => control.value.includes(w) ? w : null)
            .filter(w => w != null);

            return invalidWords && invalidWords.length > 0
            ? { 'restrictedWords' : invalidWords.join(', ')}
            : null
        }
    }
}