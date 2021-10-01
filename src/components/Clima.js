import React, { useState, useEffect, Fragment } from 'react';
import { StyleSheet, View, Text , Image, ScrollView} from 'react-native';
import { Card } from 'react-native-elements';

const Clima = ({ resultados }) => {

    const imagenClima=(comparar)=>{
        let img="";
        switch (comparar) {
          case "Rain":
            img=require("../img/Rain.png");
            break;
          case "Clouds":
            img=require("../img/Clouds.png");
            break;
          case "drizzle":
            img=require("../img/drizzle.png");
            break;
            case "Clear":
              img=require("../img/Clear.png");
              break;
          default:
            img=require("../img/Clouds.png");
            break;
        }
      return img;
      }


    return (
      
    <Card>
        <Card.Title>Clima en ciudades de San Salvador</Card.Title>
        <Card.Divider />
    {resultados.map(
        resultado => (
        <Fragment key={resultado?.id}>
            <Card >
                <View style={{ justifyContent: 'center' }}>
                <Card.Title>{resultado?.name}</Card.Title>
                    <View><Text><Text style={{fontWeight:'bold'}}>Clima: </Text>{resultado?.weather?.[0]?.main}</Text></View>
               <Image
               style={{width:100, height:100}}
               source={imagenClima(resultado?.weather?.[0]?.main)}/>
                    <Text style={{fontWeight:'bold', fontSize:15}}>- Temperaturas - </Text>
                    <Text><Text style={{fontWeight:'bold'}}>Sensacion termica:</Text> {resultado?.main?.feels_like} K</Text>
                    <Text><Text style={{fontWeight:'bold'}}>Temperatura minima:</Text> {resultado?.main?.temp_min} K</Text>
                    <Text><Text style={{fontWeight:'bold'}}>Temperatura maxima:</Text> {resultado?.main?.temp_max+1} K</Text>
                    <Text><Text style={{fontWeight:'bold'}}>Humedad:</Text> {resultado?.main?.humidity}</Text>
                    <Text style={{fontWeight:'bold', fontSize:15}}> - Viento - </Text>
                    <Text><Text style={{fontWeight:'bold'}}>Velocidad del Viento:</Text> {resultado?.wind?.speed}</Text>
                    
                </View>
                
            </Card>
            <Card.Divider />
        </Fragment>
        ))}
      </Card>
    )
      
 };

export default Clima;