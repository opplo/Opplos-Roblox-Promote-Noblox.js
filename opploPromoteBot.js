var rbx = require('noblox.js')

var user = ''
var pass = ''
var groupId = 997074
var fromRank = 1
var toRank = 2

rbx.login(user, pass)
.then(function() {
	var playersAtRank = rbx.getPlayers(groupId, fromRank)
	playersAtRank.then(function(groupObj){
		console.log("Starting rank changes")
		var players = groupObj.players
		for (var i = 0; i < players.length; i++){
			var id = players[i].id
			rbx.setRank(groupId, id, toRank)
		}
		console.log("Set rank of " + players.length + " players " +
			"from " + fromRank + " to " + toRank)
	})
})

