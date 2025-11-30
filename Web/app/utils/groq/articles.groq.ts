export const GET_FOUR_LAST_ARTICLE_GROQ = `
*[_type == "articlePage"]
| order(_createdAt desc)[0...4]{
  "article-data": {
    title,
    author,
    thumbnail,
    image,
    topTags,
    bottomTags,
    content
  }
}
`;

export const GET_LAST_ARTICLE_GROQ = `
*[_type == "articlePage"]
| order(_createdAt desc)[0]{
  "article-data": {
    title,
    author,
    thumbnail,
    image,
    topTags,
    bottomTags,
    content
  }
}
`;
