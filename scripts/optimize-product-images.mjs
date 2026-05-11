import { existsSync, mkdirSync, readdirSync } from 'node:fs';
import { extname, join, parse } from 'node:path';
import { spawnSync } from 'node:child_process';

const root = new URL('..', import.meta.url).pathname;
const sourceDir = join(root, 'apps/frontend/assets/product-sources');
const outputDir = join(root, 'apps/frontend/public/images/products');
const sizes = [640, 1280];
const supportedExtensions = new Set(['.jpg', '.jpeg', '.png', '.tif', '.tiff']);

const run = (command, args) => {
  const result = spawnSync(command, args, { stdio: 'inherit' });

  if (result.status !== 0) {
    throw new Error(`${command} ${args.join(' ')} failed`);
  }
};

if (!existsSync(sourceDir)) {
  mkdirSync(sourceDir, { recursive: true });
}

mkdirSync(outputDir, { recursive: true });

const sources = readdirSync(sourceDir)
  .filter((fileName) => supportedExtensions.has(extname(fileName).toLowerCase()))
  .sort();

if (sources.length === 0) {
  console.log(`No source images found in ${sourceDir}`);
  process.exit(0);
}

for (const source of sources) {
  const sourcePath = join(sourceDir, source);
  const { name } = parse(source);

  for (const size of sizes) {
    const outputPath = join(outputDir, `${name}-${size}w.jpg`);

    run('sips', ['-Z', String(size), '-s', 'format', 'jpeg', sourcePath, '--out', outputPath]);
  }
}

console.log(`Generated responsive product images for ${sources.length} source file(s).`);
