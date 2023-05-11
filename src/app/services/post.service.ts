import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  AddPost(data:any){
    return this.http.post('http://localhost:9090/Post/add',data,{ responseType: 'text' })
    
  }
}
