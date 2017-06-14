import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'collapsable-well',
    template: `
    <div (click)="toggleContent()" class="well pointable">
        <h4 class="well-title">{{title}}</h4>
        <ng-content *ngIf="visible"></ng-content>
    </div>
    `
})

export class CollapsableComponent implements OnInit {
    constructor() { }
    @Input() title: string;
    visible: boolean;

    toggleContent(){
        this.visible = !this.visible;
    }
    ngOnInit() { }
}