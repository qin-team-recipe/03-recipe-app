export const AFTER_LOGIN_URL_COOKIE_KEY = 'after_login_url';
export const SESSION_COOKIE_KEY = 'session_id';
export const FRONT_BASE_URL =
  process.env.FRONT_BASE_URL ?? 'http://localhost:3000';
export const API_BASE_URL = process.env.API_BASE_URL ?? 'http://localhost:8080';
export const LOGIN_URL = `${API_BASE_URL}/auth/google/login`;
