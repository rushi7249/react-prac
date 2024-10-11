console.log("task18")

//question 1
const arr=[1,2,3,4,5]

const squArr=arr.map((items)=>{
    return(
items*items
    )
})
console.log(squArr)



// question 2

function score(marks){

    return marks>=90?"A":marks>=80?"B" :marks>=70 ?"C":"D"


}

const grade=score(90)

console.log("grade is "+grade)


//question 3 


const car={
    Name:"Tata Motot",
    model:"harrier",
    year:"2021"
}

function CarsChange(carObj,newYear){
    carObj.year=newYear
}

const {model,year}=car
console.log(`model is ${model} and year is ${year}`)


CarsChange(car,2024)
const { year: updatedYear } = car;
console.log(` updated :: model is ${model} and year is ${updatedYear}`)


// question 4

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];


function isPrime(num) {
    if (num <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true;
}


const newArr1 = arr1.filter(isPrime);

console.log(newArr1); // Output: [2, 3, 5, 7, 11, 13, 17]

//question 5


const array=[1,2,3,4,5,6,7,8,9]

const mapaary=array.map((items)=>{
    return(
items*items
    )
})

console.log("mapaary"+mapaary)


const filterarray=array.filter((num)=>{
    return(
num%2===0
    )
})

console.log("filterarray",filterarray)

const reduceaaray=array.reduce((acc,current)=>{
    return(
        acc+current
    )
},0)

console.log("reduceaaray",reduceaaray)


// question 6

async function Fun(){
const response= await fetch("https://jsonplaceholder.typicode.com/users")
const data = await response.json();
console.log("fetch data",data)
}
Fun()


//question 7


const person = {
    name: "John Doe",
    address: {
        street: "123 Main St",       
        city: "New York",
        country: "USA"
    },
    
    // contact: { phone: "123-456-7890" }
};


const phoneNumber = person?.contact?.phone;


if (phoneNumber) {
    console.log(`Phone Number: ${phoneNumber}`);
} else {
    console.log("Phone number is not available.");
}



