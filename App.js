import { Text, SafeAreaView, StyleSheet, Image, TextInput, Button, View} from 'react-native';
import { React, useEffect } from 'react';
import { useVideoPlayer, VideoView } from 'expo-video';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// You can import supported modules from npm
import { Card } from 'react-native-paper';

const videoSource = require('./assets/dev999.mp4');
function VideoDev() {
  const player = useVideoPlayer(videoSource, player => {
    player.loop = true;

  });

  useEffect(() => {
    if (player) {
      player.play();
    }
  }, [player]);
  
  return (
    <View style={styles.videoContainer}>
      <VideoView style={styles.video} player={player} />
    </View>
  );
}

// or any files within the Snack
const d = new Date();
let hour = d.getHours();

const Dev = ({navigation})=>{
  return(
    <View>
      <Text style={styles.paragraph}>
        Menu Dev Test
      </Text>
      <VideoDev/>
      <Text>{'\n'}</Text>
      <Button onPress = {()=>navigation.navigate(Login)} title = 'Tela de Login'/>
      <Button onPress = {()=>navigation.navigate(Home)} title = 'Tela de Home'/>
      <Button onPress = {()=>navigation.navigate(ADM)} title = 'Tela de ADM'/>
      <Button onPress = {()=>navigation.navigate(Prof)} title = 'Tela de Professor'/>
    </View>
  )}

const Home = ()=>{return(<Text>Home</Text>)}
const Prof = ()=>{return(<Text>Prof</Text>)}
const ADM = ()=>{return(<Text>ADM</Text>)}
const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require('./assets/logo.png')} />
      <Text style={styles.paragraph}>
        PALJA - Programa de Alfabetização e Letramento de Jovens e Adultos{'\n'}{'\n'}
        {hour < 12 ? (<Text>Bom Dia!</Text>):( hour < 18 ? (<Text>Boa Tarde!</Text>):(<Text>Boa Noite!</Text>))}
      </Text >
            <Button title="ENTRAR COM EMAIL" icon="">
      </Button>
      <Text style={styles.paragraph}>
      ----------------------- ou -----------------------
      </Text>
      <Text style={styles.common_text}>
        Matrícula
      </Text>
      <TextInput style={styles.input}>
      </TextInput>
      <Text style={styles.hyperlink}>
        Não sei a matrícula
      </Text>
      <Text style={styles.common_text}>
        Senha
      </Text>
      <TextInput style={styles.input}>
      </TextInput>
      <Text style={styles.hyperlink}>
        Esqueci minha senha/Cadastrar primeira senha
      </Text>
      <Button title="Entrar">
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 12,
    textAlign: 'center',
  },
  common_text: {
    fontSize: 15,
    marginBottom: 7,
    color: "#000000",
    textAlign: "left",
  },
  hyperlink:{
    fontSize: 14,
    margin: 7,
    color: "#0000ff",
    textAlign: "right",
  },
  input: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor:"#000000",
    height: 38,
    backgroundColor: "#e0f0ff"
  },
    logo: {
    height: 100,
    width: 346,
    resizeMode: "contain",
    justifyContent: 'center',
    position: 'center',
  },
    videoContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
    video: {
    width: 300,
    height: 150,
  },
});

const App = () => {
  return (
      <NavigationContainer>		
        <Stack.Navigator>
          <Stack.Screen name="Dev" component={Dev} />
          <Stack.Screen name="Login" component={Login}/>      	
        </Stack.Navigator>    
      </NavigationContainer>)
  };
  
export default App
