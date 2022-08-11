import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileuploadService {
  private baseUrl = 'http://http://ec2-54-144-190-226.compute-1.amazonaws.com/:9091';
  constructor(private http: HttpClient) { }
  upload(file: File) {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', `${this.baseUrl}/csv/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }
  getFiles() {
    return this.http.get(`${this.baseUrl}/files`);
  }
}



