const logInConsole = (text: any, data?: any, error?: boolean) => {
    const log = `[SERVER]: ${text}`

    error ? console.error(log, data ?? '') : console.log(log, data ?? '')
}

export const ServerLog = (text: any, data?: any, error?: boolean) => {
    const log = `[SERVER]: ${text}`

    logInConsole(log, data, error)
}

export const DatabaseLog = (text: any, data?: any, error?: boolean) => {
    const log = `[DATABASE]: ${text}`

    logInConsole(log, data, error)
}