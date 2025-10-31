import { defineField, defineType } from "sanity";
import { question } from "./question.schema";
import { response } from "./response.schema";

export const faqScema = defineType({
    name: "faq",
    title: "FAQ",
    type: "object",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "array",
            of: [{ type: "locale" }],
        }),
        defineField({
            name: "items",
            title: "FAQ Liste",
            type: "array",
            of: [
                {
                    type: "object",
                    name: "faqItem",
                    title: "FAQ Item",
                    fields: [
                        defineField({
                            name: "question",
                            title: "Question",
                            type: "locale",
                        }),
                        defineField({
                            name: "response",
                            title: "Response",
                            type: "locale",
                        }),
                    ],
                },
            ],
        }),
    ],
});

export const faq = [faqScema, response, question]
