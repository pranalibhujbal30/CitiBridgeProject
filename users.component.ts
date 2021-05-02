import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, Input, OnInit ,OnChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientService } from '../http-client.service';
import { LoginComponent } from '../login/login.component';
import { MarketCapService } from './marketCap.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  template: ` id ` ,
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit , OnChanges {

  //stocks:MarketCapService[];
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
@Input() id: number;
marketcaps!: HttpClientService[];
saved = " ";
userID:number;
formGroup:FormGroup;
msgTrue=false;
//stockQuantity:number;
public static quantity:number;

   
  constructor(
    private httpClientService:HttpClientService,
    private login :LoginComponent,
    private router:Router
  ) { }

  ngOnChanges() {
    this.userID=this.id;
    
  }


    ngOnInit() {
      this.initForm();
      
    }

    initForm(){
      this.formGroup=new FormGroup({
        quantity: new FormControl('', Validators.required)
      })
    }
   

    /*let resp = this.httpClientService.saveSelectedStock(this.saveStock);
resp.subscribe(data => {
  this.saved = data;
});*/
    
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

rabdom3()
{
  
  if(this.formGroup.valid)
  {
    UsersComponent.quantity=this.formGroup.value;
  }

}

/*lgbtnclick(stock_Symbol:string,stockPrice:number,perc_ChangeIn_Price:number) {
  //this.msgTrue=true;
  //alert(UsersComponent.quantity);
  this.stockQuantity = this.rabdom3();
  console.log(this.stockQuantity);
  this.saveStock(stock_Symbol,stockPrice,perc_ChangeIn_Price,this.stockQuantity);
}*/

saveStock(stock_Symbol:string,stockPrice:number,perc_ChangeIn_Price:number,stock_quantity:number)
{
  //const user_id=this.login.formGroup.controls['user_id'].value
  //const user_id=this.login.formGroup.getRawValue()['user_id'];
  //const user_id=this.login.id;
  //const user_id=LoginComponent.user_id;

  // const user_id =this.login.formGroup.get("user_id").value;
 //this.msgTrue=true;
 //var stockQuantity:number;
  if(this.formGroup.valid)
  {
    UsersComponent.quantity=this.formGroup.value.quantity;
  }
   const saveStock = 
{
  "user_id": LoginComponent.user_id,
  "Symbol": stock_Symbol,
  "stockprice": stockPrice,
  "quantity": stock_quantity
}

  console.log(saveStock);
   //var person = prompt("Please enter your name: ", "Username");
   let resp = this.httpClientService.saveSelectedStock(saveStock);
resp.subscribe(data => {
  console.log(data);
  //this.saved = data;
  //console.log(this.saved);
}
);
console.log(LoginComponent.user_id);


}

random2(){
  this.router.navigate(["userstock"]);
}










}
