const bookList = document.querySelector(".book-list")
const loader = document.querySelector(".loader-wrapper")

async function getData(endpoint) {
    try {
        const response = await fetch(`https://northwind.vercel.app/api/${endpoint}`);
        const data = await response.json();

        drawList(data)
    } catch (error) {
        console.log(error);
    }finally{
        loader.style.display = "none"
        
    }
}

function drawList(array) {
    bookList.innerHTML = ""
    array.forEach((c) => {
        const listItem = document.createElement("li")

        const title = document.createElement("span")
        const deleteBtn = document.createElement("button")
        title.textContent = c.name
        deleteBtn.textContent = "delete"

        deleteBtn.addEventListener("click", (e)=>{
            // console.log(book.id);
            
            if(window.confirm("Are u sure to delete??")){
                fetch(`https://northwind.vercel.app/api/categories/${c.id}`, {
                    method: "DELETE",
                }).then((resp)=>{
                    console.log(resp)
                    if(resp.ok){
                        getData("categories")
                    }
                }).catch((err)=>{
                    console.log(err);
                    
                })
            }
     
        })

        listItem.append(title, deleteBtn)
        bookList.appendChild(listItem)
    })
}




getData("categories")


async function postData(payload) {
    const response = await fetch("https://northwind.vercel.app/api/categories", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "Content-type":"application/json"
        }
      });
}
async function editData(payload, id) {
    const response = await fetch(`https://northwind.vercel.app/api/categories/${id}`, {
        method: "PATCH",
        body: JSON.stringify(payload),
        headers: {
            "Content-type":"application/json"
        }
      });
}

const addBtn = document.querySelector(".add")
const editBtn = document.querySelector(".edit")



addBtn.addEventListener("click", ()=>{
    postData({name: "CS405"})
})

editBtn.addEventListener("click", ()=>{
    editData({name: "test test test"}, 5)
})
