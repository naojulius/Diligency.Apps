export const GET_HOME_GROQ = `
*[_type == "homePage"][0]{
  "home-data": {
        hero,
        blocks[],
        footer[]
    }
}
`