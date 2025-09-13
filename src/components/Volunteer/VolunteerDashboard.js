import React, { useState } from 'react';
import { firestore } from '../../firebase';
import { QrReader } from 'react-qr-reader';  // ✅ named import

function VolunteerDashboard() {
  const [scanResult, setScanResult] = useState('');

  const handleResult = (result, error) => {
    if (!!result) {
      const data = result?.text;
      setScanResult(data);

      firestore.collection('guests').doc(data).get()
        .then(doc => {
          if (doc.exists) {
            const guestData = doc.data();
            console.log("Guest data:", guestData);
          } else {
            console.log("Guest not found");
          }
        });
    }
    if (!!error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Volunteer Dashboard</h2>
      <QrReader
        onResult={handleResult}
        constraints={{ facingMode: 'environment' }}
        style={{ width: '100%' }}
      />
      <p>{scanResult}</p>
    </div>
  );
}

export default VolunteerDashboard;
