#include<iostream>
using namespace std;

int VerificaSeE_UM_triangulo(int l1, int l2, int l3)
{
    if( (l1 + l2 < l3   ) || ( l1 + l3 < l2 )   || (  l2 + l3 < l1) )
    return 0;
    else
    return 1;
}
int TipoDoTriangulo(int l1, int l2, int l3)

{
    if(VerificaSeE_UM_triangulo(l1,l2,l3))
    {
    if( !(l1 == l2) && !(l2 == l3) && !(l1 == l3))
    return 1;
    if( (l1 == l2 && l1 != l3 && l2 != l3  ) || ( l2 == l3 && l2 != l1 )  || ( l1 == l3 && l1 != l2 ) )
    return 2;
    else
    return 3;
}
return 0;
}
main()
{
    int l1, l2, l3;

    cout << "Insira o primeiro lado: ";
    cin  >> l1;
    cout << "Insira o segundo lado: ";
    cin  >> l2;
    cout <<"Insira o terceiro lado: ";
    cin  >> l3;

    switch(TipoDoTriangulo(l1,l2,l3))
    {

        case 1:
            cout << "Escaleno";

            break;
        case 2:
            cout << "Isosceles";
            break;
        case 3:
            cout << "Equilatero";
            break;

        default :
            cout << "Nao e um triangulo.";
            break;
    }
}
