import { MdFolder } from "react-icons/md";
import { defineField, defineType } from "sanity";

export const applicationDataPage = defineType({
    name: "applicationDataPage",
    title: "Application Data",
    type: "document",
    icon: MdFolder,
    fields: [
        defineField({
            name: "applicationIntroduction",
            title: "Introduction",
            type: "applicationIntroduction",
        }),
        defineField({
            name: "applicationForm",
            type: "array",
            of: [{ type: "applicationForm" }],
        }),
        defineField({
            name: "applicationSuccess",
            type: "applicationSuccess",
        }),
        defineField({
            name: "applicationError",
            type: "applicationError",
        }),
    ],
    preview: {
        select: {
            _id: "_id",
        },
        prepare({ _id }) {
            return {
                title: _id ? _id.replace(/application/gi, '').trim() : "Type non défini",
            };
        },
    },
});
