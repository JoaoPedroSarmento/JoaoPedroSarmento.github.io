<?php
function verificaSeVariavelEstaVazia($a): void
{
    if (empty($a)) {
        echo "$a está vazio <br>";
    } else {
        echo "$a está preenchida <br>";
    }
}

verificaSeVariavelEstaVazia("");
verificaSeVariavelEstaVazia("texto...");
verificaSeVariavelEstaVazia(0);

// criando constantes 
define("PI", 3.1416);
// com constantes não é necessário o sinal -> $
echo PI;

echo "<br>";
$a = "2";
$b = 2;

echo "<br>";
if ($a == $b) {
    print("$a é igual a $b");
} else {
    print("$a não é igual a $b");
}

echo "<br>";
if ($a === $b) {
    print("$a é igual a  $b");
} else {
    print("$a não é igual a $b");
}

echo "<br>";
// problemas and e or 

$a = false or true;
var_dump($a);
echo "<br>";
$a  = false || true;
var_dump($a);
echo "<br>";
$a  = true and false;
var_dump($a);
echo "<br>";
$a = true && false;
var_dump($a);
echo "<br>";

function alteraVarialvelGlobal()
{
    global $a;
    $a = "Valor trocado!!";
}
echo "<br>";
alteraVarialvelGlobal();
echo $a;

function soma(float $num1, float $num2): float
{
    $qtdArgs = func_num_args();
    $args = func_get_args();
    $soma = 0;
    for ($i = 0; $i < $qtdArgs; $i += 1) {
        $soma += $args[$i];
    }
    return $soma;
}
echo "<br>";
echo soma(4, 5, 8, 9, 10);

$pessoa = array(
    "nome" => "João",
    "idade" => 17
);
echo "<br>";
echo $pessoa[0] . " <br> " . $pessoa["idade"];
/* 
Não irá funcionar: 
for ($i = 0; $i < sizeof($pessoa); $i += 1) {
     echo $pessoa[$i] . "<br>";
 }
 isso ocorre porque nenhum índice foi iniciado, possuí apenas chave e valor
*/

echo "<br>";
echo "Usando foreach";
foreach ($pessoa as $valor) {
    echo "<br>" . $valor;
}

$arrayLetras = ["b", "a", 'd', "h"];
// não é possível usar echo para mostrar todo o array
echo "<br>";
var_dump($arrayLetras);
echo "<br>";
// ordena o array
sort($arrayLetras);
var_dump($arrayLetras);
echo "<br>";
// adiciona um valor na última posição do array
array_push($arrayLetras, "g");
var_dump($arrayLetras);
// remove o último valor de um array
echo "<br>";
array_pop($arrayLetras);
var_dump($arrayLetras);
echo "<br>";
// adiciona um valor na primeira posição do array
array_unshift($arrayLetras, 'f');
var_dump($arrayLetras);
echo "<br>";
// remove o primeiro valor de um array 
array_shift($arrayLetras);
var_dump($arrayLetras);
echo "<br>";
// desta forma é possível adicionar um valor na última posição de um array
$arrayLetras[] = "k";
var_dump($arrayLetras);
echo "<br>";
print(gettype($arrayLetras));
echo "<br>";
echo (in_array("a", $arrayLetras))  ?  "true" : "false";

echo "<br>";
$arrayLetras = ["b", "c",  'd', "a", 'e'];
sort($arrayLetras);
foreach ($arrayLetras as $chave => $valor) {
    echo "Chave:$chave => valor: $valor <br>";
}
