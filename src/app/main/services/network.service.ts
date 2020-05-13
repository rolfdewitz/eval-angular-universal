import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class NetworkService {
  url = 'http://api.citybik.es/v2/networks';
  constructor(private http: HttpClient) {}

  getList() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    });
    const completeUri = `${this.url}?fields=id,name,href,location`;
    console.warn('Network: GET', completeUri);
    return this.http.get(completeUri, { headers });
  }

  getDetails(id: string) {
    if (!id) {
      return;
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    });
    const completeUri = `${this.url}/${id}`;
    console.warn('Network: GET', completeUri);
    return this.http.get(completeUri, { headers });
  }
}
