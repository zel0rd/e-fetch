// types.ts

export interface RequestOptions extends RequestInit {
  headers?: HeadersInit; // HeadersInit can be Headers, string[][], or Record<string, string>
}
