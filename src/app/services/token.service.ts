import { Injectable } from "@angular/core";

const TOKEN_KEY = "AuthToken";
const USERNAME_KEY = "AuthUsername";
const AUTHORITIES_KEY = "AuthAutorities";
@Injectable({
    providedIn: "root"
})
export class TokenService{

     roles: Array<string> =[];
     rol="";

    constructor(){}

    public setToken(token: string): void {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
      }

      public getToken(): string {
        return sessionStorage.getItem(TOKEN_KEY)!;
      }

      public setUserName(userName: string): void {
        window.sessionStorage.removeItem(USERNAME_KEY);
        window.sessionStorage.setItem(USERNAME_KEY, userName);
      }

      public getUserName(): string {
        return sessionStorage.getItem(USERNAME_KEY)!;
      }

      public setAuthorities(authorities: string[]): void {
        window.sessionStorage.removeItem(AUTHORITIES_KEY);
        window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
      }


       public getAuthorities(): string []{
         this.roles = [];
         const authoritiesString = sessionStorage.getItem(AUTHORITIES_KEY);
          if (authoritiesString) {
            const authorities = JSON.parse(authoritiesString) as { authority: string[] }[];
            if (Array.isArray(authorities)) {
              console.error('lo devuelve bien', authorities)
            } else {
              console.error('El objeto parseado no es un array:', authorities);
              return authorities
            }
          }
          return this.roles;
       }
      

      public logOut(): void {
        window.sessionStorage.clear();
      }
}
