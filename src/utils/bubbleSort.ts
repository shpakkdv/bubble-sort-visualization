export function* bubbleSort(array: number[]): Generator<number[], number[], void> {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                const biggerNumber = array[j];
                array[j] = array[j + 1]
                array[j + 1] = biggerNumber;
                yield [...array];
            }
        }
    }

    return [...array];
}
