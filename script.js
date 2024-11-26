document.getElementById('userForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;

    // Display "About" section
    document.getElementById('aboutSection').style.display = 'block';

    // Replace with your server endpoint (VPS URL)
    const serverEndpoint = 'http://4.248.50.12:3000/api/saveData';  // Replace with your VPS IP and port

    // Send data to the server
    fetch(serverEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, username }),
    })
    .then(response => {
        if (response.ok) {
            console.log('Data successfully saved');
        } else {
            console.error('Failed to save data');
        }
    })
    .catch(error => console.error('Error:', error));
});
