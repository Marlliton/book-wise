/* eslint-disable no-undef */
export async function dataFetch<T = unknown>(
  input: RequestInfo | URL,
  init?: RequestInit | undefined,
) {
  const response = await fetch(`${process.env.BASE_URL}${input}`, init);
  const data = await response.json();

  return data as T;
}
