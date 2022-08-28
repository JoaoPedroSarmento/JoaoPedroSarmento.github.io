let spaceshipsList = ["Colossus", "Helmet", ["Fenix", "Revivor"], "Supernova"];

spaceshipsList.pop(); // ["Colossus", "Helmet", ["Fenix", "Revivor"] ]

spaceshipsList.pop(); // ["Colossus", "Helmet" ]

spaceshipsList.push("Elemental"); // ["Colossus", "Helmet" ," Elemenal " ]

spaceshipsList.unshift("Eagle"); // [ "Eagle" ,  "Colossus", "Helmet" ," Elemenal " ]

spaceshipsList.shift(); // ["Colossus", "Helmet" ," Elemenal " ]

spaceshipsList.unshift(""); // [ "","Colossus", "Helmet" ,"Elemental" ]
console.log(spaceshipsList);
