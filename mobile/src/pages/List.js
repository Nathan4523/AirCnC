import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, SafeAreaView, ScrollView, AsyncStorage } from 'react-native';

import SpotList from '../components/SpotList';

import logo from '../assets/logo.png';

export default function List(){
    const [techs, setTechs] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storageTechs => {
            const techsArray = storageTechs.split(',').map(tech => tech.trim());
            setTechs(techsArray);
        })
    }, [])

    /**
     * SafeAreaView serve para trabalhar só na area segura
     * ou seja, somente atras da actionBar
     */ 

    return (
        <SafeAreaView style={styles.container}>
            <Image source={logo} style={styles.logo} />

            <ScrollView>
                {techs.map(tech => ( <SpotList key={tech} tech={tech} /> ))}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },

    logo: {
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 80
    },
});