import {
	buildAuthorization,
	getGameList,
	getUserWantToPlayList,
} from "@retroachievements/api";

(async function api() {
	const username = "Skarzyll";
	const webApiKey = "4IZHZlrkJwCENCgimcHLvw7G3tXNbfX1";

	const authorization = buildAuthorization({
		username: username,
		webApiKey: webApiKey,
	});

	let offcount = 500;

	const UWTP = await getUserWantToPlayList(authorization, {
		username: username,
		count: 500,
		offset: offcount,
	});

	const filtergames = UWTP.results.filter((game) => game.consoleName.includes("PlayStation 2"));

	console.log(
		filtergames.map((game) => {
			return 'id: ' + game.id + " - " + game.title + " - " + game.consoleName
		})
	);
})();
