import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class AuthService {

  private _registerUrl = "http://localhost:4000/token";
  constructor(private http: HttpClient) { }

  generateJWT (user) {
    return this.http.post<any>(this._registerUrl,user);
  }
}
