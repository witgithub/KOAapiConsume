import { Injectable } from '@angular/core';
import { Http, RequestOptions, XHRBackend, Request, RequestOptionsArgs, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {
    contentTypeHeaderJson: { readonly 'Content-Type': string } = {
       'Content-Type': 'application/json'
    };

  constructor(
    private http: Http
  ) { }

  getUsers( ) {
    return this.http.get('http://localhost:3000/users')
          .map(res => res.json())
          .map((data: any) => {
              const result = [];
              if (data) {
                  data.forEach((user) => {
                      result.push(user);
                  });
              }
              return result;
          });
  }

  saveUser(user) {
    const headers = new Headers(this.contentTypeHeaderJson);
    const body = JSON.stringify(user);
      if (user._id) {
        return this.http.put(`http://localhost:3000/users/${user._id}`, body, {headers: headers});
      } else {
        return this.http.post('http://localhost:3000/users', body, {headers: headers})
            .map(res => res.json());
      }
  }

  deleteUser(id){
      return this.http.delete(`http://localhost:3000/users/${id}`);
  }


  getUserById(id, group= 'all'){
          return this.http.get(`http://localhost:3000/users/${id}`)
            .map(res => res.json());
  }



}


