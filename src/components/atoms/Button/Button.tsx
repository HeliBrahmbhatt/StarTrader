// src/components/atoms/ButtonAtom.tsx
import React from 'react';
import {TouchableOpacity, Text, ViewStyle} from 'react-native';
import {styles} from './styles';

interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
}

const Button: React.FC<ButtonProps> = ({title, onPress, style}) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
