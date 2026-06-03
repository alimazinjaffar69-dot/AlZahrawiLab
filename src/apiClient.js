import { API_BASE_URL, BASE_API_KEY } from "./apiConfig.js";
import { readToken } from "./auth.js";

function joinUrl(path) {
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

async function fetchWithTimeout(url, options = {}) {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 12000);

  try {
    console.log("[AlZahrawi API]", options.method || "GET", url);
    return await fetch(url, { ...options, signal: controller.signal });
  } catch (error) {
    const wrapped = new Error(error.name === "AbortError" ? "request_timeout" : "network_error");
    wrapped.cause = error;
    wrapped.detail = buildErrorDetail({ url, error });
    throw wrapped;
  } finally {
    window.clearTimeout(timeout);
  }
}

async function parseResponse(response, url) {
  const contentType = response.headers.get("content-type") || "";
  const responseBody = await response.text();
  let payload = { ok: response.ok, text: responseBody };
  if (contentType.includes("application/json")) {
    try {
      payload = responseBody ? JSON.parse(responseBody) : {};
    } catch {
      payload = { ok: false, error: "invalid_json_response", text: responseBody };
    }
  }

  if (!response.ok || payload.ok === false) {
    const error = new Error(payload.error || `HTTP ${response.status}`);
    error.payload = payload;
    error.status = response.status;
    error.detail = buildErrorDetail({ url, response, body: responseBody });
    throw error;
  }

  return payload;
}

export async function apiJson(path, { method = "GET", body, token, base = false } = {}) {
  const url = joinUrl(path);
  const headers = { Accept: "application/json" };
  if (body !== undefined) headers["Content-Type"] = "application/json";
  if (base) headers["X-Base-Key"] = BASE_API_KEY;
  const authToken = token || readToken();
  if (authToken) headers.Authorization = `Bearer ${authToken}`;

  const response = await fetchWithTimeout(url, {
    method,
    headers,
    body: body === undefined ? undefined : JSON.stringify(body),
  });

  return parseResponse(response, url);
}

export async function apiUpload(path, formData, { base = false, token } = {}) {
  const url = joinUrl(path);
  const headers = { Accept: "application/json" };
  if (base) headers["X-Base-Key"] = BASE_API_KEY;
  const authToken = token || readToken();
  if (authToken) headers.Authorization = `Bearer ${authToken}`;

  const response = await fetchWithTimeout(url, {
    method: "POST",
    headers,
    body: formData,
  });

  return parseResponse(response, url);
}

export function apiFileUrl(path) {
  return joinUrl(path);
}
