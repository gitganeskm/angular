import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from '../shared/profile.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service : ProfileService, 
    private toastr: ToastrService
    ) { }

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
      if(form.value.ProfileId == null)
    this.insertRecord(form);
    else
    this.updateRecord(form);
    
    }
  
    insertRecord(form : NgForm) {
      this.service.postProfile(form.value).subscribe(res => {
        this.toastr.success('Inserted Successfully', 'Profile Information');
        this.resetForm(form);
        this.service.retriveList();
      })
  
    }

    updateRecord(form : NgForm) {
      this.service.putProfile(form.value).subscribe(res => {
        this.toastr.success('updated Successfully', 'Profile Information');
        this.resetForm(form);
        this.service.retriveList();
      })
  
    }
  

}
