var date = new Date() ; 

dia =  date.getDate()  // Dia do mês 

var DiaDaSemana = date.getDay () ; // Dia da semana ( domingo , segunda , terça ... ) 

if ( DiaDaSemana == 0 ) {
    DiaDaSemana = "Domingo";
}
else 
 if( DiaDaSemana == 1 ) {
    DiaDaSemana = "Segunda";
 }
 else 
 if ( DiaDaSemana == 3 ) {
    DiaDaSemana = "Terça"
 }
 else 
 if ( DiaDaSemana == 4 ) {
    DiaDaSemana = "Quarta"
 }
 else 
 if ( DiaDaSemana == 5 ) {
    DiaDaSemana = "Quinta";
 }
 else 
 if ( DiaDaSemana == 6 ) {
     DiaDaSemana = "Sexta";
 }
 else {
   DiaDaSemana = "Sábado";
 }


var mes = date.getMonth() ; 

var Ano = date.getFullYear(); // Mostra o ano em que estamos 



console.log("DIA ATUAL   : " + dia + "/" + mes + "/" + Ano  + " \nDIA DA SEMANA : " + DiaDaSemana );
