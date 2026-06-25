import type { PageLoad } from "./$types";
import type { ApiResponse } from "$lib/quaver";

const USER_ID = "345922";

export const load: PageLoad = async ({ fetch }) => {
	const req = await fetch(`https://api.quavergame.com/v2/user/${USER_ID}`);
	const json = (await req.json()) as ApiResponse;
	return { quaver: json.user } as const;
};
