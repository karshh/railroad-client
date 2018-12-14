import { Injectable } from '@angular/core';
import { Faction } from '../../class/faction';
import { ApiService } from '../api/api.service';

@Injectable({
	providedIn: 'root'
})
export class RailroadService {

	faction: Faction;

	constructor(private apiService: ApiService) {}

	initialize() {
		this.apiService.getFactionData().subscribe(
			(response) => {
				this.faction = new Faction(response, this.apiService);
				console.log(this.faction);
			}
		)
	}
}
