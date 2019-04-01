import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from '../shared/profile.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service : ProfileService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm)
  {
    if(form != null)
    form.resetForm();
   
    this.service.formData = {
      ProfileId : null,
      FirstName : '',
      LastName : '',
      Street: '',
      City :'',
      State:'',
      Zipcode:''
    }
  }
    onSubmit(form : NgForm){
    this.insertRecord(form);
    }
  
    insertRecord(form : NgForm) {
  
    }
  

}
