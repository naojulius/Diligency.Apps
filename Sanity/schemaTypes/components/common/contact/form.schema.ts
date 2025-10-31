import { defineField, defineType } from "sanity";

export const formSchema = defineType({
    name: 'form',
    title: 'Forme',
    type: 'object',
    fields: [
        defineField({ name: 'title', title: "Title", type: 'locale' }),
        defineField({ name: 'name', title: "Nom", type: 'locale' }),
        defineField({ name: 'lastname', title: "Prénom", type: 'locale' }),
        defineField({ name: 'email', title: "Email", type: 'locale' }),
        defineField({ name: 'message', title: "Message", type: 'locale' }),
        defineField({ name: 'sendMessage', title: "Envoyer message", type: 'locale' }),
        defineField({ name: 'type', title: "Type", type: 'array', of: [{ type: 'contacttype' }] }),
        defineField({ name: 'errors', title: "Erreurs", type: 'array', of: [{ type: 'errors' }] }),
    ],
})