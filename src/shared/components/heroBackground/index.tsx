import bgIcon from './assets/bg.png';
import { ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';

interface HeroBackgroundProps {
  children: React.ReactNode;
  height?: number
}

export default function HeroBackground({children, height}: HeroBackgroundProps) {
  return (
    <ImageBackground style={{
      height: height || 400,
      paddingTop: 15
    }} source={bgIcon}>
      <SafeAreaView style={{flex: 1}}>
        {children}
      </SafeAreaView>
    </ImageBackground>
  );
}
