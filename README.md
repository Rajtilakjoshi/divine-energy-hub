<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
# Divine Energy Hub – Volunteer Management System  

This project was developed, deployed, and used live at a large annual spiritual event attended by **5000+ guests** and managed by **500+ volunteers**.  
It provided guest entry management, prasad (food) distribution tracking, photo/document verification, **real-time monitoring**, and **Google Sheets integration for admin-friendly management**.  

---

## Live Demo Video  

[▶ Watch Demo Video](./assets/demo_video.mp4)  
*(Replace with YouTube/Vimeo link or local mp4 in assets folder)*  .

---

## Screenshots from Real Deployment  

| Entry Gate Scanner | Token Finder | Photo Uploader | Google Sheets Integration |
|--------------------|--------------|----------------|---------------------------|
| ![Entry Gate](./assets/entry_gate.png) | ![Token Finder](./assets/token_finder.png) | ![Photo Uploader](./assets/photo_uploader.png) | ![Sheets](./assets/sheets.png) |  

---

## Overview  

Divine Energy Hub was delivered as a freelance client solution and deployed on **AWS with load balancing** to ensure scale and reliability.  
The system was successfully used in production with **zero failures** during the event.  

A key addition was **Google Sheets real-time mapping via App Script**, which enabled administrators to view, filter, and edit guest data directly in Sheets while keeping it auto-synced with the main database.  

For complete technical specifications, requirements, and architecture, see below.  

---

## 1. Goals & Objectives  

| Goal | Description |
|------|-------------|
| Scalable Guest Management | Handle 5000+ attendees with concurrent volunteer access. |
| Volunteer-Friendly UI | Simple and intuitive interface usable by all volunteers. |
| Secure & Foolproof | Prevent duplicate entries, unauthorized access, or data corruption. |
| Real-Time Monitoring | Live counters and dashboards for admins. |
| Google Sheets Integration | Provide admins with a familiar, easy-to-use interface. |
| Industry-Ready Deployment | Cloud-based, load balanced, and fault tolerant. |

---

## 2. Key Features  

| Feature | Description |
|---------|-------------|
| Entry Gate Validation | QR code scanning for guest entry; duplicate entries prevented. |
| Prasad Distribution Tracking | Multi-counter validation ensuring guests receive prasad only once. |
| Token Finder | Manual guest search by name and phone number if QR fails. |
| Photo and Document Upload | Volunteer photo capture and document upload stored securely in AWS S3. |
| Admin Controls | Live counters, volunteer management, and guest reporting. |
| Google Sheets Integration | Real-time sync with Google Sheets using App Script; admins can view, filter, and edit guest data directly in Sheets with auto-update to the database. |
| Error Handling | Duplicate prevention, offline fallback, and secure data updates. |

---

## 3. User Stories  

| Role | Requirement | Purpose |
|------|-------------|---------|
| Volunteer | Scan guest QR codes at entry and prasad counters | Confirm attendance and track prasad distribution |
| Volunteer | Search guest by name and phone number | Allow fallback when QR is damaged or unreadable |
| Volunteer | Capture and upload guest photo/document | Maintain verified records |
| Gate Admin | Manage volunteers and monitor live counters | Oversee gate-level operations |
| Main Admin | View live reports across all gates | Ensure complete event-level visibility |
| Admin (Non-technical) | View and edit guest records in Google Sheets | Manage data easily without accessing databases |

---

## 4. Functional Requirements  

| ID | Requirement |
|----|-------------|
| FR1 | Volunteers can log in with Firebase role-based authentication. |
| FR2 | QR codes can be scanned for guest entry and prasad distribution. |
| FR3 | Guests can be searched using name and phone number. |
| FR4 | Guest photos and documents can be uploaded and stored securely. |
| FR5 | Admin dashboards show real-time counters for registered, entered, and pending guests. |
| FR6 | Google Sheets integration reflects live updates from database and allows editing. |
| FR7 | Duplicate entries and prasad serving are automatically prevented. |

---

## 5. Non-Functional Requirements  

| ID | Requirement |
|----|-------------|
| NFR1 | System supports 500+ concurrent volunteers. |
| NFR2 | QR validation response time under 1 second. |
| NFR3 | Zero tolerance for duplicate or missed entries. |
| NFR4 | Deployment on AWS with load balancer for scalability. |
| NFR5 | Cloud storage with AWS S3 and secure data access policies. |
| NFR6 | Google App Script ensures near real-time sync between Sheets and MongoDB. |

