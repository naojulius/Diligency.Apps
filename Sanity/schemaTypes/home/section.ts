export const HomeSections = ['hero', 'strategy', 'offer', 'testimonial'];
export const HomeSectionPreviewSelect: Record<string, string> = {};
HomeSections.forEach(section => {
    HomeSectionPreviewSelect[`${section}Section`] = `${section}.section`;
    HomeSectionPreviewSelect[`${section}Titles`] = `${section}.title`;
});