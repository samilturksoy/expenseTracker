import { styles } from './styles';
import Typography from '../../../../shared/components/Typography';
import { normalize } from '../../../../shared/helpers';
import color from '../../../../shared/constans/colors';
import { FONT } from '../../../../shared/constans/fonts';
import { TouchableOpacity, View } from 'react-native';
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
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        
        <TouchableOpacity style={{position: 'relative'}}>
        
          <Typography customStyle={{
            color: color.neutral.white,
            textAlign: 'center',
            fontSize: normalize(20),
            fontFamily: FONT.BOLD
          }} value="Expense Ekle " />
         
        </TouchableOpacity>
      </View>
    </View>
  );
}
