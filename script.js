document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the input values
    var username = document.getElementById('username').value;
    var telegramUsername = document.getElementById('telegramUsername').value;

    // Telegram bot token and chat ID
    var botToken = '7902514308:AAGRWf0i1sN0hxgvVh75AlHNvcVpJ4j07HY';  // Replace with your bot's token
    var chatId = '-1002148651992';      // Replace with your chat's ID (can be a group or individual chat)

    // Prepare the message
    var message = `A new user has visited your site! \nName: ${username} \nTelegram Username: @${telegramUsername}`;

    // Send the message to Telegram
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert('Message sent to Telegram!');
            } else {
                alert('There was an error sending the message.');
            }
        })
        .catch(error => {
            alert('Error: ' + error.message);
        });
});
