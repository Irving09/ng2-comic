import { Component } from 'angular2/angular2';

@Component({
	selector: 'home',
	templateUrl: './app/components/home/home.html'
})
export class Home {
	constructor() {
		console.log('home component loaded');
	}
}