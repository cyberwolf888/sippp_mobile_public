import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storage: StorageService, private http: HttpClient) { }

  public async auth(username: string, password: string) {
    await this.storage.init();
    // this.storage.set('username', username);
    // this.storage.set('password', password);

    let endpoint  = 'https://e-pembangunan.badungkab.go.id/api/auth';
    this.http.post(endpoint, {
      username: username,
      password: password,
    }).subscribe((response) => {
      if(response['status']){
        return {user: username, pass: password};
      }
    });
    return false;
  }
}
