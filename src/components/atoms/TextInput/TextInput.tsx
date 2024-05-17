import React from 'react';
import {
  TextInput as RNTextInput,
  TextInputProps,
  View,
  Text,
} from 'react-native';
import makeStyle from './styles';
import {useTheme} from 'react-native-paper';

interface Props extends TextInputProps {
  label?: string;
  errorMessage?: string;
  onFocus?: () => void;
}

const TextInput: React.FC<Props> = ({
  label,
  errorMessage,
  onFocus,
  ...rest
}) => {
  const theme = useTheme();
  const styles = makeStyle(theme);

  return (
    <View style={styles.container}>
      <RNTextInput style={styles.input} onFocus={onFocus} {...rest} />
      {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
    </View>
  );
};

export default TextInput;
