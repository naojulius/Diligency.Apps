import { SanityDocument } from "sanity"
import { HeroType } from "./hero"

export interface AgencyPage extends SanityDocument {
    _type: 'agencyPage'
    hero: HeroType
}