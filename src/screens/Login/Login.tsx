import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTranslation} from 'react-i18next';

const Login = () => {
  const {t} = useTranslation();
  return (
    <SafeAreaView>
      <View>
        <Text>{t('date')}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;
