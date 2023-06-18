num = float(input("Insira um valor!"))
i = 0
anterior = 0
atual = 1
proximo = atual + anterior
while i < num:
    print(proximo)
    proximo = atual + anterior
    anterior = atual
    atual = proximo
    i += 1
