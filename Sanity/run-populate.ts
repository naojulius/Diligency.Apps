import * as fs from 'fs';
import * as path from 'path';

async function runPopulateFile(filePath: string) {
    console.log(`Running ${filePath}`);
    const module = await import(filePath);

    // Find and call exported async function
    for (const key of Object.keys(module)) {
        const fn = module[key];
        if (typeof fn === 'function') {
            await fn();
        }
    }
}

function findPopulateFiles(dir: string, results: string[] = []): string[] {
    const list = fs.readdirSync(dir);
    for (const file of list) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            if (file !== 'node_modules') {
                findPopulateFiles(fullPath, results);
            }
        } else if (file === 'populate.ts') {
            results.push(fullPath);
        }
    }
    return results;
}

async function runAllPopulate() {
    const projectRoot = process.cwd();
    const files = findPopulateFiles(projectRoot);

    if (files.length === 0) {
        console.log('No populate.ts files found.');
        return;
    }

    for (const file of files) {
        // Resolve to absolute path and import using URL for ES modules
        const absPath = path.resolve(file);
        await runPopulateFile(absPath);
    }
}

runAllPopulate();
