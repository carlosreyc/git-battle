// Sacado de aqui https://angular.io/docs/ts/latest/api/http/testing/index/MockBackend-class.html

import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
 export function backendFactory(backend: MockBackend, options: BaseRequestOptions) {
        

        let users: any[] = JSON.parse(localStorage.getItem('users')) || [];
            
            console.log(localStorage)
        
        backend.connections.subscribe((connection: MockConnection) => {
           
            setTimeout(() => {
 
                
                if (connection.request.url.endsWith('/api/authenticate') && connection.request.method === RequestMethod.Post) {
                    
                    let params = JSON.parse(connection.request.getBody());

                    
                    let filteredUsers = users.filter(user => {
                        return user.username === params.username && user.password === params.password;
                    });

                    if (filteredUsers.length) {
                        
                        let user = filteredUsers[0];
                        connection.mockRespond(new Response(new ResponseOptions({
                            status: 200,
                            body: {
                                id: user.id,
                                username: user.username,
                                firstName: user.firstName,
                                lastName: user.lastName,
                                token: 'fake-jwt-token'
                            }
                        })));
                    } else {
                        
                        connection.mockError(new Error('Username or password is incorrect'));
                    }
                }
 
                if (connection.request.url.endsWith('/api/users') && connection.request.method === RequestMethod.Post) {
                    
                    let newUser = JSON.parse(connection.request.getBody());

                    
                    let duplicateUser = users.filter(user => { return user.username === newUser.username; }).length;
                    if (duplicateUser) {
                        return connection.mockError(new Error('Username "' + newUser.username + '" is already taken'));
                    }

                    
                    newUser.id = users.length + 1;
                    users.push(newUser);
                    localStorage.setItem('users', JSON.stringify(users));

                    
                    connection.mockRespond(new Response(new ResponseOptions({ status: 200 })));
                }
 
               
 
               
 
            }, 500);
 
        });
 
        return new Http(backend, options);
    }
export let fakeBackendProvider = {
    
    provide: Http,
    useFactory: backendFactory,
    deps: [MockBackend, BaseRequestOptions]
};