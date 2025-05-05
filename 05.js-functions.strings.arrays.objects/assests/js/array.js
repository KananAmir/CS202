const employees = [
    {
        id: 1,
        name: "Ali Mammadov",
        position: "Frontend Developer",
        salary: 1200,
        isActive: true,
        email: "ali.mammadov@example.com",
        hireDate: "2022-05-15",
        department: "IT"
    },
    {
        id: 2,
        name: "Leyla Ahmadova",
        position: "Backend Developer",
        salary: 1500,
        isActive: true,
        email: "leyla.ahmadova@example.com",
        hireDate: "2021-11-02",
        department: "IT"
    },
    {
        id: 3,
        name: "Tunar Isgandarov",
        position: "UI/UX Designer",
        salary: 1100,
        isActive: false,
        email: "tunar.isgandarov@example.com",
        hireDate: "2020-08-25",
        department: "Design"
    },
    {
        id: 4,
        name: "Sevda Aliyeva",
        position: "Project Manager",
        salary: 2000,
        isActive: true,
        email: "sevda.aliyeva@example.com",
        hireDate: "2019-01-10",
        department: "Management"
    },
    {
        id: 5,
        name: "Rashad Qurbanov",
        position: "QA Engineer",
        salary: 1000,
        isActive: false,
        email: "rashad.qurbanov@example.com",
        hireDate: "2023-03-18",
        department: "Quality Assurance"
    },
    {
        id: 6,
        name: "Nigar Huseynli",
        position: "DevOps Engineer",
        salary: 1800,
        isActive: true,
        email: "nigar.huseynli@example.com",
        hireDate: "2021-06-30",
        department: "Infrastructure"
    },
    {
        id: 7,
        name: "Elvin Suleymanov",
        position: "Data Analyst",
        salary: 1300,
        isActive: true,
        email: "elvin.suleymanov@example.com",
        hireDate: "2020-12-12",
        department: "Analytics"
    },
    {
        id: 8,
        name: "Gunel Rahimli",
        position: "HR Specialist",
        salary: 950,
        isActive: false,
        email: "gunel.rahimli@example.com",
        hireDate: "2018-09-20",
        department: "Human Resources"
    },
    {
        id: 9,
        name: "Murad Hajiyev",
        position: "Mobile Developer",
        salary: 1400,
        isActive: true,
        email: "murad.hajiyev@example.com",
        hireDate: "2022-07-07",
        department: "Mobile"
    },
    {
        id: 10,
        name: "Aygun Abbasova",
        position: "System Administrator",
        salary: 1250,
        isActive: true,
        email: "aygun.abbasova@example.com",
        hireDate: "2019-10-01",
        department: "Infrastructure"
    }
];

const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies

console.log(webTechs[webTechs.length - 1]);
const students = ["turqut", "mehriban", "kamal"]

//array methods
// students.push("laman")
// students.unshift("sabir")

// students.pop()
// students.shift()

// console.log(students);

//splice

// webTechs.splice(1, 4)
// webTechs.splice(1, 2, "Bootstrap")
webTechs.splice(1, 0, "Bootstrap")
console.log(webTechs);



console.log(webTechs.join(" "));
console.log(webTechs.join(","));


const numbers1 = [1, 2, 3]
const numbers2 = [4, 5, 6]

const allNumsArray = numbers1.concat(numbers2)
// console.log(allNumsArray);
console.log([...numbers1, ...numbers2]);



const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }


fruits.forEach((element, index)=>{
    console.log(element); 
})

const numbers = [0, 3.14, 9.81, 37, 98.6, 37, 100, 37] // array of numbers

let sum = 0
numbers.forEach((number)=>{
    sum += number
})

console.log(sum);
