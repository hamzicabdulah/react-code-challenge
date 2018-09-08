const logger = store => next => action => {
    const result = next(action);
    console.log(`Middleware: ${JSON.stringify(result)}`);
    return result;
}

export default logger;