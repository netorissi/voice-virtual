
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
                indexes: ["Fale sobre a amazônia", "Me conte"],
                action: async () => {
                    if (Artyom.isObeying()) {

                        await Artyom.dontObey();

                        console.log("fala1")
                        Api.VOICE(1);

                        setTimeout(() => Artyom.obey(), 37000);
                    }
                }
            },
            {
                indexes: ["Quero saber mais", "detalhes"],
                action: async () => {

                    if (Artyom.isObeying()) {

                        await Artyom.dontObey();

                        console.log("fala3")
                        Api.VOICE(3);

                        setTimeout(() => Artyom.obey(), 29000);
                    }
                }
            },
            {
                indexes: ["Como acabar com as queimadas?", "como acabar com isso?"],
                action: async () => {

                    if (Artyom.isObeying()) {

                        await Artyom.dontObey();

                        console.log("fala2")
                        Api.VOICE(2);

                        setTimeout(() => Artyom.obey(), 40000);
                    }
                }
            },
            // {
            //     indexes: ["da uma volta", "virar", "gira"],
            //     action: async () => {

            //         if (Artyom.isObeying()) {

            //             await Artyom.dontObey();

            //             Api.ROTATE_VOICE();
                        
            //             Artyom.say("vou ficar zonza");
            //             await Artyom.obey();
            //         }
            //     }
            // },
            // {
            //     indexes: ["que dia é hoje?", "hoje é que dia?", "Que dia estamos?", "Qual a data de hoje?"],
            //     action: () => {
                    
            //         if (Artyom.isObeying()) {

            //             Artyom.dontObey();

            //             let today = new Date();
            //             let dd = String(today.getDate()).padStart(2, '0');
            //             let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            //             let yyyy = today.getFullYear();

            //             if (mm === "01")
            //                     Artyom.say(`hoje é dia ${dd} de Janeiro de ${yyyy}`);
            //             else if (mm === "02")
            //                 Artyom.say(`hoje é dia ${dd} de Fevereiro de ${yyyy}`);
            //             else if (mm === "03")
            //                 Artyom.say(`hoje é dia ${dd} de Março de ${yyyy}`);
            //             else if (mm === "04")
            //                 Artyom.say(`hoje é dia ${dd} de Abril de ${yyyy}`);
            //             else if (mm === "05")
            //                 Artyom.say(`hoje é dia ${dd} de Maio de ${yyyy}`);
            //             else if (mm === "06")
            //                 Artyom.say(`hoje é dia ${dd} de Junho de ${yyyy}`);
            //             else if (mm === "07")
            //                 Artyom.say(`hoje é dia ${dd} de Julho de ${yyyy}`);
            //             else if (mm === "08")
            //                 Artyom.say(`hoje é dia ${dd} de Agosto de ${yyyy}`);
            //             else if (mm === "09")
            //                 Artyom.say(`hoje é dia ${dd} de Setembro de ${yyyy}`);
            //             else if (mm === "10")
            //                 Artyom.say(`hoje é dia ${dd} de Outubro de ${yyyy}`);
            //             else if (mm === "11")
            //                 Artyom.say(`hoje é dia ${dd} de Novembro de ${yyyy}`);
            //             else if (mm === "12")
            //                 Artyom.say(`hoje é dia ${dd} de Dezembro de ${yyyy}`);
            //             else
            //                 Artyom.say(`hoje é dia ${dd} de ${mm} de ${yyyy}`);

            //             setTimeout( function() {
            //                 Artyom.obey();
            //             }, 1000);
            //         }
            //     }
            // },
            // {
            //     indexes: ["Repete comigo *", "Repita comigo *"],
            //     smart: true,
            //     action: (i, voice) => {

            //         if (Artyom.isObeying()) {

            //             Artyom.dontObey();

            //             Artyom.say(voice);

            //             setTimeout( function() {
            //                 Artyom.obey();
            //             }, 1000);
            //         }
            //     }
            // }
        ]);
    }
}