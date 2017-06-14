import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'collapsable-well',
    template: `
    <div (click)="toggleContent()" class="well pointable">
        <ng-content select="[well-title]"></ng-content>
        <ng-content *ngIf="visible" select = "[well-body]"></ng-content>
    </div>
    `
})

export class CollapsableComponent implements OnInit {
    constructor() { }
    visible: boolean;

    toggleContent(){
        this.visible = !this.visible;
    }
    ngOnInit() { }
}