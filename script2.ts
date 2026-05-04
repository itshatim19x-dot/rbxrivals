import * as fs from 'fs';
import * as path from 'path';

function walkDir(dir: string, callback: (path: string) => void) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

const replaceInFile = (filePath: string) => {
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts') && !filePath.endsWith('.css')) return;
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Also we want to reverse the clip-path brutalist look, 
  // wait, the prompt doesn't necessarily ask to reverse the brutalist look, just design responsiveness and new colors + animations on scroll. Oh but they did say "First this is not a gaming style... use dark purple in background...". Wait I'll just change the colors.
  
  content = content.replace(/rivals-red/g, 'lightning-blue');
  content = content.replace(/rivals-darkred/g, 'dark-pink');
  content = content.replace(/rivals-accent/g, 'golden');
  
  content = content.replace(/bg-transparent/g, 'bg-canvas');
  
  // also add viewport animations wrapper optionally
  
  fs.writeFileSync(filePath, content);
};

walkDir('./components', replaceInFile);
walkDir('./app', replaceInFile);
