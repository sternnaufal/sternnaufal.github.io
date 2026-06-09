const fs = require('fs');
const path = require('path');
const src = path.join(process.cwd(), 'dist', 'index.html');
const dest = path.join(process.cwd(), 'dist', '404.html');
fs.copyFileSync(src, dest);
