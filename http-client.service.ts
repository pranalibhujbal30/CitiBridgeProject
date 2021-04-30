import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Userstock } from './users/marketCap.model';
import { LoginComponent } from './login/login.component';

export class User{
  constructor(
    public userID:number,
    public username:string,
    public password:string,
  ) {}
}
export class MarketCapService {
  perc_ChangeIn_Price!: Number;
  stockPrice!:Number;
  stock_Symbol!: String;
  
 
  constructor() { 
    perc_ChangeIn_Price : Number;
    stockPrice:Number;
    stock_Symbol: String;
  }
  
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  baseURL: string = "http://localhost:8086/";
  constructor(
    private httpClient:HttpClient,
    private router:Router
  ) { 
     }

     getUsers()
  {
    console.log("test call");
    return this.httpClient.get<User[]>('http://localhost:8086/users');
  }

    /*getUserDetails(username,password)
     {
       return this.httpClient.post('http://localhost:8086/login',{
         username,
         password
        }).subscribe(data=>{
          console.log(data, "is what we got from the server")
        })
     }*/

     login(data):Observable<any>
     {
       console.log("I am a server");
       return this.httpClient.post('http://localhost:8086/login',data,{responseType:'text'});

     }

     /*login(data)
     {
      return this.httpClient.post('http://localhost:8086/login',data)
     }*/

     getMarketCap(start:number, end: number)
     {
       // console.log("test call");
       // console.log(start)
       // console.log(end)
       if(start==45000 && end==100000)
         return this.httpClient.get<HttpClientService[]>('http://localhost:8086/stocks/45000/100000');
       if(start==100000 && end==300000)
         return this.httpClient.get<HttpClientService[]>('http://localhost:8086/stocks/100000/300000');
       if(start==300000 && end==600000)
         return this.httpClient.get<HttpClientService[]>('http://localhost:8086/stocks/300000/600000');
       else
        return this.httpClient.get<HttpClientService[]>('http://localhost:8086/stocks/600000/1500000');
     }
    
     public saveSelectedStock(userStock : Userstock) : Observable<string>{
      const headers = { 'content-type': 'application/json'}; 
     // var requestHeader = { headers: new HttpHeaders({ 'Content-Type': 'text/plain', 'No-Auth': 'False' })};
 //const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
//const httpOptions = {headers: new HttpHeaders({'auth': 'false'})};
      const body=JSON.stringify(userStock);  
   return this.httpClient.post<string>(this.baseURL + 'save-stocks', body , { 'headers':headers,responseType:'text' as 'json' });
    // return this.httpClient.post<string>(this.baseURL + 'save-stocks', body , { responseType:'text' as 'json'});
     
      
    }

    getEmployees()
  {
    //console.log("test call");
    
    return this.httpClient.get<HttpClientService[]>('http://localhost:8086/fetch-stocks/'+LoginComponent.user_id);
  }
    
}
