export function twoSum(
    givenNumbers: number[],
    givenSum: number
): number[] {

    let results: number[] = [];
    const complementMaps = new Map<number, number>();

    for (let index = 0; index < givenNumbers.length; index++) {
        const quotient = givenNumbers[index];
        const complement = givenSum - quotient;

        const hasQuotientIndex = complementMaps.has(complement);

        if (hasQuotientIndex) {

            const quotientIndex = complementMaps.get(complement) as number;
            const complementIndex = index;

            results = [quotientIndex, complementIndex];

            break;
        } else {
            complementMaps.set(quotient, index);
        }
    }

    return results;
};
