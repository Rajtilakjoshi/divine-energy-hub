import React, { useState } from 'react';
import { firestore } from '../../firebase';
import QrReader from 'react-qr-reader';

function VolunteerDashboard() {
  const [scanResult, setScanResult] = useState('');

  const handleScan = (data) => {
    if (data) {
      setScanResult(data);

      // Fetch guest details from Firestore
      firestore.collection('guests').doc(data).get()
        .then(doc => {
          if (doc.exists) {
            const guestData = doc.data();
            // Handle success: show guest info, pop-up, etc.
          } else {
            // Handle error: guest not found or invalid QR code
          }
        });
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
      <h2>Volunteer Dashboard</h2>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      <p>{scanResult}</p>
    </div>
  );
}

export default VolunteerDashboard;

