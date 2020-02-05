import { AppConfig } from "./../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class EditorService {
  constructor(private http: HttpClient) {}

  get(url: string): Observable<any> {
    return this.http.get(`${AppConfig.backendUrl}${url}`, {
      headers: this.createGETHeaders()
    });
  }

  post(url: string, body: Object): Observable<any> {
    return this.http.post(`${AppConfig.backendUrl}${url}`, body, {
      headers: this.createPOSTHeaders()
    });
  }

  createGETHeaders() {
    return new HttpHeaders({});
  }

  createPOSTHeaders() {
    return new HttpHeaders({});
  }
}
