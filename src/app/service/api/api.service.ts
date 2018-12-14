import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
	
	private URL: string = 'https://api.torn.com/';
	
	private KEY: string = '';

  	constructor(private http: HttpClient) {
  	}

	public logout() {
		localStorage.removeItem('token');
	}

	private buildFactionURL(selections: Array<string>) {
		return this.URL + 'faction/?key=' + this.KEY  + '&selections=' + selections.join();
	}

	private buildUserURL(selections: Array<string>, user: number) {
		return this.URL + 'user/' + user + '?key=' + this.KEY  + '&selections=' + selections.join();
	}

	public getFactionData(): Observable<boolean> {

		return this.http.get<any>(this.buildFactionURL([]))
		.pipe(map((response) => {
			console.log(response);
			return response;
		})).pipe(catchError((err) => {
			return throwError(err);
		}));
	}


	public getUserData(id: number): Observable<boolean> {

		return this.http.get<any>(this.buildUserURL([], id))
		.pipe(map((response) => {
			console.log(response);
			return response;
		})).pipe(catchError((err) => {
			return throwError(err);
		}));
	}
}
