gitHubButton  = document.getElementById("github");
linkedlnButton = document.getElementById("linkedln");

gitHubButton.addEventListener("click", e =>{
    clickFile("https://github.com/Joshua-Chris-L?tab=repositories")
});

linkedlnButton.addEventListener("click", e => {
    clickFile("https://www.linkedin.com/in/joshua-christopher-319b58100/")
})

function clickFile(url) { 
    let aTag = document.createElement("a");
    aTag.href = url
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
}

