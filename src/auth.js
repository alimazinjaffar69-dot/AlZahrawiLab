import { API_BASE_URL } from "./apiConfig.js";

export const USER_KEY = "alzahrawi-current-user";
export const TOKEN_KEY = "alzahrawi-api-token";
export const BASE_AUTH_KEY = "alzahrawi-base-auth";
export const BASE_PASSCODE = "Base-2026";

function apiUrl(path) {
  return `${API_BASE_URL.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
}

function buildErrorDetail({ url, error, response, body }) {
  const parts = [`URL: ${url}`];
  if (error) {
    parts.push(`Exception: ${error.name || "Error"}: ${error.message || String(error)}`);
  }
  if (response) {
    parts.push(`HTTP: ${response.status} ${response.statusText || ""}`.trim());
  }
  if (body) {
    parts.push(`Body: ${body}`);
  }
  return parts.join("\n");
}

async function authRequest(path, body) {
  const url = apiUrl(path);
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 12000);

  try {
    console.log("[AlZahrawi API]", "POST", url);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
    const responseBody = await response.text();
    let payload = {};
    try {
      payload = responseBody ? JSON.parse(responseBody) : {};
    } catch {
      payload = { ok: false, error: "invalid_json_response" };
    }
    if (!response.ok || payload.ok === false) {
      return {
        ok: false,
        error: payload.error || "server-error",
        detail: buildErrorDetail({ url, response, body: responseBody }),
      };
    }
    return payload;
  } catch (error) {
    return {
      ok: false,
      error: error.name === "AbortError" ? "request_timeout" : "network_error",
      detail: buildErrorDetail({ url, error }),
    };
  } finally {
    window.clearTimeout(timeout);
  }
}

export function readUser() {
  try {
    return JSON.parse(localStorage.getItem(USER_KEY));
  } catch {
    return null;
  }
}

export function saveUser(user) {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function readToken() {
  return localStorage.getItem(TOKEN_KEY) || "";
}

export function saveToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}

export async function signInPhoneAccount(phone, password) {
  const normalizedPhone = phone.trim();
  const result = await authRequest("auth/login.php", { phone: normalizedPhone, password });
  if (!result.ok) return result;
  saveUser(result.user);
  saveToken(result.token);
  return result;
}

export async function createPhoneAccount(phone, password) {
  const normalizedPhone = phone.trim();
  const result = await authRequest("auth/register.php", {
    phone: normalizedPhone,
    password,
    name: normalizedPhone,
  });
  if (!result.ok) return result;
  saveUser(result.user);
  saveToken(result.token);
  return result;
}

export function clearUser() {
  localStorage.removeItem(USER_KEY);
  localStorage.removeItem(TOKEN_KEY);
}

export function isBaseUnlocked() {
  return localStorage.getItem(BASE_AUTH_KEY) === "true";
}

export function unlockBase() {
  localStorage.setItem(BASE_AUTH_KEY, "true");
}

export function lockBase() {
  localStorage.removeItem(BASE_AUTH_KEY);
}
