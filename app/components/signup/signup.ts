import { Component } from 'angular2/angular2';

@Component({
	selector: 'sign-up',
	templateUrl: './app/components/signup/signup.html'
})
export class Signup {
	constructor() {
		console.log('sign-up component loaded');
	}
}