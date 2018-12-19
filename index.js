//Level 0
let listName = ["Fahri", " Abdul", "Joseph"];

const titleName = listName.map(x => "Mr." + x);

console.log(titleName);

//Level 1
let listNameTwo = ["Mr. Fahri", "Mr. Abdul", "Mrs. Galgatot", "Mr. Gatot"];
const maleSex = listNameTwo.filter(x => x.toLowerCase().includes("mr. "));

console.log("Male Only:", maleSex);

//Level 2
const sexIndicator = listNameTwo.map(x => {
  if (x.charAt(2).toLowerCase() == "s") {
    return x + " (female)";
  } else if (x.charAt(2) == ".") {
    return x + " (male)";
  } else {
    return x + " (unknown)";
  }
});

console.log("Sex Indicator:", sexIndicator);

//Level 3

function search_name(inputSearch) {
  return listNameTwo.filter(x => x.toLowerCase().includes(inputSearch)); //Find akan berhenti ketika dia menemukan
}

function search_name(inputSearch) {
  return listNameTwo.find(x => x.toLowerCase().includes(inputSearch)); //filter akan menyeleksi sesuai dengan inputan, sekalipun itu ada lebih dari satu yang sesuai dengan inputan
}

console.log(search_name("gatot"));

//Level 4

var array1 = ["a", "b", "c"];
var text = "";

array1.forEach(function(element) {
  text += element + ",";
});

console.log(text);

const names1 = ["Mr. Fahri", "Mr. Abdul", "Mrs. Josephhine"];
const names2 = ["Mr. Joseph", "Mr. Paul", "Mrs. Paula", "Mr. Hakim"];
let nameConcat = names1.concat(names2);
let displayName = "";

//Style One
nameConcat.forEach(function(element) {
  displayName += element + ", ";
});
console.log(displayName);

//Style Two
console.log(nameConcat.join(", "));
