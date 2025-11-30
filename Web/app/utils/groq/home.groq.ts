export const GET_HOME_GROQ = `
*[_type == "homePage"]{
        _id,
        hero,
        blocks[],
        footer[]
}
`