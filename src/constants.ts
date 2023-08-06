export const AFTER_LOGIN_URL_KEY = 'afterLoginURL';
export const FRONT_BASE_URL =
  process.env.FRONT_BASE_URL ?? 'http://localhost:3000';
export const API_BASE_URL = process.env.API_BASE_URL ?? 'http://localhost:8080';
export const LOGIN_URL = `${API_BASE_URL}/auth/google/login`;
