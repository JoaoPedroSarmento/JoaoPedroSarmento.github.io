// importando funções
import {
  exportInline,
  exportNonInline as exportacaoSemSerEmLinha, // as serve para trocar o nome da função importada
} from "../funcoes/exportFuncoes.js";
import defaultInline from "../funcoes/exportFuncoes.js";
exportInline();
exportacaoSemSerEmLinha();
defaultInline();
// caso importe apenas uma função não é necessário o uso das chaves
