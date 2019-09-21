
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
                indexes: ["amazônia", "floresta", "fogo", "apresenta"],
                action: async () => {
                    if (Artyom.isObeying()) {

                        await Artyom.dontObey();

                        console.log("fala1")
                        Api.FALA_VOICE1();

                        setTimeout( () =>
                            Artyom.say("Nos últimos 20 anos já foram devastados 436 mil quilômetros quadrados, que equivale a 4 vezes e meia a área de portugal. Especialistas apontam que nesse ritmo a floresta vai entrar em colapso entre 10 e 20 anos, o agro negócio e a especulação fundiária são as principais ameaças, os incêndios também estão destruindo o bioma. É uma situação alarmante já que além de toda biodiversidade, a Amazônia concentra cerca de 20% de toda água doce do planeta e é importante pra regulação climática e pra remoção dos gases do efeito estufa. As futuras gerações correm o risco de não conhecer a Amazônia. Vamos ajudar a Amazônia pois ela pede socorro!"), 
                        1000);

                        await Artyom.obey();
                    }
                }
            },
            {
                indexes: ["Pula", "Pular", "Saltar"],
                action: async () => {

                    if (Artyom.isObeying()) {

                        await Artyom.dontObey();

                        Api.PULA_VOICE();
                        Artyom.say("uopa");

                        await Artyom.obey();
                    }
                }
            },
            {
                indexes: ["você sabe dançar?", "dança", "dançar"],
                action: async () => {

                    if (Artyom.isObeying()) {

                        await Artyom.dontObey();

                        Api.DANCA_VOICE();
                        Artyom.say("Eu só sei fazer isso");

                        await Artyom.obey();
                    }
                }
            },
            {
                indexes: ["da uma volta", "virar", "gira"],
                action: async () => {

                    if (Artyom.isObeying()) {

                        await Artyom.dontObey();

                        Api.ROTATE_VOICE();
                        
                        Artyom.say("vou ficar zonza");
                        await Artyom.obey();
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
                indexes: ["Parabéns", "Muito bom"],
                action: () => {

                    if (Artyom.isObeying()) Artyom.say("Obrigada");
                }
            },
        ]);
    }
}