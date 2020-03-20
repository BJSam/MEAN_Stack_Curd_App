import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ConnectService {
url = "http://localhost:3300/";
  constructor(private http: HttpClient) { }
  showdata(){
    
    return this.http.get(
      this.url+"tdos",{
        headers: {'Content-Type': 	'application/json'} /** Use Content-type as your requirement undifined OR application/json**/
      });
      
  }
  addData(fmmdata){
  // JSON.stringify(fmmdata) console.log("service"+JSON.stringify(fmmdata));
   
    return this.http.post("http://localhost:3300/snd",JSON.stringify(fmmdata),
    {  headers: {'Content-Type': 	"application/json"} });
      
  }
  deleteDatat(delid){
    return this.http.delete(this.url+delid,
    {  headers: {'Content-Type': 	"application/json"} });  
  }
}
