import { Component, View } from 'angular2/angular2';
import { RouteConfig, ROUTER_DIRECTIVES, RouterOutlet } from 'angular2/router';
import { Login } from '../login/login';
import { Signup } from '../signup/signup';

@Component({
    selector: 'my-dashboard'
})
@View({
	templateUrl: './app/components/dashboard/dashboard.html',
	directives: [ROUTER_DIRECTIVES, RouterOutlet]
})
@RouteConfig([
	{
		path: '/login', component: Login, as: 'Login'
	},
	{
		path: '/signup', component: Signup, as: 'Signup'
	}
])
export class Dashboard {
	consructor() {
		console.log('Dashboard component loaded');
	}
}