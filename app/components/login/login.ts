import { Component } from 'angular2/angular2';

@Component({
	selector: 'log-in',
	templateUrl: './app/components/login/login.html'
})
export class Login {
	constructor() {
		console.log('log-in component loaded');
	}
}