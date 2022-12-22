class Animal {
    constructor() {
        this.nome = "cachorro" ; 

        this.nome2 = "Gato" ; 
    }
    printNome( ) {
        return this.nome ; // this representa o objeto que será representado por uma variável 
    }
}

class Animal2 extends Animal { // extends Serve para herdar de uma classe 
}


animal  = new Animal ( ) ; 


console.log( animal.nome ) ; 

console.log( animal.nome2 )

console.log( animal.printNome () )

animal2 = new Animal2 () ; 

console.log("\n");

console.log( animal2.nome ); 

console.log( animal2.nome2 );

console.log( animal2.printNome());



class TiposDeanimais {
    constructor(nome) {
        this.nome = nome ; 
  }
    printNome() {
        return this.nome ; 
    }
} 

class TiposDeanimais2 extends TiposDeanimais { 
    constructor (nome) {
        super(nome) ;
    }
}

Tanimal =  new TiposDeanimais2 () ; 

Tanimal.nome = "Pato" ; 


console.log ( "\n" + Tanimal.printNome()) ; 

