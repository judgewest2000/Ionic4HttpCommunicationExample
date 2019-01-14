import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  // BROWSE TO THIS URL
  url = 'http://mockbin.org/bin/edf82fd6-d611-40d6-8f42-b6c9a4785c2e/view';

  constructor(private http: HttpClient) {


  }

  getHeaders() {
    return new HttpHeaders({
      Something: `abc123`,
      SomethingElse: 'Wowza'
    });
  }

  ionViewDidEnter() {


  }

  async runHttpPoster() {
    const headers = this.getHeaders();
    const result = await this.httpPoster({ apiUrl: this.url, headers: headers });
    alert(result);
  }


  httpPoster(details: { apiUrl: string, headers: HttpHeaders }) {
    return new Promise((resolve, reject) => {
      this.http.post(details.apiUrl, {}, { headers: details.headers })
        .subscribe(data => {
          resolve(data);
        }, err => {
          alert(err);
        });
    });


  }



}
