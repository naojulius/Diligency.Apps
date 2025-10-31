import { MdMail } from 'react-icons/md';
import { defineField, defineType } from 'sanity';
import { MailPreview } from '../../previews/mail-preview';

export const mailSchema = defineType({
    name: 'mail',
    title: 'E-Mails',
    type: 'document',
    description: 'Toute les mails ',
    icon: MdMail,
    components: {
        input: MailPreview
    },
    fields: [
        defineField({
            name: 'firstName',
            title: 'Nom',
            type: 'string',
            description: 'nom de l\'envoyeur',

        }),
        defineField({
            name: 'lastName',
            title: 'Prénom',
            type: 'string',
            description: 'prénom de l\'envoyeur',
        }),
        defineField({
            name: 'message',
            title: 'Message',
            type: 'text',
            description: 'message',
        }),
    ],
    preview: {
        select: {
            firstName: 'firstName',
            lastName: 'lastName',
            email: 'email',
            message: 'message'
        },
        prepare(selection) {
            const title = `${selection.firstName} ${selection.lastName}`
            const subtitle = selection.message
            const email = selection.email
            return {
                title: title,
                subtitle: subtitle,
                email: email
            };
        },
    },
})