---

## 6. Technical Specifications  

### 6.1 Architecture Overview  
- **Frontend:** React, TailwindCSS, Custom CSS  
- **Backend:** Node.js with Express APIs  
- **Authentication:** Firebase Authentication (role-based access)  
- **Database:** MongoDB (guest and volunteer data)  
- **Storage:** AWS S3 (photos and documents)  
- **Admin Interface:** Google Sheets auto-updated via App Script, synced with MongoDB  
- **Deployment:** AWS EC2 with Load Balancer  

### 6.2 Component Mapping  

| Component | Function |
|-----------|----------|
| EntryGate.jsx | QR scanning and validation at entry gates |
| QrScanner.jsx | Prasad distribution tracking across multiple counters |
| TokenFinder.jsx | Fallback search for guests by name and phone |
| LazySearchResult.jsx | Lazy-rendered search results with guest details |
| PhotoUploader.jsx | Photo and document capture and upload |
| QrScannerStyles.css | UI overlays and scanning animations |

---

## 7. UI/UX Requirements  

| Page | Elements |
|------|----------|
| Volunteer Dashboard | QR scanning module, token search, photo upload |
| Entry Gate | QR reader with animated scanning overlay |
| Token Finder | Name + phone input fields, search results with guest details |
| Photo Uploader | Webcam integration, upload and retake options |
| Admin Dashboard | Live counters, guest statistics, volunteer management |
| Google Sheets View | Auto-updated guest list with edit and filter support |

---

## 8. Acceptance Criteria  

| ID | Criteria |
|----|----------|
| AC1 | Volunteers log in successfully with Firebase authentication. |
| AC2 | QR scans update guest entry or prasad status in real time. |
| AC3 | Duplicate entries or double serving are blocked automatically. |
| AC4 | Guest photos/documents upload to AWS S3 successfully. |
| AC5 | Admin dashboard reflects live guest counts accurately. |
| AC6 | Updates made in Google Sheets are reflected in MongoDB and vice versa. |

---

## 9. Out of Scope  

- Mobile application interface (web app only).  
- Integration with third-party ticketing systems.  
- Multi-language support.  
- Advanced analytics beyond live counters.  

---

## 10. Event Deployment  

- Successfully handled 5000+ guests and 500+ volunteers.  
- Achieved 100% uptime during peak traffic with AWS load balancer.  
- Eliminated manual errors and duplicate entries.  
- Reduced entry processing time significantly.  
- Admins managed guest data directly from Google Sheets in real time.  
- Adopted by client as the standard yearly solution.  

---

## 11. Risks & Mitigations  

| Risk | Mitigation |
|------|-------------|
| Duplicate entries | Real-time QR + MongoDB validation |
| Network instability | Fallback manual search with Token Finder |
| Volunteer misuse | Role-based Firebase authentication |
| High traffic load | AWS load balancer and horizontal scaling |
| Admin data management complexity | Google Sheets integration with auto-sync |

---

## 12. Appendix  

- **Demo Video:** [Insert Link Here]  
- **Screenshots:**  
  - Entry Gate Scanner  
  - Token Finder  
  - Photo Uploader  
  - Google Sheets Integration  
- **Dataset:** Guest registration and QR codes managed in MongoDB  
- **References:** Firebase, MongoDB, AWS S3, Google App Script documentation  

---

## Event Outcomes  

- Reduced entry processing time, eliminating long queues.  
- Prevented duplicate entries and double serving of prasad.  
- Real-time monitoring of guest flow for administrators.  
- Guest identity verified and stored through photo uploads.  
- Admins used Google Sheets for effortless management and editing.  
- Delivered a robust, production-ready solution adopted by the client for recurring use.  

---

## Conclusion  

This repository contains the **actual implementation code** of a system deployed and used in live conditions.  
It demonstrates how **production-grade, full-stack solutions** can be delivered for **large-scale public events** with a focus on reliability, scalability, usability, and admin accessibility.  

---
>>>>>>> 2d23a807161dd1bc20de5d65b74e9ec05aaf27ca
