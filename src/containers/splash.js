import React from 'react';
import { View, Text } from 'react-native';
import { FONT_FAMILY } from '@/constants/fontFamily';

const SplasScreen =()=> {
  return (
    <View>
      <Text style={{
        fontFamily: FONT_FAMILY.InterExtraBold,
        textAlign:'center',
        fontSize:20,
        }}>
            Splash
            </Text>
     </View>
  );
}
export default SplasScreen;
