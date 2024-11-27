document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the input values
    var username = document.getElementById('username').value;
    var telegramUsername = document.getElementById('telegramUsername').value;

    // Telegram bot token and chat ID
    var botToken = '7902514308:AAGRWf0i1sN0hxgvVh75AlHNvcVpJ4j07HY';  // Your bot token
    var chatId = '-1002148651992'; // Your chat ID
    var channel = 'matalbi_duniya'; // Your Channel username without @

    // Prepare the message
    var message = `A new user has visited your site! \n\n◈𝐍𝐀𝐌𝐄: ${username} \n\n◈𝐔𝐒𝐄𝐑𝐍𝐀𝐌𝐄: @${telegramUsername} \n\n◈𝐋𝐈𝐍𝐊: https://teamsanki.github.io/ABOUT_SANKIXD_BOT.io/ \n\n◈𝐂𝐇𝐀𝐍𝐍𝐄𝐋: @${channel}`;

    // Send the message to Telegram
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                // Show a "Submitted!" message
                alert('Submitted!');

                // Redirect the user to another page
                window.location.href = 'https://teamsanki.github.io/SANKI_WEBMUSIC.io/';  // Replace with the URL of the page you want to redirect to
            } else {
                alert('There was an error sending the message.');
            }
        })
        .catch(error => {
            alert('Error: ' + error.message);
        });
});
