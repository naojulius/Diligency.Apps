export const GET_SERVICE_GROQ = `
*[_type == "servicePage"]{
    _id,
    hero{title, subtitle, image, cta},
    blocks[]{
        _key, type, title, subtitle, items[]{_key, icon, name, text, image}, image, cta
    },
    footer{type, title, text, cta[]{_key, type, icon, text, link}}
}`