import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2aXHppr-IO8UmITBOwlVvezQp6CbBfuk",
  authDomain: "divine-energy-hub.firebaseapp.com",
  projectId: "divine-energy-hub",
  storageBucket: "divine-energy-hub.appspot.com",
  messagingSenderId: "147821831701",
  appId: "1:147821831701:web:55728fe02acdc5d9f5101c",
  measurementId: "G-N71553V4QG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.addEventListener("DOMContentLoaded", function () {
    const scannerElement = document.getElementById('scanner');
    const messageElement = document.getElementById('message');
    const statusMessageElement = document.getElementById('status-message');
    const viewDetailsButton = document.getElementById('view-details');
    const manualEntryButton = document.getElementById('manual-entry');
    
    let scanTimeout;
    let maxScanningTime = 10000; // 10 seconds in milliseconds
    const html5QrCode = new Html5Qrcode("scanner-container"); // The container ID where the camera feed will show

    function startScanning() {
        // Start QR code scanning
        html5QrCode.start(
            { facingMode: "environment" }, // Use the back camera
            {
                fps: 10, // Frames per second for scanning
                qrbox: 250 // The width of the QR scanning box
            },
            onScanSuccess,
            onScanError
        ).catch(err => {
            console.error("Error starting QR code scanning:", err);
            showError('Error accessing camera or starting scanner.');
        });

        // Stop scanning after 10 seconds
        setTimeout(() => {
            html5QrCode.stop().then(() => {
                showError('Scanning timed out. Please try again.');
            }).catch(err => {
                console.error("Error stopping the scanner:", err);
            });
        }, maxScanningTime);
    }

    // Function to handle successful QR code scan
    function onScanSuccess(decodedText, decodedResult) {
        // Stop scanning when a QR code is successfully scanned
        html5QrCode.stop().then(() => {
            console.log(`QR code detected: ${decodedText}`);
            handleSuccess(decodedText); // Process the QR code data (token)
        }).catch(err => {
            console.error("Error stopping the scanner:", err);
        });
    }

    // Function to handle scan errors (optional)
    function onScanError(errorMessage) {
        console.log(`QR code scan error: ${errorMessage}`);
        // Optionally, show an error message or take other action
    }

    // Handle successful scan and fetch details from Firestore
    async function fetchGuestData(token) {
        try {
            console.log("Fetching data for token:", token);
            const docRef = doc(db, "guests", token);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                return docSnap.data();
            } else {
                console.log("No such document!");
                return null;
            }
        } catch (error) {
            console.error("Error fetching document:", error);
            showError('Error fetching guest details.');
            return null;
        }
    }

    async function handleSuccess(token) {
        const guestData = await fetchGuestData(token);

        if (guestData) {
            messageElement.classList.remove('hidden');
            messageElement.classList.add('success');
            statusMessageElement.textContent = `Guest: ${guestData.name}, Phone: ${guestData.phoneNumber}`;
            viewDetailsButton.classList.remove('hidden');
        } else {
            showError('Guest not found.');
        }
    }

    function showError(message) {
        messageElement.classList.remove('hidden');
        messageElement.classList.add('error');
        statusMessageElement.textContent = message;
        viewDetailsButton.classList.add('hidden');
    }

    function handleDetailsClick() {
        viewDetailsButton.addEventListener('click', () => {
            alert('Displaying guest details...');
        });
    }

    manualEntryButton.addEventListener('click', () => {
        window.location.href = 'manual-entry.html';
    });

    startScanning();
    handleDetailsClick();
});
