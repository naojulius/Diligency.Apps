
import { MdLanguage as icon } from 'react-icons/md'
export const PageSectionSchema = {
    name: 'section',
    title: 'Section',
    type: 'object',
    description: 'Section de la page comme Hero, A propos, Services, etc...',
    icon,
    fields: [
        {
            name: 'sectionTitle',
            title: 'Titre',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        }
    ],
}