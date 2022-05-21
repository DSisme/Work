import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPost } from 'src/BlogPost';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  perPage = 6;
  constructor(private http: HttpClient) { }

  getPosts(page, tag, category): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(`https://rocky-reaches-70281.herokuapp.com/api/posts?page=${page}&perPage=${this.perPage}`+ ((tag==null) ? "" : `&tag=${tag}`) + ((category==null) ? "" : `&category=${category}`));
  }

  getPostbyId(id): Observable<BlogPost> {
    return this.http.get<BlogPost>(`https://rocky-reaches-70281.herokuapp.com/api/posts/${id}`);
  }

  getCategories(): Observable<any> {
    return this.http.get<any>(`https://rocky-reaches-70281.herokuapp.com/api/categories`);
  }

  getTags(): Observable<string[]> {
    return this.http.get<string[]>(`https://rocky-reaches-70281.herokuapp.com/api/tags`);
  }
}
