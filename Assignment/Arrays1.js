const fruits = ["Apple", "Guava","Kiwi","Dragonfruit","Grapes"];//Array of fruits 

function getFruits(){
    console.log(fruits[0]);
    console.log(fruits[fruits.length-1]); // function to return the first and last fruit
}

getFruits();

fruits.push("Banana"); // method for adding a new fruit and printing the updated array
console.log(fruits); 

fruits.shift();//method for removing a first fruit and printing the updated array
console.log(fruits);


const numbers = [10,20,30,40,50];

let square = numbers.map((item,index)=>{ // used map function to square the number 
    return item*item; 
})
console.log(square);// after squaring the number it gives an updated array of new numbers

let filters = numbers.filter((item,index)=>{ // used filter function to filter the number greater than 25
    return item > 25;
})

console.log(filters); // after filter it gives an updated array of new numbers which are greater than 25.


const arrays = [20,405,30,1000,508,800];

function FindLargetNumber(arrays){
    let largest = arrays[0];// Initialize with the first element
for(i=0;i<arrays.length;i++){
    if(arrays[i]>largest){
        largest = arrays[i];// Update the largest if current element is bigger
    }
}
return largest;
}

console.log(FindLargetNumber(arrays));


const string = ["JavaScript", "Python", "Java", "C++", "Ruby"];

function FindString(string,targetString){
    for(let i=0;i<string.length;i++){
        if(string[i] === targetString){
            return true; 
        }
        
    }
    return false;
}

console.log(FindString(string,"Ruby"));

const Books = [{
    title:"To Kill a Mockingbird",
    author: "Harper Lee",
    yearPublished:1960
},
{
    title: "1984",
    author: "George Orwell",
    yearPublished:1949
},
{
    title: "Moby Dick",
    author: "Herman Melville",
    yearPublished: 1851
},
{
    title: "The Road",
    author: "Cormac McCarthy",
    yearPublished: 2006
},
{
    title: "The Hunger Games",
    author: "Suzanne Collins",
    yearPublished: 2008
}
]

function getBooks(){
    // Loop through the array and check yearPublished
    for(let i=0;i<Books.length;i++){
        if(Books[i].yearPublished>2000){
            console.log(Books[i].title);
        }
    }
}

getBooks();

function getSortedBooks(){
    Books.sort((a,b)=>{
      return a.yearPublished-b.yearPublished;
      
    })
    console.log(Books);
}

getSortedBooks();


const matrix = [[1,2,3],[4,5,6],[7,8,9]];

// Function to print the matrix in a readable format
function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
      let row = '';
      for (let j = 0; j < matrix[i].length; j++) {
        row += matrix[i][j] + ' '; // Add each element in the row
      }
      console.log(row.trim()); // Print the row without extra space
    }
}

printMatrix(matrix);

function sum(){
    let total = 0; 
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
        total += matrix[i][j];
        }
    }
    console.log(total);

}
sum();


const arr1 = [22,33,55,86,75,57,55];
const arr2 = [10,22,35,55,75,86,100];

function intersect(arr1, arr2) {
    const intersection = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !intersection.includes(arr1[i])) {
      intersection.push(arr1[i]);
    }
  }

  return intersection;
}

console.log(intersect(arr1, arr2));


function removeDuplicate(arr1){
    const unique = [];
    for(let i=0; i<arr1.length; i++){
        if(!unique.includes(arr1[i])){
            unique.push(arr1[i]);
        }
    }
    return unique;
}

console.log(removeDuplicate(arr1));

const num = [12,34,545,67,89,90];
function caluculate(num){
    const count = num.length;// Total count of numbers
    const Total = num.reduce((total,item,index)=>{
        total+=item;
        return total;
}, 0);
const average = count>0?Total/count:0; // Average
return {
    count: count,
    sum:Total,
    Average:average
}
}
console.log(caluculate(num));