#include <iostream>
#include <fstream>
using namespace std;

enum TSituacao  {reprovado = -1, recuperacao, aprovado} ;

struct TAluno
{
  string nome;
  float nota1, nota2, media, frequencia;
  TSituacao situacao;
};


main()
{
  ifstream entrada;
  ofstream aprovados, reprovados, recuperacao;
  string puloDeLinha;
  TAluno aluno;
  int aulas;

  entrada.open("Alunos.txt");
  aprovados.open("Aprovados.txt");
  reprovados.open("Reprovados.txt");
  recuperacao.open("Recuperacao.txt");

  getline(entrada, puloDeLinha);
  entrada >> aulas;
  getline(entrada, puloDeLinha);
  while (!entrada.eof())
  {
    getline(entrada, puloDeLinha);
    getline(entrada, aluno.nome);
    entrada >> aluno.nota1;
    getline(entrada, puloDeLinha);
    entrada >> aluno.nota2;
    getline(entrada, puloDeLinha);
    entrada >> aluno.frequencia;
    getline(entrada, puloDeLinha);
    aluno.media = (aluno.nota1 + aluno.nota2)/2;
    aluno.frequencia = aluno.frequencia / aulas;
    if (aluno.frequencia < 0.75 || aluno.media < 3)
      reprovados << "\nNOME:       " << aluno.nome << "\nNOTA 1:     " << aluno.nota1 << "\nNOTA 2:     " << aluno.nota2 << "\nMEDIA:      " << aluno.media << "\nFREQUENCIA: " << aluno.frequencia*100 << "%\n";
    else if (aluno.media >= 3 & aluno.media < 7)
           recuperacao << "\nNOME:       " << aluno.nome << "\nNOTA 1:     " << aluno.nota1 << "\nNOTA 2:     " << aluno.nota2 << "\nMEDIA:      " << aluno.media << "\nFREQUENCIA: " << aluno.frequencia*100 << "%\n";
         else aprovados << "\nNOME:       " << aluno.nome << "\nNOTA 1:     " << aluno.nota1 << "\nNOTA 2:     " << aluno.nota2 << "\nMEDIA:      " << aluno.media << "\nFREQUENCIA: " << aluno.frequencia*100 << "%\n";
  }
}

