function teamswitshfunction (Light,DarkMode) {
    //get  a element from html
    const body = document.querySelector("#body")
    console.log(body)
        //set up a if/else statment to check wat 
        console.log(body.classList)
    if (body.classList.contains("Light")){
        body.classList.remove("Light")
        body.classList.add("DarkMode")
        console.log("lite")
    } else if (body.classList.contains("DarkMode")){
        body.classList.remove("DarkMode")
        body.classList.add("Light")
console.log("dark")
    }else{
        console.log("somting is wrong")
    }
}

export {teamswitshfunction}
