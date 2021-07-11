// serviços: água, luz... comportamento

//criar logica segundo o qual o tempo (segundos) serao contabilizados: tempo padrão
//só seja executado quando o nav terminar seu carregamento.
window.addEventListener("load", () => {

    const botao = document.getElementById("botao");

    //só seja executado quando clicar no botao.
    botao.addEventListener("click", () => {


        //tempo, em segundos, que queremos. 
        let sec = 360;

        //API document
        const countDiv = document.getElementById("timer");

        // criar função responsavel por atualiza o contador:

        const secpass = () => {

            let min = Math.floor(sec / 60); //flor: arredonda para baixo.
            let segundosRestantes = sec % 60; //resto da divisão

            //3:7 mais dificil de ler do que 03:07 minutos e segundos, formatar:

            if (segundosRestantes < 10) {
                sec = "0" + sec; //coersão de tipos
            }

            if (min < 10) {
                min = "0" + min;
            }

            // gerar o formato MM:SS
            countDiv.innerHTML = min + ":" + segundosRestantes;

            //condição final - para parar contador:
            if (sec > 0) {
                sec = sec - 1;
            } else {
                countDiv.innerHTML = "o tempo acabou!";
            }
        };

        //mecanismo para executar este codigo
        const countDown = setInterval(() => secpass(), 1000) //1s = 1000 ms

    })
});