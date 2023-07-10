<?php
$valor = 5;
echo testeGlobal();

function testeGlobal(): float{
    global $valor;
    $valor += $valor;
    return $valor;
}
print("<br>");
function  soma(): float{
    $meusArgumentos =  func_get_args();
    $qtdArgumentos = func_num_args();
    $soma = 0;
    for ($i = 0; $i < $qtdArgumentos; $i += 1) {
        $soma += $meusArgumentos[$i];
    }
    return $soma;
}

print(soma(2, 3, 4, 5));
print("<br>");
print(soma(2,3,4,5,6,7,8))
?>