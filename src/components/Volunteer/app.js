document.addEventListener("DOMContentLoaded", function() {
    const videoElement = document.getElementById('camera-preview');
    const resultElement = document.getElementById('result');

    // Initialize the QR code scanner
    const qrCodeScanner = new Html5Qrcode("camera-preview");

    // Start the camera and QR code scanning
    qrCodeScanner.start(
        { facingMode: "environment" }, // Camera facing mode
        {
            fps: 10, // Frames per second
            qrbox: { width: 250, height: 250 } // Size of the scanning box
        },
        (decodedText, decodedResult) => {
            // On QR code decoded
            resultElement.textContent = `QR Code Detected: ${decodedText}`;
        },
        (errorMessage) => {
            // On error
            console.warn(`QR Code scan error: ${errorMessage}`);
        }
    ).catch(err => {
        console.error(`Failed to start QR Code scanner: ${err}`);
    });
});
