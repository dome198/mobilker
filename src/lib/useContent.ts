"use client";

import { useEffect, useState } from "react";
import { FALLBACK_CONTENT } from "./content";

let clientCache: Record<string, string> | null = null;
let fetchPromise: Promise<Record<string, string>> | null = null;

async function fetchContent(): Promise<Record<string, string>> {
  try {
    const res = await fetch("/api/content");
    if (!res.ok) return {};
    return await res.json();
  } catch {
    return {};
  }
}

export function useContent(): {
  c: (key: string) => string;
  loaded: boolean;
} {
  const [content, setContent] = useState<Record<string, string>>(
    clientCache ?? {}
  );
  const [loaded, setLoaded] = useState(!!clientCache);

  useEffect(() => {
    if (clientCache) {
      setContent(clientCache);
      setLoaded(true);
      return;
    }

    if (!fetchPromise) {
      fetchPromise = fetchContent();
    }

    fetchPromise.then((data) => {
      clientCache = data;
      setContent(data);
      setLoaded(true);
    });
  }, []);

  const c = (key: string): string => {
    return content[key] ?? FALLBACK_CONTENT[key] ?? "";
  };

  return { c, loaded };
}
