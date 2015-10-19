import { Component } from 'angular2/angular2';
@Component({
    selector: 'my-dashboard',
    templateUrl: './app/components/dashboard/dashboard.html'
})
export class Dashboard {
	consructor() {
		console.log('Dashboard component loaded');
	}
}