import { defineConfig } from 'vite';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

export default defineConfig({
  cacheDir: join(tmpdir(), 'bhardwaj-marbles-vite-cache'),
  base: '/bhardwaj-marbles/',
});