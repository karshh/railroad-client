import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule,FormGroup, FormControl, Validators  } from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup;
	username: FormControl;
	password: FormControl;

	constructor() { 

		this.createFormControls();
		this.loginForm = new FormGroup({
			username: this.username,
			password: this.password
		});
	}

	ngOnInit() {
	}

	private createFormControls(): void {
		this.username = new FormControl('', Validators.required);
		this.password = new FormControl('', Validators.required);
	}
	public login() {
		return false;
	}

	public isLoggingIn() {
		return false;
	}
	public isLoginFailed() {
		return false;
	}
	public isServerError() {
		return false;
	}
}
