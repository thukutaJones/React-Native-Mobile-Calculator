import { Stack, SplashScreen } from 'expo-router';

const RootLayout = () => {

  SplashScreen.hideAsync();

  return (
    <Stack>
        <Stack.Screen
            name='index'
            options={{
                headerShown: false
            }}
        />
    </Stack>
  )
}

export default RootLayout;