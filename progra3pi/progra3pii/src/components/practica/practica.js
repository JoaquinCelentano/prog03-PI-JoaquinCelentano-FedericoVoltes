import React, { Component } from "react";
import { useState } from "react";

function Contadorclicks() {
    const [contador, setcontador] = useState(0)
    return (
        <div>
            <h1>Contador de clicks: {contador}</h1>
            <button onClick={() => setcontador(contador + 1)}>   Click</button>
            <button onClick={() => setcontador(0)}>   resetear</button>
            
        </div>
    )
}



export default Contadorclicks;