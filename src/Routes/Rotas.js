import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

import Busca from '../Pages/Busca';
import Login from '../Pages/Login';
import Home from '../Pages/Home';
import Cadastro from '../Pages/Cadastro';
import Detalhe from '../Pages/Detalhe';
import CriarObservacao from'../Pages/CriarObservacao';
 


const Tab = createBottomTabNavigator();

export default function Rotas() {

    const { logado } = useContext(AuthContext);

    if (!logado) {
        return (<Login />)
    }

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: '#191919',
                    },
                    tabBarActiveTintColor: "white"
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={size} />
                        ),
                    }}

                />
                <Tab.Screen
                    name="Cadastro"
                    component={Cadastro}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="account-multiple" color={color} size={size} />
                        ),
                    }}

                />
                <Tab.Screen
                    name="CriarObservacao"
                    component={CriarObservacao}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="credit-card-search" color={color} size={size} />
                        ),
                    }}
                />                
                <Tab.Screen
                    name="Busca"
                    component={Busca}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="magnify" color={color} size={size} />
                        ),
                    }}

                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}