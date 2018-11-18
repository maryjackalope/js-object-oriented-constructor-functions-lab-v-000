function Scooter (year, color, model){
  this.year = year
  this.color = color 
  this.model = model
}

let swoosh = new Scooter('swoosh', 2017, 'red')

function Driver (name, age, experience){
  this.name = name 
  this.age = age
  this.experience = experience
 
}
let allison = new Driver('Allison', '16 years' , '2 years')

function PickupLocation (address, city){
  this.address = address 
  this.city= city
  
}

let Broadway = new PickupLocation('123 Broadway', 'New York City')