import React from 'react';
import {StyleSheet, View} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ListItem } from 'react-native-elements';
import { Avatar } from 'react-native-paper';

export default ({ navigation }) => {
    const list = [
        {
            id: '0',
            name: 'Digiart',
            img: 'https://cdn.discordapp.com/attachments/831235610522026015/904775379653373952/digiart-arte-digital-2.png',
            endereço: 'R. Dr. Altíno Arantes, 761 - Centro',
            telefone: '(17) 3542-3314',
            facebook: 'pt-br.facebook.com/digiartinformaticanh',
            instagram: 'Não Possui',
            email: 'vendas@digiartinformatica.com.br',
            foto1: '',
            foto2: '',
            foto3: '',
        },
        {
            id: '1',
            name: 'DRT Eletrônicos e Informática',
            img: 'https://cdn.discordapp.com/attachments/831235610522026015/892746530367361114/image-removebg-preview.png',
            endereço: 'R. Manoel Paulino de Oliveira, 671',
            telefone: '(17) 3543-2986',
            facebook: 'pt-br.facebook.com/DRTpresentes/',
            instagram: 'www.instagram.com/drtpresentes/',
            email: 'drtpresentesnh@gmail.com',
            foto1: '',
            foto2: '',
            foto3: '',
        },
        {
            id: '2',
            name: 'System',
            img: 'https://cdn.discordapp.com/attachments/831235610522026015/902515746117144586/2Q.png',
            endereço: '852, R. Trajano Machado',
            telefone: '(17) 3542-2807',
            facebook: 'pt-br.facebook.com/systeminformaticanh/',
            instagram: 'www.instagram.com/systeminformatica_nh/',
            email: 'Não Possui',
            foto1: '',
            foto2: '',
            foto3: '',
        },
        {
            id: '3',
            name: 'PC Fire',
            img: 'https://cdn.discordapp.com/attachments/831235610522026015/892742669086912542/image-removebg-preview.png',
            endereço: 'Av. da Saudade, 163 - Jardim das Acácias',
            telefone: '(17) 98804-5038',
            facebook: 'pt-br.facebook.com/pcfireinformaticagamer/',
            instagram: 'Não Possui',
            email: 'pcfireinformaticanh@gmail.com',
            foto1: '',
            foto2: '',
            foto3: '',
        },
        {
            id: '4',
            name: 'MasterFast',
            img: 'https://cdn.discordapp.com/attachments/831235610522026015/892744125026299904/imagem_2021-09-29_090611-removebg-preview.png',
            endereço: 'R. Trajano Machado, 974 - Centro',
            telefone: '(17) 99215-5535',
            facebook: 'pt-br.facebook.com/MasterFastNh/',
            instagram: 'www.instagram.com/lojamasterfast/',
            email: 'ruannh2009@gmail.com',
            foto1: '',
            foto2: '',
            foto3: '',
        },
        {
            id: '5',
            name: 'PCell',
            img: 'https://cdn.discordapp.com/attachments/831235610522026015/892744996527165471/imagem_2021-09-29_090939-removebg-preview.png',
            endereço: 'R. Dom Pedro II, 583 - Vila Real',
            telefone: '(17) 99632-7405',
            facebook: 'pt-br.facebook.com/pcellassistenciaecelulares/',
            instagram: 'www.instagram.com/pcellassistencia/',
            email: 'igornh22@gmail.com',
            foto1: '',
            foto2: '',
            foto3: '',
        }
    ];
    return(
        <View style={styles.container}>
            {
         list.map((l, i) => (
      <ListItem key={i} bottomDivider
      friction={90} 
      tension={100} 
      activeScale={0.95}
      onPress={() => navigation.navigate('Loja', {
          name: l.name,
          img: l.img,
          endereço: l.endereço,
          telefone: l.telefone,
          facebook: l.facebook,
          instagram: l.instagram,
          email: l.email,
    })} 
      linearGradientProps={{
        colors: ['#2683DE', '#93BFDE'],
        start: { x: 1, y: 0 },
        end: { x: 0.2, y: 0 },
  }}
  ViewComponent={LinearGradient}
      >
        <Avatar.Image source={{uri: l.img}} size={40} style={{backgroundColor: 'transparent'}} />
        <ListItem.Content>
          <ListItem.Title>{l.name}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
         ))
            }
       </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: '10%',
        backgroundColor: '#93BFDE'
      },
    item: {
        backgroundColor: '#F4F3F3',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        borderRadius: 25,
        overflow: 'hidden',
        position: 'relative',
      },
    title: {
        fontSize: 32,
    },
    images: {
        flex: 0.5,
        width: null,
        height: null,
        resizeMode: 'contain',
    },

});