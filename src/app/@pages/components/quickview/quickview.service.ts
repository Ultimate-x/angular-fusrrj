import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class QuickviewService {

  constructor(private http: HttpClient) { }

  // Get from the API
  getNotes() {
    return this.http.get('assets/data/notes.json');
  }

  getUsers() {
    return this.http.get('assets/data/users.json')
      ;
  }

  getChatMessages() {
    return this.http.get('assets/data/messages.json')
      ;
  }
}
