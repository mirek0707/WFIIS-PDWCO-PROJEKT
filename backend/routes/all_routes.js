const player = require("../controllers/player_controllers")
const club = require("../controllers/club_controllers")

module.exports = function (app) {
    app.get("/api/getPlayers", player.getPlayers)
    app.post("/api/getPlayersRelatedWithClub", player.getPlayersRelatedWithClub)
    app.get("/api/getClubs", club.getClubs)
    app.get("/api/getClubsNames", club.getClubsNames)
}