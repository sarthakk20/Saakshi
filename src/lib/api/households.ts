export type Household = { id: string; name: string };

/** Thrown when the endpoint doesn't exist yet or can't be reached. */
export class ApiPendingError extends Error {
  constructor() {
    super("API pending");
    this.name = "ApiPendingError";
  }
}

export class ApiError extends Error {
  constructor(message: string, public status: number) {
    super(message);
    this.name = "ApiError";
  }
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  let res: Response;
  try {
    res = await fetch(path, {
      ...init,
      headers: { "Content-Type": "application/json", ...init?.headers },
    });
  } catch {
    throw new ApiPendingError();
  }

  const isJson = res.headers.get("content-type")?.includes("application/json");

  // A missing Next route returns an HTML 404, not JSON
  if (!isJson && (res.status === 404 || res.status === 501)) {
    throw new ApiPendingError();
  }

  const body = isJson ? await res.json() : null;

  if (!res.ok) {
    throw new ApiError(body?.error ?? body?.message ?? `Request failed (${res.status})`, res.status);
  }
  return body as T;
}

// Response shapes are assumptions until Sandhya shares the real ones.
export async function getHouseholds(): Promise<Household[]> {
  const data = await request<Household[] | { households: Household[] }>("/api/households");
  return Array.isArray(data) ? data : data.households;
}

export function createHousehold(input: { name: string }) {
  return request<Household>("/api/households", {
    method: "POST",
    body: JSON.stringify(input),
  });
}

export function joinHousehold(input: { inviteCode: string }) {
  return request<Household>("/api/households/join", {
    method: "POST",
    body: JSON.stringify(input),
  });
}