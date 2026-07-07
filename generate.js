const fs = require('fs');
const path = require('path');

// Expect args: npm run gen <number> <link>
const args = process.argv.slice(2);
if (args.length < 2) {
  console.error('Error: Please provide a problem number and LeetCode link.');
  console.log('Example: npm run gen 200. https://leetcode.com/problems/number-of-islands/');
  process.exit(1);
}

const rawNumber = args[0].replace(/\D/g, '');
const problemNumber = rawNumber.padStart(3, '0');
const rawUrl = args[1];

let kebabName = '';
try {
  // Parse URL and extract slug (/problems/number-of-islands/ to "number-of-islands")
  const urlPath = new URL(rawUrl).pathname;
  const segments = urlPath.split('/').filter(Boolean);
  const problemsIdx = segments.indexOf('problems');
  kebabName =
    problemsIdx >= 0 && segments[problemsIdx + 1]
      ? segments[problemsIdx + 1]
      : segments[segments.length - 1];
} catch (err) {
  console.error('Error: Invalid URL.');
  process.exit(1);
}

// Convert kebab to readable form ("number-of-islands" to "Number Of Islands")
const rawName = kebabName
  .split('-')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');

// Directory name layout: "200-number-of-islands"
const dirName = `${problemNumber}-${kebabName}`;
const targetDir = path.join(__dirname, 'src', dirName);

if (fs.existsSync(targetDir)) {
  console.error(`Error: Folder "${dirName}" already exists.`);
  process.exit(1);
}

// 1. Create the directory
fs.mkdirSync(targetDir, { recursive: true });

// 2. Solution file template
const solutionTemplate = `export function solution(): any {
    // Code here...
}
`;

// 3. Tests file template
const testTemplate = `import { solution } from './solution';

describe('${rawName}', () => {
    test('sample test case', () => {
        // expect(solution()).toBe([expected output]);
    });
});
`;

// 4. Write files
fs.writeFileSync(path.join(targetDir, 'solution.ts'), solutionTemplate);
fs.writeFileSync(path.join(targetDir, 'solution.test.ts'), testTemplate);

// Write markdown containing title and the direct URL reference... Would be nice to webscrape the problem but for my own sake I don't need it.
const readmeContent = `# Problem Link: [${rawNumber}. ${rawName}](${rawUrl})\n`;
fs.writeFileSync(path.join(targetDir, 'problem.md'), readmeContent);

console.log(`\nSkeleton generated for: ${dirName}`)