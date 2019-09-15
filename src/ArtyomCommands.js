
import * as Api from './api';

export default class ArtyomCommandsManager {

    
    // A classe ArtyomCommandsManager espera como argumento no construtor
    // uma instância já declarada de Artyom.js
    constructor (ArtyomInstance){
        this._artyom = ArtyomInstance;
    }
    
    // Execute o método loadCommands para injetar os métodos na instância do Artyom
    loadCommands(){
        let Artyom = this._artyom;

        // Carregar todos os comandos para Artyom
        return Artyom.addCommands([
            {
                indexes: ["quem é você?", "se apresente", "o que você é?", "se apresente para nós"],
                action: () => {
                    if (Artyom.isObeying()) {

                        Artyom.dontObey();

                        console.log("fala1")
                        Api.FALA_VOICE(1);

                        Artyom.say("Eu sou a Mirna, fui construída através de estudos de holografia. O meu objetivo é interagir com você da melhor forma possível. Porém eu não posso responder tudo, sou programada para receber comandos específicos, então não fique chateado se eu te deixar de ar algumas vezes. Vou te explicar mais sobre mim. Sou dividida em 3 partes, a primeira é uma biblioteca JS que é encarregada de reconhecer a sua voz e também de me fazer falar. A segunda parte é construída por um servidor feito em Node JS, que é o meu centralizador de comunicação interna, com ele eu posso me comunicar com a biblioteca JS e também com a minha última parte, que nada mais é do que esse corpinho bonito que está na sua frente. Minha apresentação é construída em Unity 3D, onde eu fico aguardando seus comandos para realizar uma ação.");
                        
                        setTimeout( function () {
                            console.log("fala2")
                            Api.FALA_VOICE(2);
                        }, 10000);

                        setTimeout( function () { 
                            console.log("fala3")
                            Api.FALA_VOICE(3);
                        }, 22000);

                        setTimeout( function () {
                            console.log("fala2")
                            Api.FALA_VOICE(2);
                        }, 34000);

                        setTimeout( function () { 
                            console.log("fala5")
                            Api.FALA_VOICE(5);
                        }, 43000);
                        
                        setTimeout( function () { 
                            console.log("fala4")
                            Api.FALA_VOICE(4);
                        }, 61000);

                        setTimeout( function () { 
                            console.log("1,12 minutos depois ...")
                            Artyom.obey();
                        }, 70000); // 1,12 minutos depois
                    }
                }
            },
            {
                indexes: ["Olá", "Oi", "Fala aí"],
                action: () => {

                    if (Artyom.isObeying()) {

                        Artyom.dontObey();

                        Api.OI_VOICE(Math.floor(Math.random() * 2) + 1  );

                        setTimeout( function() {
                            Artyom.say("E aí, como você está?");
                            Artyom.obey();
                        }, 1500);
                    }
                }
            },
            {
                indexes: ["bem e você?", "estou bem e você?"],
                action: () => {
                    if (Artyom.isObeying()) {

                        Artyom.dontObey();

                        Artyom.say("Estou ótima!");

                        setTimeout( function() {
                            Artyom.obey();
                        }, 1000);
                    }
                }
            },
            {
                indexes: ["tudo bem?"],
                action: () => {
                    if (Artyom.isObeying()) {

                        Artyom.dontObey();

                        Artyom.say("Estou ótima e você?");

                        setTimeout( function() {
                            Artyom.obey();
                        }, 1000);
                    }
                }
            },
            {
                indexes: ["você sabe dançar?", "dança", "dançar"],
                action: () => {

                    if (Artyom.isObeying()) {

                        Artyom.dontObey();

                        Api.DANCA_VOICE();
        
                        setTimeout( function() {
                            // Artyom.say("Eu só sei fazer isso");
                            Artyom.obey();
                        }, 2000);
                    }
                }
            },
            {
                indexes: ["você sabe lutar?", "luta", "lutar"],
                action: () => {

                    if (Artyom.isObeying()) {

                        Artyom.dontObey();

                        Api.LUTA_VOICE();
        
                        setTimeout( function() {
                            // Artyom.say("E aí ficou com medo?");
                            Artyom.obey();
                        }, 1000);
                    }
                }
            },
            {
                indexes: ["que dia é hoje?", "hoje é que dia?", "Que dia estamos?", "Qual a data de hoje?"],
                action: () => {
                    
                    if (Artyom.isObeying()) {

                        Artyom.dontObey();

                        let today = new Date();
                        let dd = String(today.getDate()).padStart(2, '0');
                        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
                        let yyyy = today.getFullYear();

                        if (mm === "01")
                                Artyom.say(`hoje é dia ${dd} de Janeiro de ${yyyy}`);
                        else if (mm === "02")
                            Artyom.say(`hoje é dia ${dd} de Fevereiro de ${yyyy}`);
                        else if (mm === "03")
                            Artyom.say(`hoje é dia ${dd} de Março de ${yyyy}`);
                        else if (mm === "04")
                            Artyom.say(`hoje é dia ${dd} de Abril de ${yyyy}`);
                        else if (mm === "05")
                            Artyom.say(`hoje é dia ${dd} de Maio de ${yyyy}`);
                        else if (mm === "06")
                            Artyom.say(`hoje é dia ${dd} de Junho de ${yyyy}`);
                        else if (mm === "07")
                            Artyom.say(`hoje é dia ${dd} de Julho de ${yyyy}`);
                        else if (mm === "08")
                            Artyom.say(`hoje é dia ${dd} de Agosto de ${yyyy}`);
                        else if (mm === "09")
                            Artyom.say(`hoje é dia ${dd} de Setembro de ${yyyy}`);
                        else if (mm === "10")
                            Artyom.say(`hoje é dia ${dd} de Outubro de ${yyyy}`);
                        else if (mm === "11")
                            Artyom.say(`hoje é dia ${dd} de Novembro de ${yyyy}`);
                        else if (mm === "12")
                            Artyom.say(`hoje é dia ${dd} de Dezembro de ${yyyy}`);
                        else
                            Artyom.say(`hoje é dia ${dd} de ${mm} de ${yyyy}`);

                        setTimeout( function() {
                            Artyom.obey();
                        }, 1000);
                    }
                }
            },
            {
                indexes: ["Repete comigo *", "Repita comigo *"],
                smart: true,
                action: (i, voice) => {

                    if (Artyom.isObeying()) {

                        Artyom.dontObey();

                        Artyom.say(voice);

                        setTimeout( function() {
                            Artyom.obey();
                        }, 1000);
                    }
                }
            },
            {
                indexes: ["Pula", "Pular", "Saltar"],
                action: () => {

                    if (Artyom.isObeying()) {

                        Artyom.dontObey();

                        Api.PULA_VOICE();

                        setTimeout( function() {
                            Artyom.obey();
                            Artyom.say("Mandei bem né?");
                        }, 3000);
                    }
                }
            },
            {
                indexes: ["Parabéns", "Muito bom Mirna"],
                action: () => {

                    if (Artyom.isObeying()) {

                        Artyom.dontObey();
                        
                        Api.YEAH_VOICE();

                        setTimeout( function() {
                            Artyom.say("Obrigado");
                            Artyom.obey();
                        }, 2000);
                    }
                }
            },
        ]);
    }
}