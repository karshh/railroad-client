import { User } from './user';
import { ApiService } from '../service/api/api.service';

export class Faction {
	
	ID: number;
	age: number;
	best_chain: number;
	leader: number;
	coleader: number;
	members: any = {};

	constructor(json: any, private apiService: ApiService) {
		this.ID = json.ID;
		this.age = json.age;
		this.best_chain = json.best_chain;
		this.leader = json.leader;
		this.coleader = json.coleader;

		let i = 0;
		for (let index in json.members) {
			if (i > 3) break;
			this.addUser(parseInt(index));
			i++;	
		}
 	}

	public addUser(id: number) {
		this.members[id] = User;
		this.apiService.getUserData(id).subscribe(
		(response) => { 
			this.members[id] = new User(response); 
		});
	}

	// public addUsers(numList: Array<number>) {
	// 	numList.forEach(
	// 		(val, i) => this.addUser(val)
	// 	);
	// }

}
