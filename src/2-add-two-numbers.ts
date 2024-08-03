export function addTwoNumbers(
    list: number[],
    list2: number[]
): number[] {

    const arr = [];
    const maxLength = Math.max(list.length, list2.length);

    let remainder = 0;

    for (let index = 0; index < maxLength; index++) {
        const value = list[index] ?? 0;
        const value2 = list2[index] ?? 0;

        const sum = value + value2;

        const el = sum % 10 + remainder

        if (el >= 10) {
            arr.push(0);

            remainder = Math.floor(el / 10);

        } else {
            arr.push(el);

            remainder = Math.floor(sum / 10);
        }
    }

    if (remainder > 0) {
        arr.push(remainder);
    }

    return arr;
};
