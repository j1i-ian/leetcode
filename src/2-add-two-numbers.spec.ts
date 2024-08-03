import { addTwoNumbers } from './2-add-two-numbers';

/**
 * ListNode class Definition 이 써져있지만
 * 정작 주어지는 type 은 number array.. 😅
 */
describe('2. Add two numbers', () => {
    [
        {
            list: [2, 4, 3],
            list2: [5, 6, 4],
            expectedList: [7, 0, 8]
        },
        {
            list: [0],
            list2: [0],
            expectedList: [0]
        },
        {
            list: [9, 9, 9, 9, 9, 9, 9],
            list2: [9, 9, 9, 9],
            expectedList: [8, 9, 9, 9, 0, 0, 0, 1]
        }
    ].forEach(function ({
        list,
        list2,
        expectedList
    }) {
        it(`list ${list} with list2 ${list2}`, function () {
            const actual = addTwoNumbers(
                list,
                list2
            );

            expect(actual).deep.equals(expectedList);
        });
    });
});