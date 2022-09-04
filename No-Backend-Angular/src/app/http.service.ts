import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  callResource(): Observable<string>{
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8')
    return this.httpClient.get("http://localhost:8040/microservice/request",
      {headers, responseType: 'text'})
  }
}
