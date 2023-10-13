import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	title = 'Deployment';
	_myValue: boolean = false;

	change() {
		this._myValue = !this._myValue;
	}
}
