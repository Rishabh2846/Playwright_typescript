export const BASE_URL = 'https://practice.expandtesting.com';

export function getUrl(path: string): string {
  if (!path) return BASE_URL;
  return path.startsWith('/') ? `${BASE_URL}${path}` : `${BASE_URL}/${path}`;
}

