class User {
  constructor (username, password, age){
    this.username = username 
    this.password = password
    this.age = age 
    this.loggedIn = false
  }

  login (password){
    if (this.password !== password){
    throw new Error ("incorrect password")
  } else {
    this.loggedIn = true
  }
}

  logout() {
    return this.loggedIn = false
  }
}


module.exports = User
