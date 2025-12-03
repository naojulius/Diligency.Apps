
import { gql } from "graphql-tag"
export const GetHeroDataQuery = gql`
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
        text {
          en
          fr
        }
        icon, 
		link
      }
      reserveStrategyCall {
        text {
          en
          fr
        }
        icon,
		link
      }
      link
    }
  }
}`