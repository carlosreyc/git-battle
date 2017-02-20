import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-prompt',
    templateUrl: 'prompt.component.html',
    styles: ['.transparentBg {background: transparent}']
})
export class PromptComponent  {
    constructor(private router: Router) {
        
     }
     goToResults() {
        
        this.router.navigate(['./results', this.username1, this.username2])
     }
    username1: string
    username2: string  
    
    
}