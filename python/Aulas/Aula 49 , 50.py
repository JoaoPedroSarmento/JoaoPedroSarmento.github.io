# ABrindo arquivos no python 

""" 
Métodos de arquivos 
w - writer - escrever 

r - read - ler 

a - append - extender
"""

arquivo = open('teste.txt' , 'w') ;

texto = input("Escreva algo para inserir no arquivo : ") ; 

arquivo.write(texto) ;

arquivo.close() ; 