import React, { Component } from "react";
import HomeScreen from "../HomeScreen/HomeScreen";
import SideBar from "../componentes/SideBar/SideBar";
import MisReservas from '../MisReservas/MisReservas'
import Favoritos from './Favoritos'
import Configuracion from '../Configuracion/Configuracion.js'
import Acerca from '../Acerca/Acerca'
import Invitar from '../Invitar/Invitar'
import Billetera from '../Billetera/Billetera'
import Perfil from '../Perfil/Perfil'
import Cards from '../Tarjetas/Cards'
import { createDrawerNavigator, createAppContainer } from "react-navigation";
const HomeScreenRouter = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
    'Mis Reservas' : { screen: MisReservas},
    'Favoritos' : {screen: Favoritos},
    'Configuraciones' : { screen: Configuracion},
    'Acerca' : {screen:Acerca},
    'Invitar amigos' : {screen:Invitar},
    'Billetera' : {screen:Billetera},
    'Perfil':{screen:Perfil},
    'Tarjeta': {screen:Cards}
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
const AppContainer = createAppContainer(HomeScreenRouter);
export default AppContainer;