import { defineField, defineType } from 'sanity'
import sectionsData from './agency-data.json'

const sections = Object.keys(sectionsData).map(key => ({
    name: key,
    title: key,
}))

const dynamicFields = sections.map((section) =>
    defineField({
        name: section.name,
        title: section.title,
        type: 'agencyPage',
    })
)

export const agencyData = defineType({
    name: 'agencyData',
    title: 'Agency Data',
    type: 'document',
    fields: dynamicFields,
})
