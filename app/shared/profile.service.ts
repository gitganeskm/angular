import { Injectable } from '@angular/core';
import { Profile } from './profile.model';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  formData : Profile;
  readonly rootURL = "http://localhost:50733/api/";

  constructor(private http : HttpClient) { }

  postProfile(formData : Profile){
    return this.http.post(this.rootURL+'/Addresses', formData);

  }
}
