var nome = prompt ("Insira o seu nome -- > ");
var senha = prompt ("Insira sua sennha -- > ");

var TamNome = nome.length ;
var TamSenha  = senha.length ; 
function VerificaLogin ( ) {
    return  ( TamNome > 15  ||  TamNome < 5 || TamSenha > 15 || TamSenha  < 8) ;
}

if ( VerificaLogin ()) {
    console.log("Login inválido!");
} else {
    console.log("Login válido!");
}   