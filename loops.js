//loops

const arr = [ 1, 2, 3];

for (let i = 0; i < arr.length; i++){
	console.log(arr[i]);
};

//write a for loop to cycle through 'arr' and print out weather
//the number is odd or even

for (let i = 0; i < arr.length; i++){
	
	if(arr[i] % 2 === 0){
		console.log(arr[i] + " is even");
	} else {
		console.log(arr[i] + " is odd");
	}
}

//write a loop that will empty the array, and leave a message
//of each item leaving the array on each each iteration of the loop

for ( let i = 0; i < arr.length; i++){
	if(arr[i] === 1){
		console.log(arr[i] + ' number one is leaving');
	} else (arr[i] === 2){
		console.log(arr[i] + ' number two is leaving');
	} else (arr[i] === 3){
		console.log(arr[i] + ' number three is leaving');
	}
};

// looping through objects (objects keys)
// for in loop

const turtle = {
	name: 'marvin',
	age: 102,
	hungry: true
};

for (let temp in turtle){
	console.log(temp, ' this is temp')
	console.log(turtle[temp])
};

// write a for in loop for the turtle and on each key value pair
// I want you to add on to it the message Kowabunga


const turtle = {
	name: 'marvin',
	age: 102,
	hungry: true
};

for (let temp in turtle){
	turtle[temp] += ' Kowabunga';
	console.log(turtle[temp])
};


 //Write a for loop that will iterate from 0 to 20
for (let i = 0; i <= 20; i++)
	if ([i] % 2 === 0){
		console.log([i] + ' is even')
	}else {
		console.log([i] + ' is odd')
	}

//Define a variable named myBagOfBeans 
//and set it equal to fifty. loop down from a hundred 
//and if the number is even add the current value to myBagOfBeans.

let myBagOfBeans = 50;


for (let i = 100; i <= 0; i++)
	console.log(i + ' down')
	if ([i] % 2 === 0 + myBagOfBeans[i]){
		console.log([i] + ' is even')
		};


//Loop through this array, and seperate the 
//drinks, the food, and the sauces into seperate arrays.

const arrayOfStringsRememberIcanNameMyVariablesAnythingIWant = 
['cheese', 'pepperoni', 'sausage', 'coca cola', 'lemonade', 'dough', 'beer', 'wine', 'ranch', 'blue cheese', 'bbq sauce'];

for (let i = 0; i < arrayOfStringsRememberIcanNameMyVariablesAnythingIWant.length; i++){
	
};

//Loop through the following array and push the items that are not numbers into a seperate array


const mixedArray = [1, 2, 3, 'taco', 4, 5, 6, 'burrito', 7, 8, 9, 'Whats the deal with airplane peanuts', 3.14, {barry: "Mannilow",}, 6, 55, null, "Old " + "Crow " + " Medicine Show", 3, 2, "I want the calzone from pizanos", "Death blow", "Firestorm", "48", 30]

for (let i = 0; i < mixedArray.length; i++){
	mixedArray.push()
};



const food = ['bun', "jalepeno cheddar", "elk", "beef", "1954 ford mustang", 1.14, 1.23, 'hot dog', "gary clark jr", " I'lll never fall in love again", "mustard", "ketchup", 30, 50, 80, "grilled onions", "egg", "Dr. Suess"]

const dinner = [];

for (let i = 0; i < food.length; i++){
	if(food[i] === 'bun' || food[i] === 'jalepeno'){
		dinner.push(food[i])
	}
}


//For....In loops


const colorObjects = {red: 'red', blue: 'blue', cyan: 'cyan'}

for (let temp in colorObjects){
	console.log(colorObjects[temp])
};


const seinfeld = {cosmo: "kramer", jerry: "Seinfeld", george: "constanza", elaine: "bennis"}

for (let temp in seinfeld){
	console.log(temp)
};





const profile = {name: "Elon Musk", occupation: "space man", hobbies: ["paypal", "space X", "rocket science"]}

for (let temp in profile){
	console.log(profile[temp])
}


//Use a for loop or a for in loop and print out the properties of the object or value of the indexin the array, Above your code write in a comment what loop you are using and why




const zeppelin = ["In through the out door", "Zep 1", "Zep 2", "Zep3", "Zep4", "Physical Graffiti"]

for(let i = 0; i < zeppelin; i++){
	console.log(zeppelin[i])
}


const sandwhich = {name: "sunday morning special", bread: "ciabatta", 
cheese: "pepper jack", green: "arugala", redStuff: "cherry tomatoes", heated: true}

for (let prop in sandwhich){
	con
}






function checkAge(age){
	prompt('age')
	const age = prompt('age')



	if(age > 20){
		console.log('your old')
	} else{
		console.log('no soup for you')
	}
}
















































