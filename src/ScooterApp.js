// require the User and Scooter classes - see where they can be used in ScooterApp.js

const Scooter = require("./Scooter")

class ScooterApp extends User {
  constructor (username, password, age, stations, registeredUsers){
super(username, password, age)
    this.stations = stations
this.registeredUsers = registeredUsers
  }
  registeredUser(username, password, age){
    if (this.age < 18){
      throw new Error `Too young to register`
    } else if (!this.username){
      throw new Error `already registered`
    } else {
      return new User
    }
  }
  loginUser(username, password){
    if (this.username !== username || this.password !== ){
      throw new Error `Username or password is incorrect`
    } else {
      console.log('user has been logged in')
    }
  }
  createScooter (station){
    return this.station = new Scooter
  }
}

module.exports = ScooterApp
