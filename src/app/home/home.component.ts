import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    moduleId: module.id,
    selector: 'my-main',
    templateUrl: './home.component.html',
  styles: ['.transparentBg {background: transparent}']
})
export class HomeComponent implements OnInit {
    title = 'Github Battle'
    constructor(
    private router: Router
  ) {}
    
    ngOnInit() { }
}