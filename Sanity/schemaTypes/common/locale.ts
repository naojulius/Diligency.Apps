// export const Subtitle = {
//     type: 'object',
//     name: 'locale',
//     title: 'Locale',
//     fields: [
//         {
//             name: 'fr',
//             title: 'Français',
//             type: 'text',
//         },
//         {
//             name: 'en',
//             title: 'Anglais',
//             type: 'text',
//         }
//     ],
// }

import { MdLanguage as icon } from 'react-icons/md'
export const LocaleSchema = {
    name: 'locale',
    title: 'Traductions',
    type: 'object',
    description: 'Traduction francais_anglais',
    icon,
    fields: [
        {
            name: 'fr',
            title: 'Français',
            type: 'text',
        },
        {
            name: 'en',
            title: 'Anglais',
            type: 'text',
        }
    ],
}