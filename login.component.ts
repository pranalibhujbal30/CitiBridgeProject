import { identifierModuleUrl } from '@angular/compiler';
import { Route } from '@angular/compiler/src/core';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpClientService } from '../http-client.service';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  template:`
  <app-users [id]="id"></app-users>`,
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  
  id:number;
  msgTrue=false;
  formGroup:FormGroup;
  public static user_id:number;
  

  constructor(private httpClientService:HttpClientService,private router:Router
    ) { }



  ngOnInit() {
    this.initForm();
  }

  /*loginUser(event)
  {
    event.preventDefault();
    const target=event.target;
    const username=target.querySelector('#username').value
    const password=target.querySelector('#password').value
    this.httpClientService.getUserDetails(username,password);

    console.log(username,password);
  }*/

  initForm(){
    this.formGroup=new FormGroup({
      user_id: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }
  

  loginProcess()
  {
    //var id;
    if(this.formGroup.valid)
    {
      this.httpClientService.login(this.formGroup.value).subscribe(result=>{
        console.log(result);
        if(result=="Login Successful!")
        {
          alert(result);
          LoginComponent.user_id=this.formGroup.value.user_id;
          //id=this.user_id;
          console.log("user id is"+LoginComponent.user_id);
          
           this.id=this.formGroup.value.user_id;
          console.log(this.id);

          this.msgTrue=true;
        
          this.router.navigate(["users"]);
         
         
        }
        else if(result=="Invalid credentials. Try again")
        {
          alert(result);
          this.msgTrue=false;
          this.router.navigate(['login']);
        }
       
      
      }
      )
     
    }

  }

  setUserId()
  {
    return this.id;

  }
  
 

  /*loginProcess()
  {
    if(this.formGroup.valid)
    {
      this.httpClientService.login(this.formGroup.value)
    }
  }

  onSubmit(loginForm:NgForm){
    console.log(loginForm)
  }*/

}
