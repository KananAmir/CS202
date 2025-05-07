// localStorage

const addBtn = document.querySelector('.add');
const remove = document.querySelector('.remove');

addBtn.addEventListener("click", ()=>{
    localStorage.setItem("group", "cyber")
})
remove.addEventListener("click", ()=>{
    localStorage.removeItem("mode")
})

// sessionStorage.setItem("test", "test");