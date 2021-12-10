import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storage: StorageService) { }

  public async auth(username: string, password: string) {
    await this.storage.init();
    this.storage.set('username', username);
    this.storage.set('password', password);

    return {user: username, pass: password};
  }
}
