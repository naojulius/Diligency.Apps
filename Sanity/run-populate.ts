import * as fs from 'fs';
import * as path from 'path';
import { pathToFileURL } from 'url';

/**
 * Import a file and call all exported async functions
 */
async function runSeedFile(filePath: string) {
    console.log(`Running ${filePath}`);
    const module = await import(pathToFileURL(filePath).href);

    // Call all exported async functions
    for (const key of Object.keys(module)) {
        const fn = module[key];
        if (typeof fn === 'function') {
            await fn();
        }
    }
}

/**
 * Recursively find all .seed.ts files
 */
function findSeedFiles(dir: string, results: string[] = []): string[] {
    const list = fs.readdirSync(dir);
    for (const file of list) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            if (file !== 'node_modules') {
                findSeedFiles(fullPath, results);
            }
        } else if (file.endsWith('.seed.ts')) {
            results.push(fullPath);
        }
    }
    return results;
}

/**
 * Run all seed files in the project
 */
async function runAllSeeds() {
    const projectRoot = process.cwd();
    const files = findSeedFiles(projectRoot);

    if (files.length === 0) {
        console.log('No .seed.ts files found.');
        return;
    }

    for (const file of files) {
        await runSeedFile(file);
    }

    console.log('All seed files executed.');
}

runAllSeeds().catch((err) => {
    console.error('Error running seeds:', err);
    process.exit(1);
});
