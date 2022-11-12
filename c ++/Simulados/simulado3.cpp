#include<iostream>
#include<conio.h>
using namespace std;

int quantidadeDeDigitosDeUmInteiro(int n)
{
    int r = 0;
    if(n == 0) return 1;
    else{
        while(n != 0)
        {
            n = n/10;
            r++;
        }
    }
    return r;
}

int digitoDeUmNumero(int n, int pos)
{
    int i, digito, tam;
    tam = quantidadeDeDigitosDeUmInteiro(n);
    if(pos >= tam) return -1;
    else{
        for(i = 0; i <= pos; i++)
        {
            digito = n % 10;
            n = n/10;
        }
        return digito;
    }
}

int NumeroInteiroEspelhado(int n)
{
    int pos = quantidadeDeDigitosDeUmInteiro(n)-1;
    int resultado  = 0, i = 0,s;
    for(pos; i <= pos; i++)
    {
        s = digitoDeUmNumero(n, i);
        resultado = (resultado * 10) + s ;
    }
    return resultado;
}
int main()
{
    int i, f;
    cout << "\tESTE PROGRAMA PROGRAMA IMPRIME UMA LISTA DE NUMEROS ESPELHADOS DENTRO DE UM INTERVALO ESTABELECIDO PELO USUARIO \n\n";
    cout << "\tINDIQUE O LIMITE INICIAL DOS NUMEROS QUE SERAO TESTADOS :  ";
    cin >> i;
    cout << "\tINDIQUE O LIMITE FINAL DOS NUMEROS QUE SERAO TESTADOS : ";
    cin >> f;
         for(i;f < i;i--)
        {
            if(NumeroInteiroEspelhado(i)==i)
            cout<<"\t"<< i<<"\n";
        }
        for(i;f> i;i++){
         if(NumeroInteiroEspelhado(i)==i)
            cout<<"\t"<< i<<"\n";
        }
        getch();
}
