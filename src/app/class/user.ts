export class User {

	ID: number;
	rank: string;
	level: number;
	gender: string;
	property: string;
	signup: Date;
	awards: number;
	friends: number;
	enemies: number;
	forum_posts: number;
	karma: number;
	age: number;
	role: string;
	donator: number;
	name: string;
	property_id: number;
	
	life_current: number;
	life_maximum: number;

	faction_position: string;
	faction_id: number;
	faction_days: number;
	faction_name: string;

	status_current: string;
	status_reason: string;
	
	last_action_timestamp: number;
	last_action_relative: string;
	

	constructor(json: any) {

		this.ID = json.ID;
		this.rank = json.rank;
		this.level = json.level;
		this.gender = json.gender;
		this.property = json.property;
		this.signup = new Date(json.signup),
		this.awards = json.awards;
		this.friends = json.friends;
		this.enemies = json.enemies;
		this.forum_posts = json.forum_posts;
		this.karma = json.karma;
		this.age = json.age;
		this.role = json.role;
		this.donator = json.donator;
		this.name = json.name;
		this.property_id = json.property_id;
		this.life_current = json.life_current;
		this.life_maximum = json.life_maximum;
		this.faction_position = json.faction_position;
		this.faction_id = json.faction_id;
		this.faction_days = json.faction_days;
		this.faction_name = json.faction_name;
		this.status_current = json.status_current;
		this.status_reason = json.status_reason;
		this.last_action_timestamp = json.last_action_timestamp;
		this.last_action_relative = json.last_action_relative;
	}
}
