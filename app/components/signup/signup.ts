import { Component } from 'angular2/angular2';

@Component({
	selector: 'sign-up',
	templateUrl: './app/components/signup/signup.html'
})
export class Signup {
	constructor() {
		console.log('sign-up component loaded');
	}

	registerToDatabase(email: string, confEmail: string, password: string, confPassword: string) {
		console.log(email);
		console.log(confEmail);
		console.log(password);
		console.log(confPassword);
	}
}