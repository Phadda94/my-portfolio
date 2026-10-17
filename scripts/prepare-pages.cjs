const fs = require('node:fs');
const path = require('node:path');

const build = path.resolve(__dirname, '../build');
// Create entry files for routes that GitHub Pages serves directly.
for (const route of ['skills', 'projects', 'about']) {
  const directory = path.join(build, route);
  fs.mkdirSync(directory, { recursive: true });
  fs.copyFileSync(path.join(build, 'index.html'), path.join(directory, 'index.html'));
}
fs.writeFileSync(path.join(build, '.nojekyll'), '');

// Redirect bookmarks from the former /my-portfolio/ base path.
const redirect = '<!doctype html><html lang="it"><head><meta charset="utf-8"><title>Portfolio</title><script>const route=location.pathname.replace(/^\\/my-portfolio(?=\\/|$)/, "")||"/";location.replace(route+location.search+location.hash);</script></head><body><a href="/">Vai al portfolio</a></body></html>';
for (const route of ['', 'skills', 'projects', 'about']) {
  const directory = path.join(build, 'my-portfolio', route);
  fs.mkdirSync(directory, { recursive: true });
  fs.writeFileSync(path.join(directory, 'index.html'), redirect);
}
