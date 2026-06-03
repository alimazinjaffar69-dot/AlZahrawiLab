# Android Studio Build Guide

## Where To Edit The Server IP Later

Edit this file:

`src/apiConfig.js`

Change:

```js
export const API_BASE_URL = "http://192.168.0.164/AlZahrawiLab/api";
```

If you change `BASE_API_KEY` in PHP, also change it in the same file:

```js
export const BASE_API_KEY = "change-this-base-secret-key";
```

It must match:

`api/config.php`

```php
const BASE_API_KEY = 'same-key-here';
```

After changing the IP or key, rebuild the web app and copy it into Android again.

## MySQL

The database file is:

`api/schema.sql`

Import it in phpMyAdmin on the server PC.

## API Endpoints Used By The Patient App

- Create account: `POST http://192.168.0.164/AlZahrawiLab/api/auth/register.php`
- Login: `POST http://192.168.0.164/AlZahrawiLab/api/auth/login.php`
- Create booking: `POST http://192.168.0.164/AlZahrawiLab/api/bookings/index.php`
- List my bookings: `GET http://192.168.0.164/AlZahrawiLab/api/bookings/index.php`
- Delete my booking: `DELETE http://192.168.0.164/AlZahrawiLab/api/bookings/index.php?id=ID`
- List my results: `GET http://192.168.0.164/AlZahrawiLab/api/results/index.php`
- Download result PDF: `GET http://192.168.0.164/AlZahrawiLab/api/results/download.php?id=ID`

Patient requests use:

`Authorization: Bearer PATIENT_LOGIN_TOKEN`

## API Endpoints Used By The Base/Admin App

- List all bookings: `GET http://192.168.0.164/AlZahrawiLab/api/bookings/index.php`
- Update booking status: `PUT http://192.168.0.164/AlZahrawiLab/api/bookings/index.php?id=ID`
- Delete booking: `DELETE http://192.168.0.164/AlZahrawiLab/api/bookings/index.php?id=ID`
- Upload result PDF: `POST http://192.168.0.164/AlZahrawiLab/api/results/index.php`
- List all results: `GET http://192.168.0.164/AlZahrawiLab/api/results/index.php`
- Delete result: `DELETE http://192.168.0.164/AlZahrawiLab/api/results/index.php?id=ID`

Base requests use:

`X-Base-Key: YOUR_BASE_API_KEY`

## Build Patient App In Android Studio

1. Open Android Studio.
2. Choose `Open`.
3. Select the `android-patient` folder.
4. Wait for Gradle sync to finish.
5. Connect the phone or use an emulator.
6. Click `Run`, or build an APK from `Build > Build Bundle(s) / APK(s) > Build APK(s)`.

## Build Base/Admin App In Android Studio

1. Open Android Studio.
2. Choose `Open`.
3. Select the `android-base` folder.
4. Wait for Gradle sync to finish.
5. Click `Run`, or build an APK from `Build > Build Bundle(s) / APK(s) > Build APK(s)`.

## Important LAN Notes

- The phone must be able to reach `192.168.0.164`.
- Windows Firewall must allow Apache/XAMPP.
- Use `http://192.168.0.164/AlZahrawiLab/api/`, not `localhost`, because on a phone `localhost` means the phone itself.
- Cleartext HTTP is enabled in the Android manifest with `android:usesCleartextTraffic="true"`.
