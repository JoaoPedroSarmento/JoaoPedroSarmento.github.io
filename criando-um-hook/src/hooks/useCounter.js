import { useState } from "react";

function valorInicial() {
    console.log("Obtendo o valor inicial");
    return 1;
}
export default function useCounter() {
    const [count, setCount] = useState(valorInicial)

    const increment = () => {
        setCount(() => count + 2);
    }

    return { count, increment }; // retorna um objeto com duas propriedades
}