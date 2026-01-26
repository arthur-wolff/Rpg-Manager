import { useState } from "react";
import "./diceRoller.css";

const DiceRoller = () => {

    //Configuração inicial dos estados dos dados  
    const [n_dados, setN_dados] = useState(1);
    const [faces, setFaces] = useState(20);
    const [mod, setMod] = useState(0);

    //Inicia resultados
    const [resultado, setResultado] = useState([]);
    const [total, setTotal] = useState(null);

    //Inicia Historico
    const [historico, setHistorico] = useState([]);

    //Inicia Status de rolagem
    const [rolando, setRolando] = useState(false);

    //Função Principak de rolagem  
    const rolarDados = () => {
        //Validação inicial de inputs
        if (n_dados <= 0 || faces < 2){
            alert("Insira um numero de dados e faces válidos");
            return
        }
        //Impedir rolagems simulatneas
        if (rolando) return;
        
        //Seta o estado de rolagem
        setRolando(true);

        

        


        

    };
};

export default DiceRoller;