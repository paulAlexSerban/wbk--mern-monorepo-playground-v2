import { kebabCaseToTitleCase } from './kebabCaseToTitleCase';

describe('kebabCaseToTitleCase', () => {
    it('should convert a kebab-case string to title case', () => {
        expect(kebabCaseToTitleCase('medium-violet-red')).toBe('Medium Violet Red');
        expect(kebabCaseToTitleCase('midnight-blue')).toBe('Midnight Blue');
    });

    it('should handle single-word input', () => {
        expect(kebabCaseToTitleCase('red')).toBe('Red');
    });

    it('should handle empty string input', () => {
        expect(kebabCaseToTitleCase('')).toBe('');
    });

    it('should wirk with no hyphens', () => {
        expect(kebabCaseToTitleCase('red')).toBe('Red');
    });

    it('should work with multiple hyphens', () => {
        expect(kebabCaseToTitleCase('dark-orange-red')).toBe('Dark Orange Red');
    });

    it('shoould work with one hyphen', () => {
        expect(kebabCaseToTitleCase('dark-red')).toBe('Dark Red');
    });
});
