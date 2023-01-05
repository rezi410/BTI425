import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogPost } from './BlogPost';

const perPage=6;

@Injectable({
  providedIn: 'root'
})


export class PostService {
  blogPosts: BlogPost = new BlogPost();

private url="https://mysterious-springs-50667.herokuapp.com";
          
constructor(private http: HttpClient) {}
 
getPosts(page: Number, tag: String, category: String): Observable<BlogPost[]> {
let path = this.url + "/api/posts?page=" + page + "&perPage=" + perPage;

if(tag !=null && tag !=undefined){
  path +="&tag=" + tag;
}
if(category != null && category != undefined){
  path += "&category=" + category;
}

return this.http.get<BlogPost[]>(path);
}



getPostbyId(id: String): Observable<BlogPost> {
  return this.http.get<BlogPost>(this.url + "/api/posts/" + id);
}



getCategories(): Observable<any> {
  return this.http.get<any>(
    `https://mysterious-springs-50667.herokuapp.com/api/categories`
  );
}

  
getTags(): Observable<string[]> {
    return this.http.get<string[]>(
      `https://mysterious-springs-50667.herokuapp.com/api/tags`
    );
}




getAllPosts(): Observable<BlogPost[]> {
  return this.http.get<BlogPost[]>(this.url + `/api/posts?page=1&perPage=${Number.MAX_SAFE_INTEGER}`);
}



newPost(data: BlogPost): Observable<any> {
  return this.http.post<any>(
    `https://mysterious-springs-50667.herokuapp.com/api/posts`, data
  );
}






updatePostById(id: string, data: BlogPost): Observable<any> {
  return this.http.put<any>(
    `https://mysterious-springs-50667.herokuapp.com/api/posts/${id}`, 
    data); 
}



deletePostById(id: string): Observable<any> {
  return this.http.delete<any>(
    `https://mysterious-springs-50667.herokuapp.com/api/posts/${id}`); 
}











  
}




