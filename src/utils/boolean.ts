const isNullable = (arg: unknown): arg is undefined | null => typeof arg === 'undefined' || arg === null

export { isNullable }
