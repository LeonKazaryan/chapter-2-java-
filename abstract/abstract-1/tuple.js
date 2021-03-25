const getSum = numbers => {
    let sum = 0;
    for (let i = 0; i < numbers.length; ++i) {
        sum = sum + numbers[i];
    }
    return sum;
}

console.log(getSum(numbers));

// считаем минимальное число
const getMin = numbers => {
    let min = 1000;
    for (let i = 0; i < numbers.length; ++i) {
        if (min > numbers[i]) {
            min = numbers[i];
        }
    }
    return min;
}
console.log(getMin(numbers))


// находим максимальное число
const getMax = numbers => {
    let max = -Infinity;

    for (let i = 0; i < numbers.length; ++i) {
        if (max < numbers[i]) {
            max = numbers[i];
        }
    }
    return max;
}
console.log(getMax(numbers))


// посчитать рендж
const getRange = numbers => {
    return [getMin(numbers), getMax(numbers)];
};

