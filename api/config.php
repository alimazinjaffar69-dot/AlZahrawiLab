<?php
declare(strict_types=1);

const DB_HOST = '127.0.0.1';
const DB_NAME = 'alzahrawi_lab';
const DB_USER = 'root';
const DB_PASS = 'MazinHillahZahrawi1973';

const APP_TIMEZONE = 'Asia/Baghdad';
const UPLOAD_DIR = __DIR__ . '/uploads/results';
const MAX_PDF_BYTES = 10485760; // 10 MB

// Change this before using Base outside your computer.
const BASE_API_KEY = 'Base-2026';

const ALLOWED_ORIGINS = [
    'http://localhost:5173',
    'http://127.0.0.1:5173',
    'http://localhost',
    'http://127.0.0.1',
    'capacitor://localhost',
    'ionic://localhost',
    'http://192.168.0.164',
];

date_default_timezone_set(APP_TIMEZONE);
