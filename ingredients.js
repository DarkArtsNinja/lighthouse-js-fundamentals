const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
while(let i = 0 < ingredients.length ){
  console.log(ingredients[i]);
  i++;
}
// Write a for loop that prints out the contents of ingredients:
for (let items of ingredients) {
  console.log(items);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let i = 0; i < ingredients.length; i++){
  console.log(ingredients[i]);
}