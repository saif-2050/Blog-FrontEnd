import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  Login(data:any){
    return this.http.post('http://localhost:9090/login',data)
  }

  save(data:any){
    localStorage.setItem('info',JSON.stringify(data));
  }

  getuserauth(){
    let token :any = localStorage.getItem('info') ;
    if(token!=null){
      return "true"
    }else{
      return "false" 
    }
  }
  RemoveData(){

    localStorage.removeItem('info')
  }

  getuserid(){
    let token :any = localStorage.getItem('info') ;
    if(token!=null){
      return token
    }else{
      return 0
    }
  }
}
