//saurabh agrawal

const foodData = require('./data.json');


function listFood(category = '') {
    if (category.length > 0) {
        return foodData.filter((food) => food.category === category);
    } else {
        return foodData;
    }
}

function sortCalorie(condition) {
    if (condition === 'below100') {
        return foodData.filter((food) => food.calorie < 100);
    } else if (condition === 'above100') {
        return foodData.filter((food) => food.calorie > 100);
    }
}

function sort(type) {
    if (type === "protein") {
        return foodData.sort((a, b) => b.protiens - a.protiens)
    } else if (type === "carb") {
        return foodData.sort((a, b) => a.cab - b.cab)
    }
}

console.log("Task 1: The Food items are", listFood());
console.log("Task 2:Food items with category vegetables", listFood('Vegetable'));
console.log("Task 3:Food items with category fruit", listFood('Fruit'));
console.log("Task 4:Food items with category protein", listFood('Protein'));
console.log("Task 5:Food items with category nuts", listFood('Nuts'));
console.log("Task 6:Food items with category grains", listFood('Grain'));
console.log("Task 7:Food items with category dairy", listFood('Dairy'));
console.log("Task 9: Food items with calorie below 100", sortCalorie('below100'));
console.log("Task 8: Food items with calorie above 100", sortCalorie('above100'));
console.log("Task 10: List all the food items with the highest protein content to lowest", sort("protein"));
console.log("Task 11: List all the food items with the lowest carb content to highest", sort("carb"));