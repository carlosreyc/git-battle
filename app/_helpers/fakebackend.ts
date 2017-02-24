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
                    console.log(params)
                    
                    
 
                    if (params.username === 'admin') {
                        
                        
                        connection.mockRespond(new Response(new ResponseOptions({
                            status: 200,
                            body: {
                                id: 0,
                                username: params.username,
                                firstName: 'Carlos',
                                lastName: 'Reyes',
                                token: 'fake-jwt-token'
                            }
                        })));
                    } else {
                        
                        connection.mockError(new Error('Username or password is incorrect'));
                    }
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