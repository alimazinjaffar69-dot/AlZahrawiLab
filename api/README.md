# Al-Zahrawi Lab PHP API

Plain PHP backend for XAMPP + MySQL.

## Install

1. Copy the `api` folder into your XAMPP project folder, for example:
   `C:\xampp\htdocs\AlZahrawiLab\api`
2. Open `http://localhost/phpmyadmin`.
3. Import `api/schema.sql`.
4. Edit `api/config.php` if your MySQL username/password are different.
5. Change `BASE_API_KEY` in `api/config.php`.

## Endpoints

Patient account:

- `POST /api/auth/register.php`
- `POST /api/auth/login.php`
- `POST /api/auth/logout.php`
- `GET /api/auth/me.php`

Bookings:

- `GET /api/bookings/index.php`
- `POST /api/bookings/index.php`
- `PUT /api/bookings/index.php?id=BOOKING_ID` with `X-Base-Key`
- `DELETE /api/bookings/index.php?id=BOOKING_ID`

Results:

- `GET /api/results/index.php`
- `POST /api/results/index.php` with `X-Base-Key`, multipart PDF upload
- `GET /api/results/download.php?id=RESULT_ID`
- `DELETE /api/results/index.php?id=RESULT_ID` with `X-Base-Key`

Patient requests use:

`Authorization: Bearer YOUR_TOKEN`

Base app requests use:

`X-Base-Key: change-this-base-secret-key`
