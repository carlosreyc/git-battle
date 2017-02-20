import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params, Router } from '@angular/router';
import { GithubService } from './github/github.service';
import { UserDetail } from '../user-detail/user-detail.component';
import 'rxjs/add/observable/forkJoin'
import { Observable } from 'rxjs/Observable';
import { CommonModule } from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'results',
    providers: [GithubService],
    templateUrl: './results.component.html',
    styleUrls: ['./results.component.css']
    
})
export class ResultsComponent implements OnInit {
     data: any = {
         
     }
     scores: any ={
        "player1": null,
        "player2": null
     }

     users: any
     
    constructor(
        private route: ActivatedRoute,
        private githubService: GithubService,
        private router: Router
    ) { }
    
    
    ngOnInit() { 
        this.route.params.subscribe(res => {
            this.users = res
            Observable.forkJoin([
                this.githubService.getPlayerInfo(this.users.player1),
                this.githubService.getPlayerInfo(this.users.player2)
            ]).subscribe( ([player1,player2]) => {
                this.data.player1 = player1,
                this.data.player2 = player2
                this.scores.player1 = this.getScore(player1.followers, player1.stars)
                this.scores.player2 = this.getScore(player2.followers, player2.stars)
            } )

        })
        
    }
    
    goToSel() {
        this.router.navigate(['./players'])
    }
    getScore(followers:number,stars:number) {
        return followers++ * 3 + stars
    }
    
}