import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WaveAccessibilityService {
  private apiKey: string = 'u2uWaaj24003'; // Replace with your API key
  private apiUrl: string = 'https://wave.webaim.org/api/request';

  constructor(private http: HttpClient) {}

  checkAccessibility(url: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?key=${this.apiKey}&url=${encodeURIComponent(url)}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    // Customize error handling as needed
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
