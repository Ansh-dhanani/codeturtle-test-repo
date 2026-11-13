const cache = new Map();
export function put(key, value) { cache.set(key, value); }
export function get(key) { return cache.get(key); }
