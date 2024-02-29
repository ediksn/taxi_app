import React, { Component} from 'react'
import { Modal, View, Dimensions, StyleSheet} from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem, Input } from "native-base";
import store from '../../redux/store'
import {server} from '../Api'
export default class Logout extends Component{
    constructor(){
        super()
    }
    
    render(){
        return(
        <Modal
          visible={this.props.visible}
          transparent={true}
        >
          <View style={{
            flex:1,
            flexDirection:'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor:'#000000c2'}}>
            <View 
              style={{
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor:'#fff',
                borderRadius: 25,
                height:Dimensions.get('window').height / 3.5,
                width:Dimensions.get('window').width - 40
              }}
            >
                <View style={estilo.titulo}>
                    <Icon
                        name='time'
                        style={{color:'white'}}
                    />
                    <Text style={estilo.text}>
                      Atención
                    </Text>
                </View>
                <View style={{justifyContent:'flex-start'}}>
                    <View style={estilo.razon}>
                        <Text style={{fontSize:20, textAlign:'center'}}>¿Seguro que desea salir?</Text>
                    </View>
                </View>
                <View style={{
                    flexDirection:'row', 
                    justifyContent:'space-around', 
                    width:Dimensions.get('window').width*0.8,
                    marginBottom:10
                }}>
                    <Button 
                        onPress={()=>{
                            this.props.setmensaje(false)
                        }}
                        rounded
                        dark>
                            <Text style={{color:'white', textAlign:'center'}}>Cancelar</Text>
                    </Button>
                    <Button 
                        onPress={()=>{
                            this.props.setmensaje(false)
                            this.props.logout()
                        }}
                        rounded
                        danger>
                            <Text style={{color:'white', textAlign:'center'}}>Aceptar</Text>
                    </Button>
                </View>
            </View>
          </View>
        </Modal>
        )
    }
}
const estilo = StyleSheet.create({
  
    text: {
        color:'white'
    },
    titulo:{
        width:Dimensions.get('window').width - 40,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        backgroundColor: '#E84546',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        flexDirection:'row'
    },
    razon:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    boton_1:{
        marginTop:1,
        height:30,
        width:Dimensions.get('window').width*0.3,
        backgroundColor:'#676767'
    },
    boton_2:{
        marginTop:1,
        height:30,
        justifyContent:'center',
        width:Dimensions.get('window').width*0.3
    },
    text_env:{

    },
    botones:{
        flexDirection:'row', 
        justifyContent:'center', 
        width:Dimensions.get('window').width*0.7
    },
    icono:{
        color:'black',
        fontSize:30
    },
    icon:{
        color:'green',
        fontSize:30
    }
})