export const GET_HERO_DATA = `
query GetHomeHero {
  allHome {
    _id
    hero {
      title {
        fr
        en
      }
      subtitle {
        fr
        en
      }
      applyMyProject {
        fr
        en
      }
      reserveStrategyCall {
        fr
        en
      }
    }
  }
}
`
