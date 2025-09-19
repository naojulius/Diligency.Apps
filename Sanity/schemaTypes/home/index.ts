// import { defineField } from "sanity";
// import { MdHome as icon } from 'react-icons/md'
// import { Hero } from "./hero";


// export const HomePageSchema = {
//     name: 'home',
//     title: 'Page - Accueil',
//     type: 'document',
//     description: 'Page d\'accueil (Home) du site web',
//     icon,
//     fields: [
//         defineField({
//             name: 'section',
//             title: 'Section',
//             type: 'array',
//             of: [{ type: 'section' }],
//             description: 'cette champs est une information pour le visuel de sanity',
//         }),
//         defineField(Hero),
//     ],
//     preview: {
//         select: {},
//         prepare() {
//             return {
//                 title: 'Hero',
//                 subtitle: 'Hero de la page d\'accueil',
//             };
//         },
//     },
// }


import { defineType } from "sanity";
import { jsonToFields } from "../generator";
import { text } from "./text";

export const HomePageSchema = defineType({
    name: "home",
    title: "Page - Accueil",
    type: "document",
    fields: (Object.keys(text) as Array<keyof typeof text>)
        .map((key) => jsonToFields(key, text[key]))
        .flat(),
    preview: {
        select: {
            title: "hero.title.en",
            subtitle: "hero.subtitle.en",
        },
        prepare(selection) {
            return {
                title: selection.title || "Home",
                subtitle: selection.subtitle || "",
            };
        },
    },
});
