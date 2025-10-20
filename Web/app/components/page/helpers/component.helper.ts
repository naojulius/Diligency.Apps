import { PageSectionBlockListA, PageSectionBlockListB, PageSectionBlockListC, PageSectionBlockListD, PageSectionCommonCtaLink, PageSectionCommonCtaSecondary, PageSectionCommonCtaTertiary, PageSectionFooterA, PageSectionFooterB } from "#components"

export const GetBLockListComponent = (type: string) => {
    if (type.startsWith("list-a")) {
        return PageSectionBlockListA
    }

    if (type.startsWith("list-b")) {
        return PageSectionBlockListB
    }

    if (type.startsWith("list-c")) {
        return PageSectionBlockListC
    }

    if (type.startsWith("list-d")) {
        return PageSectionBlockListD
    }
}

export const GetFooterComponent = (type: string) => {
    if (type.startsWith("footer-a")) {
        return PageSectionFooterA
    }

    if (type.startsWith("footer-b")) {
        return PageSectionFooterB
    }
}

export const GetCtaComponent = (type: string) => {
    if (type.startsWith("cta-link")) {
        return PageSectionCommonCtaLink
    }

    if (type.startsWith("cta-secondary")) {
        return PageSectionCommonCtaSecondary
    }

    if (type.startsWith("cta-tertiary")) {
        return PageSectionCommonCtaTertiary
    }
}
