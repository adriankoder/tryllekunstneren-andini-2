function teamswitshfunction (Light,DarkMode) {
    //get  a element from html
    const body = document.querySelector("#body")
    console.log(body)
        //set up a if/else statment to check wat 
    if (body.classList.contains(Light)){
        body.classList.remove(Light)
        body.classList.add(DarkMode)
    } else if (body.classList.contains(DarkMode)){
        body.classList.remove(DarkMode)
        body.classList.add(Light)

    }else{
        console.log("somting is wrong")
    }
}

export {teamswitshfunction}
