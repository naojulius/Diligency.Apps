import {
    PageSectionBlockListA,
    PageSectionBlockListB,
    PageSectionBlockListC,
    PageSectionBlockListD,
    PageSectionBlockListE,
    PageSectionBlockListF,
    PageSectionBlockListG,
    PageSectionCommonCtaLink,
    PageSectionCommonCtaSecondary,
    PageSectionCommonCtaTertiary,
    PageSectionFooterA,
    PageSectionFooterB
} from "#components"

export const GetBLockListComponent = (type: string) => {
    if (!type) return

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

    if (type.startsWith("list-e")) {
        return PageSectionBlockListE
    }

    if (type.startsWith("list-f")) {
        return PageSectionBlockListF
    }

    if (type.startsWith("list-g")) {
        return PageSectionBlockListG
    }
}

export const GetFooterComponent = (type: string) => {
    if (!type) return

    if (type.startsWith("footer-a")) {
        return PageSectionFooterA
    }

    if (type.startsWith("footer-b")) {
        return PageSectionFooterB
    }
}

export const GetCtaComponent = (type: string) => {
    if (!type) return

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
