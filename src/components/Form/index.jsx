import React from 'react'
import { useState } from 'react';
import './Form.modules.css'

function Form() {
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");

    const [mensagem, setMensagem] = useState("");
    const [imcMessage, setImcMessage] = useState("");

    function calcularIMC() {

        const alt = altura / 100;
        const imc = peso / (alt * alt);

        if (altura === "" && peso === "") {
            alert("Por Favor, preencha o peso  e a altura corretamente !");
        } else if (!alt) {
            alert("Por Favor, preencha o peso  e a altura corretamente !");

        } else if (imc < 18.4) {
            setMensagem(`Você está Abaixo do peso !`);
            setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);

        } else if (imc >= 18.5 && imc < 24.9) {
            setMensagem(`Você está com o peso ideal (parabéns) !`);
            setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);

        } else if (imc >= 25 && imc < 29.9) {
            setMensagem(`Você está levemente acima do peso !`);
            setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);

        } else if (imc >= 30 && imc < 34.9) {
            setMensagem(`Você está com Obesidade Grau I !`);
            setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);

        } else if (imc >= 35 && imc < 40) {
            setMensagem(`Você está com Obesidade Grau II (severa) !`);
            setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);
        } else if (imc >= 40) {
            setMensagem(`Você está com Obesidade Grau III (mórbida) !`);
            setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);
        }
        setPeso("");
        setAltura("");
    }

    return (
        <>
            <label>Peso</label>
            <input
                className='dados'
                type="text"
                placeholder="Ex: 75.5"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
            />
            <label>Altura</label>
            <input
                className='dados'
                type="text"
                placeholder="Ex: 170"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
            />
            <button className='btn' onClick={calcularIMC}>
                Calcular IMC
            </button>
            <h2 className='subtitulo'>
                {mensagem} <br />
                {imcMessage}
            </h2>
        </>
    )
}

export default Form