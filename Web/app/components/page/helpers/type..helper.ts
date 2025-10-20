export function isTypeOf<T extends object>(data: any, type: new () => T): data is T {
    const instance = new type();
    const classProps = Object.keys(instance);

    return classProps.every(prop => prop in data);
}
