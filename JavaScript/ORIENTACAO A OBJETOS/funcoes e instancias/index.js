var Pessoas = function () {
    
    this.nome = "João" ; 
    this.Nome2 = "Fernanda" ; 
    this.printNome = function () {
        console.log(this.Nome2) ;
    }

    this.RetornaAnimal = function (Nomeanimal) {
          return Nomeanimal ; 
    }
}

var pessoa  = new Pessoas() ; 
var pessoa2  =    new Pessoas() ; 

pessoa.nome = "Ronaldo" ; 

console.log(pessoa2.nome); 

console.log(pessoa.nome);

pessoa.printNome();


function DefineAnimal ( NomeDoanimal , peso ) {
    
    if ( NomeDoanimal == undefined ) {    
        
        this.NomeDoanimal = "Gato";
    }
    if ( peso == undefined ) {
        this.peso = "6kg" ; 
    }
}

animal = new DefineAnimal () ; 


console.log(animal.NomeDoanimal + " " +  animal.peso)

console.log(pessoa.RetornaAnimal(animal.NomeDoanimal) );