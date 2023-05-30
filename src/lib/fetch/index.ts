/* eslint-disable no-undef */
export async function dataFetch<T = unknown>(
  input: RequestInfo | URL,
  init?: RequestInit | undefined,
) {
  const BASE_URL = process?.env?.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000/api";

  const response = await fetch(`${BASE_URL}${input}`, init);
  const data = await response.json();

  return data as T;
}
