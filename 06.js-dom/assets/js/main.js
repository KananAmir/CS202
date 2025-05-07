// console.log(document);

//selectors

console.log(document.body);

// const heading = document.getElementById("heading")
// const parags = document.getElementsByClassName("text")
const heading = document.querySelector("#heading")
const parags = document.querySelectorAll(".text")
// console.log(parags[0]);
console.log(heading);
console.log(parags);



Array.from(parags).forEach((p)=>{
    console.log(p);
})


// heading.addEventListener("mouseover", ()=>{
//     window.alert("hacked!")
// })


const createBtn = document.querySelector(".create")
const containerElem = document.querySelector(".container")

const clickMeBtn = document.querySelector(".click-me")

clickMeBtn.addEventListener("click", ()=>{
    heading.style.color = "red"
    heading.style.backgroundColor = "teal"
    heading.textContent = "I was clicked"
    heading.style.display = "none"

    // document.body.innerHTML = `<h2>HACKED!</h2>`
})


//events - click

createBtn.addEventListener("click", ()=>{

    const headingElem = document.createElement("h3")

    headingElem.textContent = "CS202"
    
    containerElem.append(headingElem)
    
})

const linkElem = document.createElement("a")
linkElem.textContent = "link to website"
// linkElem.href = "https://www.google.com"

linkElem.setAttribute("href", "https://www.google.com")

containerElem.append(linkElem)

//create image
// const image = document.createElement("img")
// image.setAttribute("src", "https://www.hdwallpapers.in/download/abstract_cover_background_4k_hd-1920x1080.jpg")
// image.setAttribute("alt", "image")
// // image.setAttribute("width", "400")
// image.setAttribute("height", "400")

// containerElem.append(image)

console.log(containerElem.getAttribute("id"));

///////////////////////////////////////////

const inputElem = document.querySelector("input")
const addBtn = document.querySelector(".add-btn")

const resultElem = document.querySelector(".result")
// addBtn.addEventListener("click", ()=>{
//     const text = inputElem.value

//     const pElem = document.createElement("p")
//     pElem.textContent = text
//     resultElem.append(pElem)

//     inputElem.value = ""
// })

function sanitize(str) {
    return str.replace(/[&<>"']/g, function (char) {
      return {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
      }[char];
    });
  }
  
addBtn.addEventListener("click", ()=>{
    const text = inputElem.value


    resultElem.innerHTML += `
        <li>${sanitize(text)}</li>
    `

    inputElem.value = ""
})


const list = document.querySelector(".list")


// list.innerHTML = `
//     <li>html</li>
//     <li>css</li>
//     <li>js</li>
// `



// events

document.cookie = "username=John Doe";


const hackImage = document.querySelector("#hack")

// hackImage.addEventListener("mouseover", ()=>{
//     // console.log("test");
//     window.alert(document.cookie)
// })

window.addEventListener("keyup", (event)=>{
    console.log(event.code);
})



