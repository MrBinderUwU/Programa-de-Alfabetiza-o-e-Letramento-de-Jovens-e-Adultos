import { Text, SafeAreaView, StyleSheet, Image, TextInput, Button, View, TouchableOpacity, ScrollView} from 'react-native';
import { React, useEffect,useState } from 'react';
import { useVideoPlayer, VideoView } from 'expo-video';
import { MaterialIcons } from '@expo/vector-icons';
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

const optionsProf = [
  { id: 1, icon:"how-to-reg", option: "Realizar Chamada", screen:"realizar_chamada"},
  { id: 2, icon:"note-add", option: "Adicionar Conteúdo"},
  { id: 3, icon:"calendar-month", option: "Criar Turma"},
  { id: 4, icon:"calendar-month", option: "Criar Aluno"},
  { id: 5, icon:"person-add", option: "Adicionar Aluno"},
];

const optionsHome = [
  { id: 1, icon:"description", option: "Ver Conteúdo"},
  { id: 2, icon:"calendar-month", option: "Ver Turma"},
  { id: 3, icon:"send", option: "Enviar Trabalho"},
  { id: 4, icon:"settings", option: "Configurações", screen:"config"},
];
// https://fonts.google.com/icons

const CardOptions = ({ icon, option, onPress}) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <MaterialIcons name={icon} size={24}/>
    <Text style={styles.nomeButtons}>{option}</Text>
  </TouchableOpacity>
);

const Dev = ({navigation})=>{
  return(
    <View>
      <Text style={styles.paragraph}>
        Menu Dev Test
      </Text>
      <VideoDev/>
      <Text>{'\n'}</Text>
      <Button onPress = {()=>navigation.navigate(Login)} title = 'Tela de Login'/>
      <Button onPress = {()=>navigation.navigate(Home)} title = 'Tela de Menu Principal'/>
      <Button onPress = {()=>navigation.navigate(ADM)} title = 'Tela de ADM'/>
      <Button onPress = {()=>navigation.navigate(Prof)} title = 'Tela de Professor'/>
      <Button onPress = {()=>navigation.navigate(LoginEmail)} title = 'Tela de Login por email'/>
    </View>
  )}

const Home = ({navigation})=>{
  return(
    <View style={styles.containerButtons}>
    {optionsHome.map((item) => (
      <CardOptions
        key={item.id}
        icon={item.icon}
        option={item.option}
      />
    ))}
    <Button onPress = {()=>navigation.navigate(Login)} title="Deslogar"/>
    </View>
  )}

const Prof = ()=>{
  return (
    <View style={styles.containerButtons}>
    {optionsProf.map((item) => (
      <CardOptions
        key={item.id}
        icon={item.icon}
        option={item.option}
      />
    ))}
    </View>
  )}

const ADM = ()=>{return(<Text>ADM</Text>)}

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require('./assets/logo.png')} />
      <Text style={styles.paragraph}>
        PALJA - Programa de Alfabetização e Letramento de Jovens e Adultos{'\n'}{'\n'}
        {hour < 12 ? (<Text>Bom Dia!</Text>):( hour < 18 ? (<Text>Boa Tarde!</Text>):(<Text>Boa Noite!</Text>))}
      </Text >
            <Button onPress = {()=>navigation.navigate(LoginEmail)} title="Entrar com Email">
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
      <Button onPress = {()=>navigation.navigate(Home)} title="Entrar">
      </Button>
    </SafeAreaView>
  );
}

const LoginEmail = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require('./assets/logo.png')} />
      <Text style={styles.paragraph}>
        PALJA - Programa de Alfabetização e Letramento de Jovens e Adultos{'\n'}{'\n'}
        {hour < 12 ? (<Text>Bom Dia!</Text>):( hour < 18 ? (<Text>Boa Tarde!</Text>):(<Text>Boa Noite!</Text>))}
      </Text>
      <Text style={styles.common_text}>
        Email
      </Text>
      <TextInput style={[styles.input, { marginBottom: 20 }]}>
      </TextInput>
      <Text style={styles.common_text}>
        Senha
      </Text>
      <TextInput style={styles.input}>
      </TextInput>
      <Text style={styles.hyperlink}>
        Esqueci minha senha/Cadastrar primeira senha
      </Text>
      <Button onPress = {()=>navigation.navigate(Home)} title="Entrar">
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
    backgroundColor: "#e0f0ff",
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
    containerButtons: { padding: 20 },
    card: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8
  },
    nomeButtons: { fontSize: 16, fontWeight: 'bold', paddingTop: 12, },
});

const App = () => {
  return (
      <NavigationContainer>		
        <Stack.Navigator>
          <Stack.Screen name="Dev" component={Dev} />
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="LoginEmail" component={LoginEmail}/>
          <Stack.Screen name="Home" component={()=>{return(				
            <Drawer.Navigator>      					
	            <Drawer.Screen name="Home" component={Home}/>
              <Drawer.Screen name="ADM" component={ADM}/>
              <Drawer.Screen name="Prof" component={Prof}/>
            </Drawer.Navigator>)}} />
          <Stack.Screen name="ADM" component={ADM}/>
          <Stack.Screen name="Prof" component={Prof}/>			      	
        </Stack.Navigator> 
      </NavigationContainer>)
  };
  
export default App
