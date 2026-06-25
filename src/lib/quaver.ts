export interface ApiResponse {
	user: User;
}

export interface User {
	id: number;
	steam_id: string;
	username: string;
	time_registered: string;
	allowed: boolean;
	privileges: number;
	usergroups: number;
	mute_end_time: string;
	latest_activity: string;
	country: string;
	avatar_url: string;
	twitter: string;
	title: string;
	twitch_username: string;
	donator_end_time: string;
	discord_id: string;
	misc_information: MiscInformation;
	clan_id: number;
	clan_tag: string;
	clan_accent_color: string;
	clan_leave_time: string;
	accent_color_customizable: boolean;
	accent_color: unknown;
	client_status: ClientStatus | null;
	stats_keys4: Stats;
	stats_keys7: Stats;
}

export interface MiscInformation {
	discord: string;
	twitch: string;
	default_mode: number;
}

export interface ClientStatus {
	status: number;
	mode: number;
	content: string;
}

export interface Stats {
	ranks: Ranks;
	total_score: number;
	ranked_score: number;
	overall_accuracy: number;
	overall_performance_rating: number;
	play_count: number;
	fail_count: number;
	max_combo: number;
	total_marvelous: number;
	total_perfect: number;
	total_great: number;
	total_good: number;
	total_okay: number;
	total_miss: number;
	count_grade_x: number;
	count_grade_ss: number;
	count_grade_s: number;
	count_grade_a: number;
	count_grade_b: number;
	count_grade_c: number;
	count_grade_d: number;
}

export interface Ranks {
	global: number;
	country: number;
	total_hits: number;
}
