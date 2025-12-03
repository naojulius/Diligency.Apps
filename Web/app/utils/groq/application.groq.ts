export const GET_APPPLICATION_GROQ = `
*[_type == "applicationDataPage"][0]{
  applicationIntroduction {
    title,
    description
  },
  applicationForm[]{
    title,
    items
  },
  applicationSuccess {
    title,
    description
  },
  applicationError {
    title,
    description
  }
}`