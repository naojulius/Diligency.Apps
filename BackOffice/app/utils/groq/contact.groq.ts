export const GET_CONTACT_GROQ = `
*[_type == "contactPage"]{
    "contact-data": {
        title,
        subtitle,
        form{
            title,
            name,
            lastname,
            email,
            message,
            sendMessage,
            type[]{label, value},
            errors[]{key, text}
        },
        info{
            open,
            emails,
            phones,
            address,
            socials[]{name, link, icon}
        }
    }
}`
