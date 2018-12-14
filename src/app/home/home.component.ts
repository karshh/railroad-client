import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api/api.service';
import { RailroadService } from '../service/faction/railroad.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	contentList: any;

	constructor(private apiService: ApiService, private railroadService: RailroadService) { 
		// railroadService.initialize();
	}

	ngOnInit() {
	}



}
