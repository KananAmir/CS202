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

const tBody = document.querySelector("tbody")
const searchInput = document.querySelector("#search")
const select = document.querySelector("#sort")

function drawTable(array){
    tBody.innerHTML = ""
    array.forEach((item)=>{
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.position}</td>
            <td>${item.salary}</td>
            <td>${item.department}</td>
        `
        tBody.append(row)
    })  
}

drawTable(employees)


//input, keyup, change


searchInput.addEventListener("keyup", (event)=>{
    // console.log(event.target.value);
    const searchValue = event.target.value.toLowerCase()
    const filteredEmployees = employees.filter((employee)=>employee.name.toLowerCase().includes(searchValue))

    // console.log(filteredEmployees);

    drawTable(filteredEmployees)
    
})


select.addEventListener("change", (e)=>{
    let sortedEMployees = []
    if (e.target.value === "asc") {
        sortedEMployees = employees.toSorted((a, b)=>a.salary - b.salary)
    }else if(e.target.value === "desc"){
        sortedEMployees = employees.toSorted((a, b)=>b.salary - a.salary)
    }else{
        sortedEMployees = employees
    }
    
    console.log(sortedEMployees);
    drawTable(sortedEMployees)
    
})