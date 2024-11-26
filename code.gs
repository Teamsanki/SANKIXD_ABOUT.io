function doPost(e) {
  // Get the data from the POST request
  var data = JSON.parse(e.postData.contents);
  var name = data.name;
  var username = data.username;

  // Telegram Bot information
  var botToken = "7902514308:AAGRWf0i1sN0hxgvVh75AlHNvcVpJ4j07HY";  // Replace with your actual Telegram Bot token
  var chatId = "-1002148651992";      // Replace with your Telegram group chat ID

  // Construct the message
  var message = name + " (Telegram username: " + username + ") has visited your Music Bot website!";

  // Send the message to Telegram
  var url = "https://api.telegram.org/bot" + botToken + "/sendMessage";
  var payload = {
    chat_id: chatId,
    text: message
  };

  // Send the HTTP request to Telegram API
  var options = {
    "method": "post",
    "payload": payload
  };

  UrlFetchApp.fetch(url, options); // Send message to Telegram

  return ContentService.createTextOutput("Success");
}
