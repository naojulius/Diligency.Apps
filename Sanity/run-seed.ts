import * as fs from 'fs'
import * as path from 'path'
import { logError, logInfo, logSuccess, logWarning } from './logger'

/*
  Recursively search a directory for all `.seed.ts` files.
*/
function findSeedFiles(dir: string, results: string[] = []): string[] {
    const list = fs.readdirSync(dir)
    for (const file of list) {
        const fullPath = path.join(dir, file)
        const stat = fs.statSync(fullPath)

        if (stat.isDirectory()) {
            if (file !== 'node_modules') findSeedFiles(fullPath, results)
        } else if (file.endsWith('.seed.ts')) {
            results.push(fullPath)
        }
    }
    return results
}

/*
  Import a seed file and execute its exported async functions.
  Handles both default exports and named exports.
*/
async function runSeedFile(filePath: string) {
    logInfo(`Found seed file: ${filePath}`)

    // Convert absolute path to relative for ts-node
    const relativePath = './' + path.relative(process.cwd(), filePath).replace(/\\/g, '/')
    const module = await import(relativePath)

    /*
      If the module has a default export and it's a function, call it.
      Also call all named exports that are functions.
    */

    for (const key of Object.keys(module)) {
        const fn = module[key]
        if (typeof fn === 'function') {
            logInfo(`Running named export: ${key} from ${filePath}`)
            await fn()
        }
    }
}

/*
  Main function: find all seed files and execute them sequentially.
*/
async function runAllSeeds() {
    const projectRoot = process.cwd()
    const files = findSeedFiles(projectRoot)

    if (files.length === 0) {
        logWarning('No .seed.ts files found.')
        return
    }

    for (const file of files) {
        await runSeedFile(file)
    }

    logSuccess('All seed files executed.')
}

/*
  Start execution and catch any errors.
*/
runAllSeeds().catch(err => {
    logError(`Error running seeds: ${err}`)
    process.exit(1)
})
