import { styles } from './styles';
import Typography from '../../../../shared/components/Typography';
import {  View } from 'react-native';
import React from 'react';


export default function NavBar() {

  return (
    <View style={styles.container}>
      <View>
        <Typography
          customStyle={{
            color: 'rgba(255, 255, 255, 0.5)'
          }}
          value="Kontrollü Harca, Keyifle Yaşa!," />
        <Typography
          customStyle={styles.nameUser}
          value="Şamil TÜRKSOY" />
      </View>
     
    </View>
  );
}
