/*
  Logger utility to print colored messages in the console.
  Success messages appear green, errors appear red.
*/

export function logSuccess(message: string) {
    // \x1b[32m = green, \x1b[0m = reset color
    console.log(`\x1b[32m[SUCCESS]\x1b[0m ${message}`)
}

export function logError(message: string | Error) {
    // \x1b[31m = red, \x1b[0m = reset color
    const msg = message instanceof Error ? message.message : message
    console.error(`\x1b[31m[ERROR]\x1b[0m ${msg}`)
}

export function logInfo(message: string) {
    // \x1b[37m = white, \x1b[0m = reset color
    console.log(`\x1b[37m[INFO]\x1b[0m ${message}`)
}

export function logWarning(message: string) {
    // \x1b[33m = yellow, \x1b[0m = reset color
    console.warn(`\x1b[33m[WARNING]\x1b[0m ${message}`)
}