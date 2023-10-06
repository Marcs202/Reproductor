import {
    Pressable,
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image,
    StatusBar,
    Platform
  } from 'react-native';
  import { useNavigation } from '@react-navigation/native';
  
  import Canciones from './canciones';
  import MusicPlayer from './MusicPlayer';
  
  
  
  function Principal() {
    const navigation = useNavigation();
    const goToOtherScreen = () => {
        navigation.navigate('Canciones'); // Navega a la pantalla 'Other'
      };
    return (
        <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Text style={styles.titulo}> Pop </Text>
            <ScrollView horizontal  showsHorizontalScrollIndicator={false}>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={{uri:'https://images.coveralia.com/audio/c/Coldplay-Yellow_(CD_Single)-Frontal.jpg'}}
                  />
                  <Text style={styles.sub_titulo}>Coldplay - Yellow </Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={{uri:'https://i.pinimg.com/564x/e0/65/1d/e0651d0100dca76fedd7ccd7164927a5.jpg'}}
                  />
                  <Text style={styles.sub_titulo}>The Weeknd - Starboy</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={{uri:'https://i.pinimg.com/564x/37/9d/64/379d64978fb909dc7d22a797a7bde0a4.jpg'}}
                  />
                  <Text style={styles.sub_titulo}>Billie Eilish - Ocean Eyes </Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={{uri:'https://cloudfront-eu-central-1.images.arcpublishing.com/prisaradiolos40/M44WMP5ZQVJAPAFNXI4J3THTOA.jpg'}}
                  />
                  <Text style={styles.sub_titulo}>Katy Perry - No see</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={{uri:'https://i.pinimg.com/564x/5e/c9/81/5ec981baaf596bca4e8384f4bc89b801.jpg'}}
                  />
                  <Text style={styles.sub_titulo}>Dangerous Woman</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={{uri:'https://i.pinimg.com/564x/d7/a3/4e/d7a34e3f0121744e43fd6b68b53712a2.jpg'}}
                  />
                  <Text style={styles.sub_titulo}>Marshmello- Happier</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={{uri:'https://i.pinimg.com/564x/0b/70/86/0b708629390e0737028813c6dfc12e40.jpg'}}
                  />
                  <Text style={styles.sub_titulo}>Camila Cabello - Havana</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={{uri:'https://i.pinimg.com/564x/da/8f/66/da8f66aca95918109901dfa3fead1b2f.jpg'}}
                  />
                  <Text style={styles.sub_titulo}>Sweetener</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={{uri:'https://i.pinimg.com/564x/78/39/95/7839950e03a52b1b02b322ae8dd97f23.jpg'}}
                  />
                  <Text style={styles.sub_titulo}>Blow your mind</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={{uri:'https://i.pinimg.com/564x/d2/20/2b/d2202b3e9f20608f24b2bd7a0b1f4b37.jpg'}}
                  />
                  <Text style={styles.sub_titulo}>Taylor Swift - Lover</Text>
                </Pressable>
              </View>
            </ScrollView>
  
            <Text style={styles.titulo}> Electronica </Text>
            <ScrollView horizontal  showsHorizontalScrollIndicator={false}>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={{uri:'https://i.pinimg.com/564x/39/81/18/398118aa3f62fcfbce7a703ea9f08478.jpg'}}
                  />
                  <Text style={styles.sub_titulo}>Avicii - True </Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={{uri:'https://i.pinimg.com/564x/7a/ee/9f/7aee9fb1ff2682b56b099dd910e2d081.jpg'}}
                  />
                  <Text style={styles.sub_titulo}>Zomboy- DeadSymphonic</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={{uri:'https://i.pinimg.com/564x/35/18/c6/3518c6acd6b97ae704c200ce3ddff685.jpg'}}
                    
                  />
                  <Text style={styles.sub_titulo}>Skrillex -Jack U </Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={{uri:'https://pbs.twimg.com/media/Ek82ArsXUAIeBcV.jpg:large'}}
                  />
                  <Text style={styles.sub_titulo}>Skrillex - Scary Monters</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={{uri:'https://i.pinimg.com/564x/fc/65/8e/fc658efd701481199a28bc8e4164ae6d.jpg'}}
                  />
                  <Text style={styles.sub_titulo}> Chainsmoker-Closer</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={{uri:'https://images.prismic.io/garrix/9eec5884-4d40-42a9-8227-41cfa4121418_martingarrix-animals.jpg?auto=compress,format&w=1040'}}
                  />
                  <Text style={styles.sub_titulo}>Martin garrix - Animlas</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={{uri:'https://m.media-amazon.com/images/I/51-Aib+dkhL._UF894,1000_QL80_.jpg'}}
                  />
                  <Text style={styles.sub_titulo}>Alan Walker - Faded</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={{uri:'https://lastfm.freetls.fastly.net/i/u/ar0/8074f5e231eb1261dfdc08837a20848a.jpg'}}
                  />
                  <Text style={styles.sub_titulo}>Avicii - Levels</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={{uri:'https://i.redd.it/xt5lerstixz61.jpg'}}
                  />
                  <Text style={styles.sub_titulo}>Daft punk - Starboy</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={{uri:'https://is1-ssl.mzstatic.com/image/thumb/Music/v4/7b/9b/f9/7b9bf998-f665-1657-c4ac-0f44e2bbc141/5099997934158_1500x1500_300dpi.jpg/1200x1200bf-60.jpg'}}
                  />
                  <Text style={styles.sub_titulo}>David Guetta - Titanium</Text>
                </Pressable>
              </View>
            </ScrollView>
  
            <Text style={styles.titulo}> Trap </Text>
            <ScrollView horizontal  showsHorizontalScrollIndicator={false}>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={{uri:'https://i.ytimg.com/vi/g2Uc6oPDk9I/maxresdefault.jpg'}}
                  />
                  <Text style={styles.sub_titulo}>Bad Bunny - Booker T </Text>
                </Pressable>
              </View>
              
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={{uri:'https://i0.wp.com/seunonoticias.mx/wp-content/uploads/2022/07/duki-regresa-con-letra-y-video-oficial-givenchy.jpg?fit=1200%2C750&ssl=1'}}
                  />
                  
                  <Text style={styles.sub_titulo}>Duki - Givenchy </Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={{uri:'https://images.genius.com/12377cfdfafe50cb0f8051692fc100dc.1000x1000x1.png'}}
                  />
                  <Text style={styles.sub_titulo}>Esclava - Bryant Myers</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={{uri:'https://i.scdn.co/image/ab67616d0000b273706ebf953225cdd0b5bc6869'}}
                  />
                  <Text style={styles.sub_titulo}>Bad Bunny- Cabra</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={{uri:'https://images.coveralia.com/audio/a/Arcangel-Me_Acostumbre_(Featuring_Bad_Bunny)_(CD_Single)-Frontal.jpg'}}
                  />
                  <Text style={styles.sub_titulo}>Arcangel-Me acostumbre</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={{uri:'https://images.genius.com/8031612981750027c707c64544dd9ed9.1000x1000x1.png'}}
                  />
                  <Text style={styles.sub_titulo}>C.R.O - Harakiri</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={{uri:'https://images.coveralia.com/audio/a/Anuel_Aa-47_(Featuring_Nengo_Flow,_Farruko,_Casper,_Darell_y_Bad_Bunny)_(Remix)_(Cd_Single)-Frontal.jpg'}}
                  />
                  <Text style={styles.sub_titulo}>Anuel AA - 47</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={{uri:'https://images.genius.com/b596c7e0ac1c17684e8a05fdd5e708c5.1000x1000x1.png'}}
                  />
                  <Text style={styles.sub_titulo}>Jhon z - 0 sentimientos</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={{uri:'https://i.ytimg.com/vi/aHDCrf2WwbY/maxresdefault.jpg'}}
                  />
                  <Text style={styles.sub_titulo}>Duki-Malbec</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={{uri:'https://pbs.twimg.com/media/FiYszFuX0AAQsey.jpg:large'}}
                  />
                  <Text style={styles.sub_titulo}>Eladio Carrion - Mpabppe</Text>
                </Pressable>
              </View>
            </ScrollView>
  
            
          </View>
  
        </ScrollView>      
      </View>
    );
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#27374D',
      // backgroundColor: "#DDE6ED",
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      padding: 10,
    },
    album: {
      width: 175,
      height: 175,
      marginRight: 10,
      borderRadius: 18,
    },
    titulo: {
      fontWeight: 'bold',
      fontSize: 24,
      marginVertical: 10,
      color: '#fff',
    },
    sub_titulo: {
      color: '#DDE6ED',    
      // color:#400A8A,
      fontSize: 16,
      marginBottom: 20,
    },
  });
  
  export default Principal;