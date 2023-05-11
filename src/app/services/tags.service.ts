import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor(private http: HttpClient) { }
  getAllTags(){
    return this.http.get('http://localhost:9090/Tag/getAll')
  }

  UploadImage(formData :any){
    return this.http.post('http://localhost:9090/api/upload',formData ,{ responseType: 'text' })
  }
}
