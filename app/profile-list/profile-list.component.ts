import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../shared/profile.service';
import { Profile } from '../shared/profile.model';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {

  constructor(private service: ProfileService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.retriveList();
  }

  populateform(address : Profile){
    this.service.formData = Object.assign({}, address) ;
  }

  onDelete(id : number){
    this.service.deleteProfile(id).subscribe(res =>
      {
        this.service.retriveList();
        this.toastr.success('deleted Successfully', 'Profile Information');
      });
    }
    

  }


