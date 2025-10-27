export const GET_AGENCY_GROQ = `
*[_type == "agencyPage"]{
    _id,
    hero{title, subtitle, image},
    blocks[]{
        _key, type, title, subtitle, items[]{_key, icon, name, text, image}, image, cta
    },
    footer{type, title, text, cta[]{_key, type, icon, text, link}}
}`