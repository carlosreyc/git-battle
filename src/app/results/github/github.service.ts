import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin'

@Injectable()
export class GithubService{
    
    constructor(private http: Http){

    }
    getUser(id: string): Observable<any> {
        return this.http.get('http://api.github.com/users/' + id).map(res => res.json())
        
    }

    getPlayerInfo(username: string) {
        return Observable.forkJoin([
            this.getUser(username),
            this.getRepos(username)
        ])
        .map(([user,repos]) => {
            return {
                data: user,
                followers: user.followers,
                stars: this.computeStars(repos)
                
            }
        })
        
    }

    getRepos(user: string) {
        return this.http.get('http://api.github.com/users/' + user + '/repos?&per_page=100').map(res => res.json())
    }

    computeStars(repos: any) {
        return repos.reduce((prev:any,curr:any) => {
            return prev + curr.stargazers_count
        },0)
    } 

    
        
        



} 