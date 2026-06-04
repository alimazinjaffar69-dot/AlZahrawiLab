# Al-Zahrawi Laboratory App

**مختبر الزهراوي — Advanced Medical Diagnostics**

A full-featured web application for Al-Zahrawi Laboratory, built with React + Vite.

---

## Features

- **Home Dashboard** — personalised notifications, quick-access cards, featured exclusive tests, lab stats
- **Test Catalog** — all 35 departments, 200+ investigations searchable and filterable by category; each test includes clinical indications, result interpretation, and sample type
- **Exclusive Test Badges** — all tests exclusive to Al-Zahrawi Lab are clearly highlighted
- **Live Chat** — messaging between patients and lab staff/admin
- **Reports Viewer** — digital lab reports with result tables, reference ranges, flagging of abnormal values, PDF download button
- **About Page** — lab info, director credentials, contact details, department overview, FilmArray technology highlight
- **Patient Profile** — account management, notifications, linked doctors

---

## Quick Start

### Prerequisites
- Node.js v18 or higher (https://nodejs.org)

### Installation

```bash
# 1. Unzip this folder, then open terminal inside it
cd AlZahrawiLab

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open browser at http://localhost:5173
```

### Build for Production

```bash
npm run build
# Output is in the /dist folder — deploy to any static host
```

---

## Project Structure

```
AlZahrawiLab/
├── index.html              # HTML entry point
├── vite.config.js          # Vite configuration
├── package.json            # Dependencies
└── src/
    ├── main.jsx            # React root mount
    ├── App.jsx             # Main app with navigation
    ├── data.js             # All test data, reports, chat data
    ├── styles.js           # Shared style objects
    └── components/
        ├── HomeScreen.jsx    # Dashboard
        ├── TestsScreen.jsx   # Test catalog + detail view
        ├── ChatScreen.jsx    # Messaging interface
        ├── ReportsScreen.jsx # Lab report viewer
        ├── AboutScreen.jsx   # Lab info page
        └── ProfileScreen.jsx # Patient profile
```

---

## Customisation

### Adding Tests
Open `src/data.js` and add entries to the relevant category in the `CATEGORIES` array:
```js
{ name: "My New Test", exclusive: true, indication: "...", interpretation: "...", sample: "Serum" }
```

### Adding Real Reports
In `src/data.js`, add to the `REPORTS` array with actual patient result values.

### Connecting a Real Backend
Replace the mock `REPORTS` and `INITIAL_MESSAGES` arrays with API calls to your backend.
Recommended stack:
- **Node.js + Express** for the REST API
- **Firebase Firestore** for real-time chat
- **Firebase Cloud Messaging** for push notifications
- **AWS S3 or Firebase Storage** for PDF report storage
- **PostgreSQL** for patient and report data

---

## Publishing to App Store & Google Play

To publish as a native mobile app, convert this project to React Native using **Expo**:

1. Install Expo CLI: `npm install -g expo-cli`
2. Create a new Expo project: `expo init AlZahrawiMobile`
3. Copy the component logic and data into the new project
4. Replace HTML/CSS styles with React Native `StyleSheet`
5. Use `expo build:ios` and `expo build:android` to generate store-ready builds
6. Submit to Apple App Store (requires Apple Developer account, $99/year)
7. Submit to Google Play Console (requires Google Developer account, $25 one-time)

---

## Contact

**Dr. Mazin J. Mousa** — M.B.Ch.B · F.I.C.M.S. (Path.)  
📞 07601429003(WhatsApp)  
✉️ mazin.mousa@gmail.com
