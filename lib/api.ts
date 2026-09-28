const baseUrl = (process.env.NEXT_PUBLIC_API_URL || "http://localhost:5100/api").replace(/\/$/, "");

export async function api<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${baseUrl}${path}`, { ...init, headers: { "Content-Type": "application/json", ...(init?.headers || {}) } });
  if (!response.ok) { const body = await response.json().catch(() => ({})); throw new Error(body.message || `Request failed (${response.status})`); }
  if (response.status === 204) return undefined as T;
  return response.json() as Promise<T>;
}

export const json = (body: unknown, method = "POST"): RequestInit => ({ method, body: JSON.stringify(body) });
