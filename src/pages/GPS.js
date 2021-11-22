import React, { useState, UseEffect } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import MapView, { Marker } from 'react-native-maps'; //Maps
import * as Location from 'expo-location'; //Location 
import { useEffect } from 'react';


export default function App() {


  var [local, setLocal] = useState({

  });

    useEffect(() => {
      //Pegar a localização do usuario
      Location.installWebGeolocationPolyfill()
      navigator.geolocation.getCurrentPosition(posicao => {
        console.log(posicao.coords);

      setLocal({
        latitude: posicao.coords.latitude,
        longitude: posicao.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    });
  }, [] 
);


  return (
      <View style={styles.container}> 
      <MapView style={styles.mapView} zoomEnabled={true}
      region={local} showsUserLocation
      showsPointsOfInterest={false}>

      <Marker
      //Marcador no mapa 
      coordinate={{
        longitude: -49.22280013561249,
        latitude: -21.468939745173763,      
      }}
      //título - icon
      title="Digiart Informática"
/>

      
         <Marker
        //Marcador no mapa 
        coordinate={{
        longitude: -49.21999134604748,
        latitude:  -21.46932452012976, 
        }}
        //título - icon
        title="Support Informática"
/>


          <Marker
        //Marcador no mapa 
        coordinate={{
        longitude: -49.22271158900847,
        latitude:  -21.46622519424641,       
        }}
        //título - icon
        title="System Informática"
/>

            
          <Marker
        //Marcador no mapa 
        coordinate={{
        longitude: -49.21679827672686,
        latitude:  -21.471643175607248,      
        }}
        //título - icon
        title="PCFire"
/>

             
          <Marker
        //Marcador no mapa 
        coordinate={{
        longitude: -49.22355251537974,
        latitude:  -21.465627379036928,        
        }}
        //título - icon
        title="MasterFast Assistência Técnica"
/>
             
          <Marker
        //Marcador no mapa 
        coordinate={{
        longitude: -49.22737822576718,
        latitude:  -21.476860991947436,        
        }}
        //título - icon
        title="PCell Solução em Tecnologia"
/>

            
    

      </MapView>
    </View>
  );
}

//Estilos
const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  mapView: {
    width: Dimensions.get('window').width,
    height: '100%',
  }

});
