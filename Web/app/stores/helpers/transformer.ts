export const TRANSFORM_DATA = async (data: Array<any>): Promise<Record<string, any>> => {
    return data.reduce((acc, item) => {
        const { _id, ...rest } = item; // extract _id
        acc[_id] = rest;             // use _id as key
        return acc;
    }, {} as Record<string, any>);
}
