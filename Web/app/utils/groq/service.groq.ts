export const GET_SERVICE_GROQ = `
*[_type == "servicePage"]{
    _id,
    hero{title, subtitle, image, cta},
    blocks[]{
        type, title, subtitle, items[]{icon, name, text, image}, image, cta
    },
    footer{type, title, text, cta[]{type, icon, text, link}}
}`