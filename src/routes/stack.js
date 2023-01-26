import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SplasScreen from '@/containers/splash';

export default function StackNav() {
    const Stack = createNativeStackNavigator();

    const Auth = ()=>{

        return(
            <Stack.Navigator>
               <Stack.Screen name='Auth' component={Auth} options={{headerShown: false}} />
            </Stack.Navigator>
        )
    
    }

  return (
     <Stack.Navigator>
       <Stack.Screen name='Splash' component={SplasScreen} options={{headerShown: false}} />
     </Stack.Navigator>
  );


}


