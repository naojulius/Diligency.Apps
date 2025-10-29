export const GET_AGENCY_GROQ = `
*[_type == "agencyPage"]{
    _id,
    hero{title, subtitle, image, cta},
    blocks[]{
        type, title, subtitle, items[]{icon, name, text, image, title, list[]{icon, name, text, image}}, image, cta
    },
    footer{type, title, text, cta[]{type, icon, text, link}}
}`