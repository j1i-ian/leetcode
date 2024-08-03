import { twoSum } from './1-two-sums';

describe('1. two sums', () => {
    [
        {
            givenNumberArray: [2, 7, 11, 15],
            givenSum: 9,
            expectedIndexArray: [0, 1]
        },
        {
            givenNumberArray: [3, 2, 4],
            givenSum: 6,
            expectedIndexArray: [1, 2]
        },
        {
            givenNumberArray: [3, 3],
            givenSum: 6,
            expectedIndexArray: [0, 1]
        }
    ].forEach(function ({
        givenNumberArray,
        givenSum,
        expectedIndexArray
    }) {
        it(`givenNumberArray ${givenNumberArray} for ${givenSum}`, function () {
            const actual = twoSum(givenNumberArray, givenSum);

            expect(actual).deep.equals(expectedIndexArray);
        });
    });
});