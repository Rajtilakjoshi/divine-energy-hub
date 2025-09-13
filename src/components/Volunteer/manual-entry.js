document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('manual-entry-form');
    const messageElement = document.getElementById('message');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const tokenNumber = document.getElementById('token-number').value.trim();

        if (!tokenNumber) {
            showMessage('Please enter a token number.', 'error');
            return;
        }

        // Simulate manual entry check
        checkTokenNumber(tokenNumber)
            .then(response => {
                if (response.status === "success") {
                    showMessage('Entry successfully recorded.', 'success');
                    form.reset();
                    setTimeout(() => {
                        window.location.href = 'volunteer.html';
                    }, 3000);
                } else if (response.status === "already_scanned") {
                    showMessage('Token already scanned at ' + new Date(response.scannedTime).toLocaleString(), 'error');
                } else {
                    showMessage('Error: Token number already used or invalid.', 'error');
                }
            })
            .catch(error => {
                showMessage('An error occurred during manual entry.', 'error');
            });
    });

    function checkTokenNumber(tokenNumber) {
        // Simulate a check against Firebase or other backend
        return new Promise((resolve) => {
            setTimeout(() => {
                // Simulate responses
                if (tokenNumber === "12345") { // Simulate token has already been scanned
                    resolve({
                        status: "already_scanned",
                        scannedTime: "2024-09-11T14:00:00Z" // Simulated scanned time
                    });
                } else if (tokenNumber === "67890") { // Simulate error condition
                    resolve({ status: "error" });
                } else {
                    resolve({ status: "success" });
                }
            }, 1000); // Simulate network delay
        });
    }

    function showMessage(text, type) {
        messageElement.textContent = text;
        messageElement.classList.remove('hidden');
        messageElement.classList.add(type);
        setTimeout(() => {
            messageElement.classList.add('hidden');
        }, 3000);
    }
});
