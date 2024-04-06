function setUserName(username){
    //complex db calls
    this.username = username
    console.log("called")
}

function createUser (username, email, password){
    // setUserName(username)
    setUserName.call(this, username)
    
    this.email = email
    this.password = password
}

const a = new createUser("pankaj", "pankaj@gmail.com", '123')
console.log(a)

