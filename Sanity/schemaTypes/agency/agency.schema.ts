import { defineField, defineType } from 'sanity'

// ============ REUSABLE LOCALIZED TYPES ============
export const localizedString = defineType({
    name: 'localizedString',
    title: 'Localized String',
    type: 'object',
    fields: [
        defineField({ name: 'fr', title: 'French', type: 'text' }),
        defineField({ name: 'en', title: 'English', type: 'text' }),
    ],
})

export const localizedTitleArray = defineType({
    name: 'localizedTitleArray',
    title: 'Localized Title Array',
    type: 'array',
    of: [
        {
            type: 'object',
            fields: [
                defineField({ name: 'fr', title: 'French', type: 'string' }),
                defineField({ name: 'en', title: 'English', type: 'string' }),
            ],
        },
    ],
})

// ============ COMMON TYPES ============
export const ctaType = defineType({
    name: 'cta',
    title: 'CTA',
    type: 'object',
    fields: [
        defineField({ name: 'icon', type: 'string' }),
        defineField({ name: 'text', type: 'localizedString' }),
        defineField({ name: 'link', type: 'string' }),
        defineField({ name: 'type', type: 'string' }),
    ],
})

export const itemType = defineType({
    name: 'item',
    title: 'Item',
    type: 'object',
    fields: [
        defineField({ name: 'id', type: 'number', hidden: true }),
        defineField({ name: 'icon', type: 'string' }),
        defineField({ name: 'name', type: 'localizedString' }),
        defineField({ name: 'text', type: 'localizedString' }),
        defineField({ name: 'image', type: 'string' }),
    ],
})

// ============ BLOCK ============
export const blockType = defineType({
    name: 'pageBlock', // ✅ renamed from "block" to avoid reserved name
    title: 'Block',
    type: 'object',
    fields: [
        defineField({ name: 'type', type: 'string' }),
        defineField({ name: 'title', type: 'localizedTitleArray' }),
        defineField({ name: 'subtitle', type: 'localizedString' }),
        defineField({ name: 'image', type: 'string' }),
        defineField({ name: 'cta', type: 'array', of: [{ type: 'cta' }] }),
        defineField({ name: 'items', type: 'array', of: [{ type: 'item' }] }),
    ],
})

// ============ HERO ============
export const heroType = defineType({
    name: 'hero',
    title: 'Hero',
    type: 'object',
    fields: [
        defineField({ name: 'title', type: 'localizedTitleArray' }),
        defineField({ name: 'subtitle', type: 'localizedString' }),
        defineField({ name: 'image', type: 'string' }),
    ],
})

// ============ FOOTER ============
export const footerType = defineType({
    name: 'footer',
    title: 'Footer',
    type: 'object',
    fields: [
        defineField({ name: 'type', type: 'string' }),
        defineField({ name: 'title', type: 'localizedTitleArray' }),
        defineField({ name: 'text', type: 'localizedString' }),
        defineField({ name: 'cta', type: 'array', of: [{ type: 'cta' }] }),
    ],
})

// ============ PAGE (agency, jobcarrier, hub) ============
export const agencyPage = defineType({
    name: 'agencyPage',
    title: 'Agency Page',
    type: 'object',
    fields: [
        defineField({ name: 'hero', type: 'hero' }),
        defineField({ name: 'blocks', type: 'array', of: [{ type: 'pageBlock' }] }), // ✅ fixed here
        defineField({ name: 'footer', type: 'footer' }),
    ],
})

// ============ ROOT ============
export default defineType({
    name: 'agencyData',
    title: 'Agency Data',
    type: 'document',
    fields: [
        defineField({ name: 'about', title: 'About Section', type: 'agencyPage' }),
        defineField({ name: 'jobcarrier', title: 'Job Carrier Section', type: 'agencyPage' }),
        defineField({ name: 'hub', title: 'Hub Section', type: 'agencyPage' }),
    ],
})
