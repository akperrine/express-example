const path = require("path");

function getMessages(req, res) {
  // res.sendFile(
  //   path.join(__dirname, "..", "public", "images", "skimountain.jpg")
  // );
  //   res.send("<h2>Hello Austin!!</h2>");
  res.render("messages", {
    title: "Messages to my Friends",
    friend: "Dustin",
  });
}

function postMessages(req, res) {
  console.log("Updating messages...");
}

module.exports = {
  getMessages,
  postMessages,
};
