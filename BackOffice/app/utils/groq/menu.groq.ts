export const GET_MENU_GROQ = `
*[_type == "menuPage"]{
  _key,
  name,
  link,
  icon,
  visible,
  "children": children[]{
    _key,
    name,
    link,
    icon,
    visible,
    text
  }
}`