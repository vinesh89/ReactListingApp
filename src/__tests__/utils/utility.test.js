import { getFormattedDate } from "../../utils/utility";

describe('Testing Utility Methods', () => {
    test('getFormattedDate method accepts a Date timestamp string and returns a valid formatted date', () => {
        expect(getFormattedDate('2019-08-03T03:36:13 -08:00')).toBe('03 August 2019, 03:36 AM')
    });

    test('getFormattedDate method accepts empty Date timestamp and returns Invalid Date string', () => {
        expect(getFormattedDate()).toBe('Invalid date');
    });

    test('getFormattedDate method accepts Invalid Date timestamp and returns Invalid Date string', () => {
        expect(getFormattedDate("invaliddatestringfomrat")).toBe('Invalid date');
    });
}) 