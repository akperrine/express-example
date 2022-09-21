const model = require("../models/friends.model");

function postFriends(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: "Missing friend name",
    });
  }

  console.log("got here");
  const newFriend = {
    id: model.length,
    name: req.body.name,
  };
  model.push(newFriend);
  res.json(newFriend);
}

function getFriends(req, res) {
  res.json(model);
}

function getAFriend(req, res) {
  const friendId = +req.params.friendId;
  const friend = model[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: "friend does not exist",
    });
  }
}

module.exports = {
  postFriends,
  getFriends,
  getAFriend,
};
