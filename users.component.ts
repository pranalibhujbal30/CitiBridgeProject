import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  /*users:string[];
  constructor(
    private httpClientService:HttpClientService
  ) { }

  ngOnInit() {
    this.httpClientService.getUsers().subscribe(
     response =>this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response)
{
    this.users=response;
}*/

marketcaps!: HttpClientService[];
saved = " ";

   
  constructor(
    private httpClientService:HttpClientService,
    public login :LoginComponent
  ) { }

  ngOnInit() {

    /*let resp = this.httpClientService.saveSelectedStock(this.saveStock);
resp.subscribe(data => {
  this.saved = data;
});*/
    
  }
  random1(start:number,end: number)
  {
    this.httpClientService.getMarketCap(start,end).subscribe(
      response =>this.handleSuccessfulResponse(response),
     );
  }

handleSuccessfulResponse(resp:any)
{
    this.marketcaps=resp;
}

saveStock(stock_Symbol:string,stockPrice:number,perc_ChangeIn_Price:number)
{
  //const user_id=this.login.formGroup.controls['user_id'].value
  //const user_id=this.login.formGroup.getRawValue()['user_id'];
  const user_id=this.login.user_id;
   //const user_id =this.login.formGroup.get("user_id").value;
   const saveStock = 
{
  "user_id": user_id,
  "Symbol": stock_Symbol,
  "stockprice": stockPrice,
  "quantity": 3
}

   //var person = prompt("Please enter your name: ", "Username");
   let resp = this.httpClientService.saveSelectedStock(saveStock);
resp.subscribe(data => {
  this.saved = data;
}
);
console.log(user_id);
}








}
