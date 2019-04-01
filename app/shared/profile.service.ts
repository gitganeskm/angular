import { Injectable } from '@angular/core';
import { Profile } from './profile.model';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  formData : Profile;
  readonly rootURL = "http://localhost:2185/api/";
  profilelist : Profile[];

  constructor(private http : HttpClient) { }

  postProfile(formData : Profile){
    return this.http.post(this.rootURL+'/Addresses', formData);

  }

  retriveList(){
    return this.http.get(this.rootURL+'/Addresses')
    .toPromise().then(res => this.profilelist = res as Profile[]);
  
  }

  putProfile(formData : Profile){
    return this.http.put(this.rootURL+'/Addresses/'+formData.ProfileId, formData);
  }

  deleteProfile(id : number){
    return this.http.delete(this.rootURL+'/Addresses/'+id);
  }
}
