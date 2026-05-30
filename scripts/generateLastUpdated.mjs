import { execSync } from 'child_process';
import { writeFileSync } from 'fs';
import { join } from 'path';

function write(value) {
  const content = `const lastUpdated = ${JSON.stringify(value)};\nexport default lastUpdated;\n`;
  const outPath = join(process.cwd(), 'src', 'generated', 'lastUpdated.ts');
  writeFileSync(outPath, content, 'utf8');
}

try {
  const cwd = process.cwd();
  const iso = execSync('git log -1 --format=%cI', { cwd }).toString().trim();
  if (!iso) throw new Error('empty git date');
  const d = new Date(iso);
  const formatted = d.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
  write(formatted);
  console.log('Generated lastUpdated:', formatted);
} catch (err) {
  console.error('Could not determine git commit date, using Unknown.');
  write('Unknown');
  process.exit(0);
}
