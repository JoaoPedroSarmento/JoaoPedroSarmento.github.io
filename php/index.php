<?php
function obtemMedia ( float $nota1 , float $nota2 ):float {
  return ($nota1+$nota2)/2;
}
function preencheGrau ( float $media , string &$grau ):void{
  if ( $media > 8 ) $grau = "A";
  else if ( $media >= 6 ) $grau = "B";
  else if ( $media < 6 ) $grau = "C";
  else if ( $media > 4 ) $grau = "D";
  else $grau = "E"; 
}
$dados = $_POST;
$nota1 = (float) $dados["nota1"];
$nota2 = (float) $dados["nota2"];
$media = obtemMedia ($nota1 , $nota2);
$grau = "";
preencheGrau($media ,$grau );
echo "GRAU -> $grau,  MÉDIA -> $media";
?>
