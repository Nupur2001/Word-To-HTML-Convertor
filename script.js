document.addEventListener("DOMContentLoaded",()=>{
    let slider=document.querySelector(".slider")
    let switchInput=document.querySelector("input[type='checkbox']")

    switchInput.addEventListener('change',()=>{
        if (this.checked) {
            console.log("Checked")
        } else {
            console.log("Not changed")
        }
    })
})