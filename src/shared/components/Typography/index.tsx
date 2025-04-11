import { createStyles } from './styles';
import useDarkMode from '../../hooks/useDarkMode';
import React from 'react';
import { Text, TextStyle, StyleProp } from 'react-native';
import { GestureResponderEvent } from 'react-native/Libraries/Types/CoreEventTypes';

interface TypographyProps {
  value: React.ReactNode
  customStyle?: StyleProp<TextStyle>
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

export default function Typography({
  value,
  customStyle,
  onPress
}: TypographyProps) {

  const {isDarkMode} = useDarkMode();

  const styles = createStyles(isDarkMode);

  return (
    <Text onPress={onPress} style={[styles.text, customStyle]}>{value}</Text>
  );
}

