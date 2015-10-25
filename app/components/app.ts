import { Component, View } from 'angular2/angular2';
import { RouteConfig, ROUTER_DIRECTIVES, RouterOutlet } from 'angular2/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { Signup } from './signup/signup';

@Component({
    selector: 'app'
})
@View({
	templateUrl: './app/components/app.html',
	directives: [ROUTER_DIRECTIVES, RouterOutlet]
})
@RouteConfig([
	{
		path: '/', component: Home, as: 'Home'
	},
	{
		path: '/login', component: Login, as: 'Login'
	},
	{
		path: '/signup', component: Signup, as: 'Signup'
	}
])
export class App {
	consructor() {
		console.log('Root app component loaded');
	}
}