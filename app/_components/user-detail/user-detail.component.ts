import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
    moduleId: module.id,
    selector: 'user-detail',
    
    templateUrl: './user-detail.component.html',
    styles: ['.container {margin-bottom: 25px}' ]
})
export class UserDetail implements OnInit {
    constructor() { }
    @Input() userData: Object
    @Input() score: Number
    ngOnInit() { }
}