import {AuthConfig} from "angular-oauth2-oidc";

export const authConfig: AuthConfig = {
  issuer: 'http://localhost:8080/realms/Thesis', // bietet der Anwendung Endpunkte von Keycloak, welche die Anwendung nutzen kann
  redirectUri: window.location.origin,
  clientId: 'no-backend-client',
  responseType: 'code',
  strictDiscoveryDocumentValidation: true,
  scope: 'openid'
}
