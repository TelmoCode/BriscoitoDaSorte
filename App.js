import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
    } from 'react-native';


class App extends Component {

    
    constructor(props) {
        super(props);
        this.state = {

            textoFrase: 'Quebre o biscoito e veja sua sorte',
            img: require('./src/biscoito.png')
        };

        this.quebrarBiscoito = this.quebrarBiscoito.bind(this);
        this.novoBiscoito = this.novoBiscoito.bind(this);

        this.frases = [

            'Siga os bons e aprenda com eles.', 
            'O bom-senso vale mais do que muito conhecimento.', 
            'O riso é a menor distância entre duas pessoas.', 
            'Deixe de lado as preocupações e seja feliz.',
            'Realize o óbvio, pense no improvável e conquiste o impossível.',
            'Acredite em milagres, mas não dependa deles.',
            'A maior barreira para o sucesso é o medo do fracasso.'
        ];
    }

    quebrarBiscoito(){

        let numeroAleatorio = Math.floor(Math.random() * this.frases.length)

        this.setState({
            textoFrase: this.frases[numeroAleatorio],
            img: require('./src/biscoitoAberto.png')
        })

    }

    novoBiscoito(){
        this.setState({

            textoFrase: 'Quebre o biscoito e veja sua sorte',
            img: require('./src/biscoito.png')
        })
    }

    render() {
        return (
            <View style={styles.container}>

                <Image
                    style={styles.img}
                    source={this.state.img}                   
                />

                <Text style={styles.txt}>{this.state.textoFrase}</Text>

                <TouchableOpacity style={styles.btn} onPress={this.quebrarBiscoito}>
                    <View style={styles.btnArea}>
                        <Text style={styles.btntext}>Quebrar biscoito</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={this.novoBiscoito}>
                    <View style={styles.btnArea}>
                        <Text style={styles.btntext}>Novo Biscoito</Text>
                    </View>
                </TouchableOpacity>
   
            </View>
        )
    }
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"  
    },

    txt:{
        fontSize: 20,
        color: "#dd7d22",
        fontStyle: "italic",
        margin:30,
        textAlign:"center"
    },

    img: {
        width: 250,
        height: 250,
    },

    btn:{
        width: 250,
        height: 50,
        borderWidth:2,
        borderColor:"#dd7d22",
        borderRadius:25,
        margin:10
        

    },

    btnArea:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    btntext:{

        color: "#dd7d22",
        textAlign:"center",       
        fontWeight:"bold",
        fontSize:18
        
      


    }
})

export default App;
