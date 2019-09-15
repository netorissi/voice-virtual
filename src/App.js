import React, { Component } from 'react';
import Artyom from 'artyom.js';
import ArtyomCommandsManager from './ArtyomCommands.js';
const Mirna = new Artyom();

const config = {
    // name: "Mirna",
    lang: "pt-PT",
    debug: true,
    continuous: true,
    soundex: true,
    listen: true
};

export default class App extends Component {
    
    constructor (props, context) {
        super(props, context);

        this.startAssistant = this.startAssistant.bind(this);
        this.stopAssistant = this.stopAssistant.bind(this);

        let CommandsManager = new ArtyomCommandsManager(Mirna);
        CommandsManager.loadCommands();

        this.startAssistant();
    }

    startAssistant() {

        console.log("Artyom succesfully started !");

        Mirna.initialize(config).then(() => {
            
            console.log(Mirna.getAvailableCommands());

            Mirna.sayRandom(["ouvindo", "ativada"], {
                onStart: () => {
                    Artyom.fatality();
                },
                onEnd: () => {
                    Mirna.initialize(config);
                }
            });

        })
        .catch((err) => {
            console.error("Deu Ruim: ", err);
        });
    }

    stopAssistant() {

        Mirna.fatality().then(() => {
            console.log("Mirna foi parado");
            
        })
        .catch((err) => {
            console.error("Deu Ruim: ", err);
        });
    }

    render() {
        return (
            <div>
                <h1>Welcome to Mirna Assistant</h1>

                <p>In this very basic assistant, you can say hello and ask for some reports e.g `Generate report of April of this year`</p>

                <input type="button" value="Start Artyom" onClick={this.startAssistant}/>
                <input type="button" value="Stop Artyom" onClick={this.stopAssistant}/>
            </div>
        )
    }
}

