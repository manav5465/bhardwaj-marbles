import { defineConfig } from 'vite';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

// Keep Vite's generated cache outside the OneDrive-synchronised workspace.
// This prevents transient file locks from blocking the local dev server.
export default defineConfig({
  cacheDir: join(tmpdir(), 'bhardwaj-marbles-vite-cache'),
});
