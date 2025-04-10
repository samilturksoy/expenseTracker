import {createStyles} from './style';
import NavBar from './Components/navBar';
import Typography from '../../shared/components/Typography';
import color from '../../shared/constans/colors';
import useDarkMode from '../../shared/hooks/useDarkMode';
import HeroBackground from '../../shared/components/heroBackground';
import Balance from '../../shared/components/balance/';
import React from 'react';
import { View ,ScrollView} from 'react-native';

const Home = () => {
  const {isDarkMode} = useDarkMode();
  const styles = createStyles(isDarkMode);

  return (
    
    <ScrollView bounces={false} bouncesZoom={false} showsVerticalScrollIndicator={false} style={{flex: 1, backgroundColor: color.main.blue}}>
      <HeroBackground>
        <NavBar />
        <Balance />
      </HeroBackground>
      <View style={styles.body}>
        <Typography
          customStyle={styles.title}
          value="Popular" />
      </View>

    </ScrollView>
      
   
  );
};

export default Home;
