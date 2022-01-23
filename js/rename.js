const renameBTN = document.querySelector("#rename")

function rename() {
    localStorage.removeItem("username")
    location.reload()
}

renameBTN.addEventListener("click",rename)
