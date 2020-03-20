import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ConnectService } from '../connect.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  data: any;
  replaceid:any = null;
  editclicked :boolean = false;
  constructor(private http: HttpClient, private connectS: ConnectService) { }

  getFormData(fmdata: NgForm) {
    this.connectS.addData(fmdata.value).subscribe((res) => {
      console.log(res);
      this.getdata();
    });
    fmdata.reset();
  }

  ngOnInit() {
    this.connectS.showdata().subscribe((dt) => {
      this.data = dt;
    });
  }
  objectKeys(obj) {
    return Object.keys(obj);
  }
  deletedta(delid) {
    console.log(delid);
    this.connectS.deleteDatat(delid).subscribe((dt) => {
      console.log(dt);
      this.getdata();
    });
    
  }
  editdat(editid,fname,fage,fmdta:NgForm ) {
    this.replaceid =editid;
   this.editclicked = true;
    fmdta.controls["name"].setValue(fname);
    fmdta.controls["age"].setValue(fage);
    // fmdta.name.value = fname;
    // fmdta.age.value = fage;
  }
  getdata() {
    console.log("entered again");
    this.connectS.showdata().subscribe((dtt) => {
      this.data = dtt;
    });
  }
  replacedatata(){
    if(this.replaceid!=null){
      
    }
  }
}
