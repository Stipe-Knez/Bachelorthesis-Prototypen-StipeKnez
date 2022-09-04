import { Component } from '@angular/core';
import {authConfig} from "./auth.config";
import {OAuthService} from "angular-oauth2-oidc";
import {HttpService} from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent /*implements OnDestroy*/{
  title = 'No-Frontend-Angular'
  microserviceResponse = ''
  //microserviceSubscription: Subscription

  constructor(private oauthService: OAuthService, private httpService: HttpService) {
    this.configure();
  }

  /*
  ngOnDestroy(): void{
    this.microserviceSubscription.unsubscribe() // nachdem call abgeschlossen => unsubscribe
  }
  */

  callResource(){
    this.httpService.callResource().subscribe(response => {
      this.microserviceResponse = response
    })
  }

  private configure(){
    this.oauthService.configure(authConfig)
    this.oauthService.loadDiscoveryDocumentAndTryLogin()
  }

  login(){
    this.oauthService.initCodeFlow();
  }

  logout(){
    this.oauthService.logOut();
  }
}
