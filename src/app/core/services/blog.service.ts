import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from '../../config/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService extends api {

  constructor(private http:HttpClient) {super() }

  getblogs():Observable<any>{
    return this.http.get(this.url+"/admin/blogs")
  }
  getblog(id:number):Observable<any>{
    let param = new HttpParams();
    param = param.append('id',id);
    return this.http.get(this.url+"/admin/blog",{params:param})
  }
}
