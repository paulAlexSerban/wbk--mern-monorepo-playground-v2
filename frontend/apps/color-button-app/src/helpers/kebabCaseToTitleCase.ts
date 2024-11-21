export const kebabCaseToTitleCase = (colorName: string) => {
    const colorWithSpaces = colorName.replace(/-/g, ' ');
    const colorWithCaps = colorWithSpaces.replace(/\b([a-z])/g, (match) => match.toUpperCase());

    return colorWithCaps;
};
