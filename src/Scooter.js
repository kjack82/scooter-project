class Scooter {

  static nextSerial = 0

  constructor (station){
  this.station = station
    this.user = null
    this.serial = Scooter.nextSerial++
    this.charge = 100
    this.isBroken = false
  }

  rent(user){
    if (this.charge < 20) {
      throw new Error("scooter needs to charge")
    } else if (this.isBroken === true) {
      throw new Error("scooter is broken")
     } else {
      this.user = user
    }
  }

  dock(station){
    this.user = null
    this.station = station
  }
  recharge (){
    const chargingTimer = setInterval (() =>{
if (this.charge < 100) {
  this.charge +=10
  console.log("Charge has increased by 10%")
} else if (this.charge >=100) {
console.log("Charging complete")
clearTimeout(chargingTimer)
}
}, 1000)
}

requestRepair(){
  const repair = setInterval (() => {
    this.isBroken = false 
    console.log("repair completed")
    clearInterval(repair)
  } 5000
}
}


module.exports = Scooter
