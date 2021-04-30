import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { MarketCapService } from '../users/marketCap.model';

@Component({
  selector: 'app-userstock',
  templateUrl: './userstock.component.html',
  styleUrls: ['./userstock.component.css']
})
export class UserstockComponent implements OnInit {
 employees:MarketCapService[];
  constructor(private httpClientService:HttpClientService) { }

  ngOnInit() {
    this.httpClientService.getEmployees().subscribe(
     response =>this.handleSuccessfulResponse(response),
    );
    
  }

  handleSuccessfulResponse(resp:any)
{
    this.employees=resp;
}

}
