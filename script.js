document.getElementById('userForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;

    // Send the data to the Google Apps Script endpoint
    fetch('https://script.google.com/macros/s/your_script_id/exec', {  // Replace with your Apps Script URL
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            username: username
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Display the "About" section after successful submission
        document.getElementById('aboutSection').style.display = 'block';
        alert('Your details have been submitted successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while submitting your details.');
    });
});
