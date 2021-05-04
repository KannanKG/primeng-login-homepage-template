import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  hide = true;
  env = environment;
  login: FormGroup;
  email = new FormControl('', Validators.compose([Validators.email, Validators.required]));
  password = new FormControl('', Validators.required);

  constructor(
    fb: FormBuilder,
    private http: HttpClient,
    private messageService: MessageService
  ) {
    this.login = fb.group({
      email: this.email,
      password: this.password
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const body = { email: this.email.value, password: this.password.value };
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Request Method', 'POST');
    this.http.post(environment.backend + 'sso', body, { 'headers': headers })
      .subscribe(
        (data: any) => {
          console.log(data.jwt);
          localStorage.setItem('jwt', data.jwt);
          this.messageService.add({ severity: 'success', summary: 'Login Successful', detail: 'you logged in as Admin' });
        }, err => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: err.message, life: 6000 });
        }
      );
  }

}
