class capitan{
  constructor(name, idade, horas)
   {
     this.name = name
     this.id = idade 
     this.hours = horas 
   }
 }
 
 class Spaceship{
   constructor(nomedaNave,trip,capitanName,capitanidade,capitanhours)
   {
   this.["Nome da nave : "] = nomedaNave
   this.tripulantes = trip
    this.capitan = new capitan(capitanName,capitanidade,capitanhours)
   
   }
 }
 
 let spaceShip = new Spaceship("Artemis", 13,"Bill Gates",40,2000)
 
 console.log(spaceShip)
   