import React from 'react';
import {StyleSheet, View, Image, Linking} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Avatar, Title, Text, TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Swiper from 'react-native-swiper/src';

export default ({ navigation, route }) => {
  const name = route.params.name;
  const img = route.params.img;
  const endereço = route.params.endereço;
  const telefone = route.params.telefone;
  const facebook = route.params.facebook;
  const instagram = route.params.instagram;
  const email = route.params.email;

    return (
        <LinearGradient colors={['#93BFDE', '#ffffff']} style={styles.container}>
        <View style={styles.shopInfo}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image
            style={{backgroundColor:'#ffffff',}} 
            source={{
              uri: img,
            }}
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop:25,
              marginBottom: 5,
            }]}>{name}</Title>
          </View>
        </View>
      </View>
      <View style={styles.shopInfo}>
        <View style={styles.row}>
          <Icon name="map-marker" size={20} color={'crimson'}/>
          <Text style={{marginLeft: 20}}>{endereço}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" size={20} color={'gray'}/>
          <Text style={{marginLeft: 20}} onPress={() => Linking.openURL('tel:'+telefone)}>{telefone}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" size={20} color={'crimson'}/>
          <Text style={{marginLeft: 20}} onPress={() => Linking.openURL('mailto:'+email)}>{email}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="facebook" size={20} color={'blue'}/>
          <Text style={{marginLeft: 20}} onPress={() => Linking.openURL('http://'+facebook)} >{facebook}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="instagram" size={20} color={'mediumorchid'}/>
          <Text style={{marginLeft: 20}} onPress={() => Linking.openURL('http://'+instagram)} >{instagram}</Text>
        </View>
        </View>

        <Swiper showsButtons={true} >
          <Image source={{uri: 'https://scontent.fsjp5-1.fna.fbcdn.net/v/t31.18172-8/1275137_501679779928166_1428974402_o.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=qY9b3rIvD-oAX8aMcR6&_nc_ht=scontent.fsjp5-1.fna&oh=f064939d35271e8fd5aaa2fdd2a155c0&oe=61AD0F65'}} style={styles.swiperImage}/>
          <Image source={{uri: 'https://scontent.fsjp5-1.fna.fbcdn.net/v/t1.18169-9/554619_501678079928336_690518785_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=174925&_nc_ohc=r5MYp_B0Y-gAX9JbUoD&_nc_ht=scontent.fsjp5-1.fna&oh=29704a5305197a6ebb3eef7450ba0eb4&oe=61AD5A36'}} style={styles.swiperImage}/>
          <Image source={{uri:'https://scontent.fsjp5-1.fna.fbcdn.net/v/t31.18172-8/1269899_501677596595051_119581295_o.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=ctwGuCVqEG0AX-mI67q&_nc_ht=scontent.fsjp5-1.fna&oh=4ebb99a982919f2b6f996f0f64012139&oe=61AEE5EE'}} style={styles.swiperImage}/>
        </Swiper>
        
        <View style={styles.menuWrapper}>
          <TouchableRipple>
            <View style={styles.menuItem}>
              <Icon name="map-marker" color="#FF6347" size={25}/>
              <Text style={styles.menuItemText} onPress={() => navigation.navigate('GPS')}>Localizar no Mapa</Text>
            </View>
          </TouchableRipple>
        </View>
        </LinearGradient>
      );
    };
const styles = StyleSheet.create({
    container: {
      paddingTop: '5%',
      flex: 1,
    },
    shopInfo: {
      paddingHorizontal: 30,
      marginBottom: 25,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      fontWeight: '500',
    },
    row: {
      flexDirection: 'row',
      marginBottom: 15,
    },
    infoBoxWrapper: {
      borderColor: '#2683DE',
      borderBottomWidth: 1,
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 100,
    },
    infoBox: {
      flexDirection: 'row',
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    menuWrapper: {
      marginBottom:15,
    },
    menuItem: {
      flexDirection: 'row',
      paddingVertical: 15,
      paddingHorizontal: 30,
    },
    menuItemText: {
      marginLeft: 20,
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 26,
    },
    swiperImage: {
      flex:1,
      resizeMode:'contain',
    },
  });

