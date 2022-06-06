import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IPost } from '../interface/IPost';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  private serverUrl: string = `http://localhost:9000`

  constructor(private httpClientt: HttpClient) {}

  public allPost(): Observable<IPost[]> {
    let dataURL: string = `${this.serverUrl}/home`
    return this.httpClientt.get<IPost[]>(dataURL).pipe(catchError(this.handleError))
  }

  public createPost(post: IPost): Observable<IPost> {
    let dataURL: string = `${this.serverUrl}/home`
    return this.httpClientt.post<IPost>(dataURL, post).pipe(catchError(this.handleError))
  }

  public deletePost(contactId: string):Observable<{ }> {
    let dataURL: string = `${this.serverUrl}/home/${contactId}`
    return this.httpClientt.delete<{ }>(dataURL).pipe(catchError(this.handleError))
  }

  public handleError(error: HttpErrorResponse) {
    let errorMessage: string = ''
    if (error.error instanceof HttpErrorResponse) {
      errorMessage = `Error: ${error.error.message}`
    } else {
      errorMessage = `Status: ${error.status} \n Message: ${error.message}`
    }
    return throwError(errorMessage)
  }

}
