import { generateSchema } from "../generator";
import { Content } from "./content";


export const HomePageSchema = {
    name: 'homePage',
    type: 'document',
    title: 'Home Page',
    fields: [
        generateSchema('hero', Content.home.hero)
    ]
}