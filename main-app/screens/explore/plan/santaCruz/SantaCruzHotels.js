import 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
import * as React from 'react';
import {
    StyleSheet,
    Button,
    Text,
    View,
    TouchableOpacity,
    Image,
    Dimensions,
    SafeAreaView,
    ScrollView,
    Linking, AsyncStorage
} from 'react-native';
import { any } from 'prop-types';
import OpenMap from "react-native-open-map";

//get scaling factors
const entireScreenWidth = Dimensions.get('window').width;
let rem;
rem = entireScreenWidth / 350;

const styles = StyleSheet.create ({
    header:{
        flexDirection: 'row',
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 34,
        alignItems: 'center'
    },
    headerText: {
        paddingLeft: 16,
        fontSize: 28*rem,
        fontWeight: "600",
    },
    buttonText:{
        fontSize: 17*rem,
        paddingLeft: 16
    },
    buttonContainer:{
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: '#C0C0C0',
        paddingVertical: 10,
        paddingLeft: 34,
        paddingRight: 14
    },
    lastButtonContainer:{
        flexDirection: 'row',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        paddingVertical: 10,
        borderColor: '#C0C0C0',
        paddingLeft: 34,
        paddingRight: 14
    },
    buttonLeft:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonRight:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    }, 
    chevron:{
        width: 11*rem, 
        height: 18*rem
    },
    regularBold:{
        fontWeight: '600',
        color: '#000000',
        fontSize: 17*rem,
        paddingLeft: 30,
        paddingTop: 16, 
        paddingBottom: 16,
        flexWrap: "wrap"
    },
    regular:{
      fontSize: 17*rem,
      color: '#616161',
      padding: 30,
      lineHeight: 20 * rem
    },
    numberRow:{
      flexDirection: 'row',
      paddingTop: 16,
      paddingBottom: 16,
      paddingLeft: 34,
      alignItems: 'stretch'
    },
    wrapper: {
      height: 200*rem,
    },
    slide: {
      justifyContent: 'center',
      alignItems: 'center',
      width: Dimensions.get('window').width,
    },
    slideImage: {
      height: 250*rem,
      width: Dimensions.get('window').width,
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    },
    infoPhone: {
      width: 20*rem, 
      height: 18*rem,
    },
    infoEmail: {
      width: 21*rem, 
      height: 16*rem,
    },
    infoAddress: {
      width: 18*rem, 
      height: 21*rem,
    },
    infoWeb: {
      width: 20*rem, 
      height: 20*rem,
    },
    infoText: {
      fontSize: 17*rem,
      color: '#616161',
      lineHeight: 20*rem, 
      marginLeft: 10*rem,
      marginRight: 20*rem, 
    },
    numberRow:{
      flexDirection: 'row',
      paddingTop: 20,
      justifyContent: "center",
      flexWrap: "wrap"
    },
    lastRow:{
      flexDirection: 'row',
      paddingTop: 20,
      paddingBottom: 50,
      justifyContent: "center",
      flexWrap: "wrap"
    }
});

class SantaCruzHotels extends React.Component {
    async addToFavorites(name,info){
        let value = await AsyncStorage.getItem('Hotel');
        let new_value;
        if (value !== null) {
            new_value = JSON.parse(value);
            new_value[name] = info;
        }
        else{
            new_value = {};
            new_value[name] = info
        }
        console.log(new_value);
        await AsyncStorage.setItem('Hotel', JSON.stringify(new_value))
    };
  render(){
    return (
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <View style={{backgroundColor: 'white', flex: 1}}>
          <View style={styles.header}>
              <Image
                  source={require('../../../../app/assets/icons/bed.png')}
                  style={{width: 32*rem, height: 29*rem}}
              />
              <Text style={styles.headerText}>Hotels</Text>
          </View>
          <Image
              source={require('../../../../app/assets/images/headerImage_short.png')}
              style={{width: entireScreenWidth, height: 25*rem}}
          />
      
              <Text style={styles.regularBold}>Hotel Angermeyer Water Front Inn</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/hotels/angermeyer/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/angermeyer/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/angermeyer/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/angermeyer/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352526561}')}>
                      <Image
                          source={require('../../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:angercontabilidad@gmail.com')}>
                      <Image
                          source={require('../../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https:www.angermeyer-waterfront-inn.com')}>
                      <Image
                          source={require('../../../../app/assets/icons/www_gray.png')}
                          style={styles.infoWeb}
                      />
                      <Text style={styles.infoText}>Website</Text>
                  </TouchableOpacity>
              </View>
              <View style={styles.lastRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => OpenMap.show({ latitude: -0.7449591, longitude: -90.3152868 })}>
                      <Image
                          source={require('../../../../app/assets/icons/location_gray.png')}
                          style={styles.infoAddress}
                      />
                      <Text style={styles.infoText}>Locate</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => this.addToFavorites( "Hotel Angermeyer Water Front Inn",{
                          Latitude: "-0.7449591", Longitude: "-90.3152", Mail: "angercontabilidad@gmail.com",
                          Website: "www.angermeyer-waterfront-inn.com", Phone: "59352526561", Image: "../../app/assets/images/hotels/angermeyer/1.jpg"})}>
                      <Image
                          source={require('../../../../app/assets/icons/turtleBW.png')}
                          style={styles.infoWeb}
                      />
                      <Text style={styles.infoText}>Favorites</Text>
                  </TouchableOpacity>
              </View>


              <Text style={styles.regularBold}>Hotel Santa Fé</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/hotels/santa-fe/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/santa-fe/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/santa-fe/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/santa-fe/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352526419}')}>
                      <Image
                          source={require('../../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:recepcion@santafegalapagos.com.ec')}>
                      <Image
                          source={require('../../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https:hotel.santafegalapagos.com.ec')}>
                      <Image
                          source={require('../../../../app/assets/icons/www_gray.png')}
                          style={styles.infoWeb}
                      />
                      <Text style={styles.infoText}>Website</Text>
                  </TouchableOpacity>
              </View>
              <View style={styles.lastRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => OpenMap.show({ latitude: -0.7449591, longitude: -90.3152868 })}>
                      <Image
                          source={require('../../../../app/assets/icons/location_gray.png')}
                          style={styles.infoAddress}
                      />
                      <Text style={styles.infoText}>Locate</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => this.addToFavorites( "Hotel Santa Fé",{
                          Latitude: "-0.7449591", Longitude: "-90.3152", Mail: "angercontabilidad@gmail.com",
                          Website: "www.angermeyer-waterfront-inn.com", Phone: "59352526561", Image: "../../app/assets/images/hotels/santa-fe/1.jpg"})}>
                      <Image
                          source={require('../../../../app/assets/icons/turtleBW.png')}
                          style={styles.infoWeb}
                      />
                      <Text style={styles.infoText}>Favorites</Text>
                  </TouchableOpacity>
              </View>


              <Text style={styles.regularBold}>Casa de Huéspedes Bay View House</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/hotels/huespedes-bay-view/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/huespedes-bay-view/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/huespedes-bay-view/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/huespedes-bay-view/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352527218}')}>
                      <Image
                          source={require('../../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:bayviewhouse2013@gmail.com')}>
                      <Image
                          source={require('../../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https://galapagostour.org/socios-capturgal/')}>
                      <Image
                          source={require('../../../../app/assets/icons/www_gray.png')}
                          style={styles.infoWeb}
                      />
                      <Text style={styles.infoText}>Website</Text>
                  </TouchableOpacity>
              </View>
              <View style={styles.lastRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => OpenMap.show({ latitude: -0.7449591, longitude: -90.3152868 })}>
                      <Image
                          source={require('../../../../app/assets/icons/location_gray.png')}
                          style={styles.infoAddress}
                      />
                      <Text style={styles.infoText}>Locate</Text>
                  </TouchableOpacity>
                  <Image
                      source={require('../../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Casa de Huéspedes Blue Heron House</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/hotels/huespedes-blue-heron/1.jpeg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/huespedes-blue-heron/2.jpeg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/huespedes-blue-heron/3.jpeg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/huespedes-blue-heron/4.jpeg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${593999116066}')}>
                      <Image
                          source={require('../../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:bookings@blueherongalapagos.com')}>
                      <Image
                          source={require('../../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https:www.blueheronsgalapagos.com')}>
                      <Image
                          source={require('../../../../app/assets/icons/www_gray.png')}
                          style={styles.infoWeb}
                      />
                      <Text style={styles.infoText}>Website</Text>
                  </TouchableOpacity>
              </View>
              <View style={styles.lastRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => OpenMap.show({ latitude: -0.7449591, longitude: -90.3152868 })}>
                      <Image
                          source={require('../../../../app/assets/icons/location_gray.png')}
                          style={styles.infoAddress}
                      />
                      <Text style={styles.infoText}>Locate</Text>
                  </TouchableOpacity>
                  <Image
                      source={require('../../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Lodge Galapagos Safari Camp</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/hotels/lodge-galapagos-safari/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/lodge-galapagos-safari/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/lodge-galapagos-safari/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/lodge-galapagos-safari/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59353013011}')}>
                      <Image
                          source={require('../../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:info@galapagossafaricamp.com')}>
                      <Image
                          source={require('../../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https:www.galapagossafaricamp.com')}>
                      <Image
                          source={require('../../../../app/assets/icons/www_gray.png')}
                          style={styles.infoWeb}
                      />
                      <Text style={styles.infoText}>Website</Text>
                  </TouchableOpacity>
              </View>
          <TouchableOpacity
              style = {{flexDirection: "row"}}
              onPress={() => OpenMap.show({ latitude: -0.7449591, longitude: -90.3152868 })}>
              <Image
                  source={require('../../../../app/assets/icons/location_gray.png')}
                  style={styles.infoAddress}
              />
              <Text style={styles.infoText}>Locate</Text>
          </TouchableOpacity>
                  <Image
                      source={require('../../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Casa de Huéspedes The Island Home</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/hotels/huespedes-the-island-home/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/huespedes-the-island-home/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/huespedes-the-island-home/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/huespedes-the-island-home/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${593987568436}')}>
                      <Image
                          source={require('../../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:galapagostwinsuites@gmail.com')}>
                      <Image
                          source={require('../../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https:www.galapagoshome.com')}>
                      <Image
                          source={require('../../../../app/assets/icons/www_gray.png')}
                          style={styles.infoWeb}
                      />
                      <Text style={styles.infoText}>Website</Text>
                  </TouchableOpacity>
              </View>
              <View style={styles.lastRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => OpenMap.show({ latitude: -0.7449591, longitude: -90.3152868 })}>
                      <Image
                          source={require('../../../../app/assets/icons/location_gray.png')}
                          style={styles.infoAddress}
                      />
                      <Text style={styles.infoText}>Locate</Text>
                  </TouchableOpacity>
                  <Image
                      source={require('../../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Lodge Casa Natura Galapagos</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/hotels/lodge-casa-natura/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/lodge-casa-natura/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/lodge-casa-natura/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/lodge-casa-natura/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${559352526107}')}>
                      <Image
                          source={require('../../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:${galapagoswalker@hotmail.com}')}>
                      <Image
                          source={require('../../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https:www.casanaturahotel.com')}>
                      <Image
                          source={require('../../../../app/assets/icons/www_gray.png')}
                          style={styles.infoWeb}
                      />
                      <Text style={styles.infoText}>Website</Text>
                  </TouchableOpacity>
              </View>
              <View style={styles.lastRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => OpenMap.show({ latitude: -0.7449591, longitude: -90.3152868 })}>
                      <Image
                          source={require('../../../../app/assets/icons/location_gray.png')}
                          style={styles.infoAddress}
                      />
                      <Text style={styles.infoText}>Locate</Text>
                  </TouchableOpacity>
                  <Image
                      source={require('../../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>
              <Text style={styles.regularBold}>Casa de Huéspedes Cozy Galapagos</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/hotels/casa-de-huespedes/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/casa-de-huespedes/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/casa-de-huespedes/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/casa-de-huespedes/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59353013843}')}>
                      <Image
                          source={require('../../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:${peladoda@yahoo.com}')}>
                      <Image
                          source={require('../../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https://galapagostour.org/socios-capturgal/')}>
                      <Image
                          source={require('../../../../app/assets/icons/www_gray.png')}
                          style={styles.infoWeb}
                      />
                      <Text style={styles.infoText}>Website</Text>
                  </TouchableOpacity>
              </View>
          <View style={styles.lastRow}>
              <TouchableOpacity
                  style = {{flexDirection: "row"}}
                  onPress={() => OpenMap.show({ latitude: -0.7449591, longitude: -90.3152868 })}>
                  <Image
                      source={require('../../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
              </TouchableOpacity>
                  <Image
                      source={require('../../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Hostal Galapagos Cottages</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/hotels/hostal-galapagos-cottages/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hostal-galapagos-cottages/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hostal-galapagos-cottages/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hostal-galapagos-cottages/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352526502}')}>
                      <Image
                          source={require('../../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:${galapagoscottages@hotmail.com}')}>
                      <Image
                          source={require('../../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https: www.galapagoscottages.com')}>
                      <Image
                          source={require('../../../../app/assets/icons/www_gray.png')}
                          style={styles.infoWeb}
                      />
                      <Text style={styles.infoText}>Website</Text>
                  </TouchableOpacity>
              </View>
          <View style={styles.lastRow}>
              <TouchableOpacity
                  style = {{flexDirection: "row"}}
                  onPress={() => OpenMap.show({ latitude: -0.7449591, longitude: -90.3152868 })}>
                  <Image
                      source={require('../../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
              </TouchableOpacity>
                  <Image
                      source={require('../../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Hostal Galapagos Native</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/hotels/hostal-galapagos-native/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hostal-galapagos-native/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hostal-galapagos-native/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hostal-galapagos-native/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352524730}')}>
                      <Image
                          source={require('../../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:${galapagos.native@gmail.com}')}>
                      <Image
                          source={require('../../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https://galapagostour.org/socios-capturgal/')}>
                      <Image
                          source={require('../../../../app/assets/icons/www_gray.png')}
                          style={styles.infoWeb}
                      />
                      <Text style={styles.infoText}>Website</Text>
                  </TouchableOpacity>
              </View>
          <View style={styles.lastRow}>
              <TouchableOpacity
                  style = {{flexDirection: "row"}}
                  onPress={() => OpenMap.show({ latitude: -0.7449591, longitude: -90.3152868 })}>
                  <Image
                      source={require('../../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
              </TouchableOpacity>
                  <Image
                      source={require('../../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>
              <Text style={styles.regularBold}>Hotel Galapagos Suites</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/hotels/galapagos-suites/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/galapagos-suites/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/galapagos-suites/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/galapagos-suites/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352526209}')}>
                      <Image
                          source={require('../../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:${reservas@galapagossuites.com}')}>
                      <Image
                          source={require('../../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https:www.galapagossuites.com')}>
                      <Image
                          source={require('../../../../app/assets/icons/www_gray.png')}
                          style={styles.infoWeb}
                      />
                      <Text style={styles.infoText}>Website</Text>
                  </TouchableOpacity>
              </View>
          <View style={styles.lastRow}>
              <TouchableOpacity
                  style = {{flexDirection: "row"}}
                  onPress={() => OpenMap.show({ latitude: -0.7449591, longitude: -90.3152868 })}>
                  <Image
                      source={require('../../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
              </TouchableOpacity>
                  <Image
                      source={require('../../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Casa de Huéspedes Gecko Guest House</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/hotels/gecko-guest-house/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/gecko-guest-house/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/gecko-guest-house/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/gecko-guest-house/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352527244}')}>
                      <Image
                          source={require('../../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:${alekrc@hotmail.com}')}>
                      <Image
                          source={require('../../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https://galapagostour.org/socios-capturgal/')}>
                      <Image
                          source={require('../../../../app/assets/icons/www_gray.png')}
                          style={styles.infoWeb}
                      />
                      <Text style={styles.infoText}>Website</Text>
                  </TouchableOpacity>
              </View>
          <View style={styles.lastRow}>
              <TouchableOpacity
                  style = {{flexDirection: "row"}}
                  onPress={() => OpenMap.show({ latitude: -0.7449591, longitude: -90.3152868 })}>
                  <Image
                      source={require('../../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
              </TouchableOpacity>
                  <Image
                      source={require('../../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Hostal Casa Cascada</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/hotels/hostal-casa-cascada/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hostal-casa-cascada/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hostal-casa-cascada/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hostal-casa-cascada/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352527212}')}>
                      <Image
                          source={require('../../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:${casacascada_galapagos@hotmail.com}')}>
                      <Image
                          source={require('../../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https://galapagostour.org/socios-capturgal/')}>
                      <Image
                          source={require('../../../../app/assets/icons/www_gray.png')}
                          style={styles.infoWeb}
                      />
                      <Text style={styles.infoText}>Website</Text>
                  </TouchableOpacity>
              </View>
          <View style={styles.lastRow}>
              <TouchableOpacity
                  style = {{flexDirection: "row"}}
                  onPress={() => OpenMap.show({ latitude: -0.7449591, longitude: -90.3152868 })}>
                  <Image
                      source={require('../../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
              </TouchableOpacity>
                  <Image
                      source={require('../../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Hostal España</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/hotels/hostal-espana/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hostal-espana/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hostal-espana/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hostal-espana/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352526108}')}>
                      <Image
                          source={require('../../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:${info@hotelespanagalapagos.com}')}>
                      <Image
                          source={require('../../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https:www.hotelespanagalapagos.com')}>
                      <Image
                          source={require('../../../../app/assets/icons/www_gray.png')}
                          style={styles.infoWeb}
                      />
                      <Text style={styles.infoText}>Website</Text>
                  </TouchableOpacity>
              </View>
          <View style={styles.lastRow}>
              <TouchableOpacity
                  style = {{flexDirection: "row"}}
                  onPress={() => OpenMap.show({ latitude: -0.7449591, longitude: -90.3152868 })}>
                  <Image
                      source={require('../../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
              </TouchableOpacity>
                  <Image
                      source={require('../../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Hotel Finch Bay Hotel</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/hotels/hotel-finch-bay/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hotel-finch-bay/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hotel-finch-bay/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hotel-finch-bay/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352526297}')}>
                      <Image
                          source={require('../../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:${manager@finchbayhotel.com}')}>
                      <Image
                          source={require('../../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https:www.finchbayhotel.com')}>
                      <Image
                          source={require('../../../../app/assets/icons/www_gray.png')}
                          style={styles.infoWeb}
                      />
                      <Text style={styles.infoText}>Website</Text>
                  </TouchableOpacity>
              </View>
          <View style={styles.lastRow}>
              <TouchableOpacity
                  style = {{flexDirection: "row"}}
                  onPress={() => OpenMap.show({ latitude: -0.7449591, longitude: -90.3152868 })}>
                  <Image
                      source={require('../../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
              </TouchableOpacity>
                  <Image
                      source={require('../../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Hostal Isla Azul</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/hotels/hostal-isla-azul/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hostal-isla-azul/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hostal-isla-azul/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hostal-isla-azul/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352526297}')}>
                      <Image
                          source={require('../../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:${manager@finchbayhotel.com}')}>
                      <Image
                          source={require('../../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https:www.finchbayhotel.com')}>
                      <Image
                          source={require('../../../../app/assets/icons/www_gray.png')}
                          style={styles.infoWeb}
                      />
                      <Text style={styles.infoText}>Website</Text>
                  </TouchableOpacity>
              </View>
          <View style={styles.lastRow}>
              <TouchableOpacity
                  style = {{flexDirection: "row"}}
                  onPress={() => OpenMap.show({ latitude: -0.7449591, longitude: -90.3152868 })}>
                  <Image
                      source={require('../../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
              </TouchableOpacity>
                  <Image
                      source={require('../../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Hostal Posada del Mar</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/hotels/hostal-posada-del-mar/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hostal-posada-del-mar/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hostal-posada-del-mar/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hostal-posada-del-mar/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352526297}')}>
                      <Image
                          source={require('../../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:${manager@finchbayhotel.com}')}>
                      <Image
                          source={require('../../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https:www.finchbayhotel.com')}>
                      <Image
                          source={require('../../../../app/assets/icons/www_gray.png')}
                          style={styles.infoWeb}
                      />
                      <Text style={styles.infoText}>Website</Text>
                  </TouchableOpacity>
              </View>
          <View style={styles.lastRow}>
              <TouchableOpacity
                  style = {{flexDirection: "row"}}
                  onPress={() => OpenMap.show({ latitude: -0.7449591, longitude: -90.3152868 })}>
                  <Image
                      source={require('../../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
              </TouchableOpacity>
                  <Image
                      source={require('../../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Hostal White House Galapagos</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/hotels/hostal-white-house/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hostal-white-house/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hostal-white-house/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hostal-white-house/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352526297}')}>
                      <Image
                          source={require('../../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:${manager@finchbayhotel.com}')}>
                      <Image
                          source={require('../../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https:www.finchbayhotel.com')}>
                      <Image
                          source={require('../../../../app/assets/icons/www_gray.png')}
                          style={styles.infoWeb}
                      />
                      <Text style={styles.infoText}>Website</Text>
                  </TouchableOpacity>
              </View>
          <View style={styles.lastRow}>
              <TouchableOpacity
                  style = {{flexDirection: "row"}}
                  onPress={() => OpenMap.show({ latitude: -0.7449591, longitude: -90.3152868 })}>
                  <Image
                      source={require('../../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
              </TouchableOpacity>
                  <Image
                      source={require('../../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Hotel Royal Palm</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/hotels/hotel-royal-palm/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hotel-royal-palm/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hotel-royal-palm/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hotel-royal-palm/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352526297}')}>
                      <Image
                          source={require('../../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:${manager@finchbayhotel.com}')}>
                      <Image
                          source={require('../../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https:www.finchbayhotel.com')}>
                      <Image
                          source={require('../../../../app/assets/icons/www_gray.png')}
                          style={styles.infoWeb}
                      />
                      <Text style={styles.infoText}>Website</Text>
                  </TouchableOpacity>
              </View>
          <View style={styles.lastRow}>
              <TouchableOpacity
                  style = {{flexDirection: "row"}}
                  onPress={() => OpenMap.show({ latitude: -0.7449591, longitude: -90.3152868 })}>
                  <Image
                      source={require('../../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
              </TouchableOpacity>
                  <Image
                      source={require('../../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>



              <Text style={styles.regularBold}>Hotel Brisas del Pacífico</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/hotels/hotel-brisas-del-pacifico/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hotel-brisas-del-pacifico/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hotel-brisas-del-pacifico/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hotel-brisas-del-pacifico/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352526297}')}>
                      <Image
                          source={require('../../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:${manager@finchbayhotel.com}')}>
                      <Image
                          source={require('../../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https:www.finchbayhotel.com')}>
                      <Image
                          source={require('../../../../app/assets/icons/www_gray.png')}
                          style={styles.infoWeb}
                      />
                      <Text style={styles.infoText}>Website</Text>
                  </TouchableOpacity>
              </View>
          <View style={styles.lastRow}>
              <TouchableOpacity
                  style = {{flexDirection: "row"}}
                  onPress={() => OpenMap.show({ latitude: -0.7449591, longitude: -90.3152868 })}>
                  <Image
                      source={require('../../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
              </TouchableOpacity>
                  <Image
                      source={require('../../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Hostal Coloma Galapagos</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/hotels/hostal-coloma-galapagos/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hostal-coloma-galapagos/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hostal-coloma-galapagos/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hostal-coloma-galapagos/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352526297}')}>
                      <Image
                          source={require('../../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:${manager@finchbayhotel.com}')}>
                      <Image
                          source={require('../../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https:www.finchbayhotel.com')}>
                      <Image
                          source={require('../../../../app/assets/icons/www_gray.png')}
                          style={styles.infoWeb}
                      />
                      <Text style={styles.infoText}>Website</Text>
                  </TouchableOpacity>
              </View>
          <View style={styles.lastRow}>
              <TouchableOpacity
                  style = {{flexDirection: "row"}}
                  onPress={() => OpenMap.show({ latitude: -0.7449591, longitude: -90.3152868 })}>
                  <Image
                      source={require('../../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
              </TouchableOpacity>
                  <Image
                      source={require('../../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Hotel Deja Vu</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/hotels/hotel-deja-vu/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hotel-deja-vu/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hotel-deja-vu/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hotel-deja-vu/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352526297}')}>
                      <Image
                          source={require('../../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:${manager@finchbayhotel.com}')}>
                      <Image
                          source={require('../../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https:www.finchbayhotel.com')}>
                      <Image
                          source={require('../../../../app/assets/icons/www_gray.png')}
                          style={styles.infoWeb}
                      />
                      <Text style={styles.infoText}>Website</Text>
                  </TouchableOpacity>
              </View>
          <View style={styles.lastRow}>
              <TouchableOpacity
                  style = {{flexDirection: "row"}}
                  onPress={() => OpenMap.show({ latitude: -0.7449591, longitude: -90.3152868 })}>
                  <Image
                      source={require('../../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
              </TouchableOpacity>
                  <Image
                      source={require('../../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Hotel Galapagos Islands</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/hotels/hotel-galapagos-islands/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hotel-galapagos-islands/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hotel-galapagos-islands/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hotel-galapagos-islands/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352526297}')}>
                      <Image
                          source={require('../../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:${manager@finchbayhotel.com}')}>
                      <Image
                          source={require('../../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https:www.finchbayhotel.com')}>
                      <Image
                          source={require('../../../../app/assets/icons/www_gray.png')}
                          style={styles.infoWeb}
                      />
                      <Text style={styles.infoText}>Website</Text>
                  </TouchableOpacity>
              </View>
          <View style={styles.lastRow}>
              <TouchableOpacity
                  style = {{flexDirection: "row"}}
                  onPress={() => OpenMap.show({ latitude: -0.7449591, longitude: -90.3152868 })}>
                  <Image
                      source={require('../../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
              </TouchableOpacity>
                  <Image
                      source={require('../../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Hotel Ikala Galapagos</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/hotels/hotel-ikala-galapagos/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hotel-ikala-galapagos/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hotel-ikala-galapagos/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hotel-ikala-galapagos/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352526297}')}>
                      <Image
                          source={require('../../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:${manager@finchbayhotel.com}')}>
                      <Image
                          source={require('../../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https:www.finchbayhotel.com')}>
                      <Image
                          source={require('../../../../app/assets/icons/www_gray.png')}
                          style={styles.infoWeb}
                      />
                      <Text style={styles.infoText}>Website</Text>
                  </TouchableOpacity>
              </View>
          <View style={styles.lastRow}>
              <TouchableOpacity
                  style = {{flexDirection: "row"}}
                  onPress={() => OpenMap.show({ latitude: -0.7449591, longitude: -90.3152868 })}>
                  <Image
                      source={require('../../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
              </TouchableOpacity>
                  <Image
                      source={require('../../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Hotel La Isla</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/hotels/hotel-la-isla/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hotel-la-isla/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hotel-la-isla/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hotel-la-isla/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352526297}')}>
                      <Image
                          source={require('../../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:${manager@finchbayhotel.com}')}>
                      <Image
                          source={require('../../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https:www.finchbayhotel.com')}>
                      <Image
                          source={require('../../../../app/assets/icons/www_gray.png')}
                          style={styles.infoWeb}
                      />
                      <Text style={styles.infoText}>Website</Text>
                  </TouchableOpacity>
              </View>
          <View style={styles.lastRow}>
              <TouchableOpacity
                  style = {{flexDirection: "row"}}
                  onPress={() => OpenMap.show({ latitude: -0.7449591, longitude: -90.3152868 })}>
                  <Image
                      source={require('../../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
              </TouchableOpacity>
                  <Image
                      source={require('../../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Hotel Palace</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/hotels/hotel-palace/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hotel-palace/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hotel-palace/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hotel-palace/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352526297}')}>
                      <Image
                          source={require('../../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:${manager@finchbayhotel.com}')}>
                      <Image
                          source={require('../../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https:www.finchbayhotel.com')}>
                      <Image
                          source={require('../../../../app/assets/icons/www_gray.png')}
                          style={styles.infoWeb}
                      />
                      <Text style={styles.infoText}>Website</Text>
                  </TouchableOpacity>
              </View>
          <View style={styles.lastRow}>
              <TouchableOpacity
                  style = {{flexDirection: "row"}}
                  onPress={() => OpenMap.show({ latitude: -0.7449591, longitude: -90.3152868 })}>
                  <Image
                      source={require('../../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
              </TouchableOpacity>
                  <Image
                      source={require('../../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Hostal La Casa de Mathías</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/hotels/hostal-la-casa-mathias/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hostal-la-casa-mathias/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hostal-la-casa-mathias/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hostal-la-casa-mathias/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352526297}')}>
                      <Image
                          source={require('../../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:${manager@finchbayhotel.com}')}>
                      <Image
                          source={require('../../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https:www.finchbayhotel.com')}>
                      <Image
                          source={require('../../../../app/assets/icons/www_gray.png')}
                          style={styles.infoWeb}
                      />
                      <Text style={styles.infoText}>Website</Text>
                  </TouchableOpacity>
              </View>
          <View style={styles.lastRow}>
              <TouchableOpacity
                  style = {{flexDirection: "row"}}
                  onPress={() => OpenMap.show({ latitude: -0.7449591, longitude: -90.3152868 })}>
                  <Image
                      source={require('../../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
              </TouchableOpacity>
                  <Image
                      source={require('../../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Casa de Huéspedes La Casa Redonda</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/hotels/la-casa-redonda/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/la-casa-redonda/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/la-casa-redonda/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/la-casa-redonda/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352526297}')}>
                      <Image
                          source={require('../../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:${manager@finchbayhotel.com}')}>
                      <Image
                          source={require('../../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https:www.finchbayhotel.com')}>
                      <Image
                          source={require('../../../../app/assets/icons/www_gray.png')}
                          style={styles.infoWeb}
                      />
                      <Text style={styles.infoText}>Website</Text>
                  </TouchableOpacity>
              </View>
          <View style={styles.lastRow}>
              <TouchableOpacity
                  style = {{flexDirection: "row"}}
                  onPress={() => OpenMap.show({ latitude: -0.7449591, longitude: -90.3152868 })}>
                  <Image
                      source={require('../../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
              </TouchableOpacity>
                  <Image
                      source={require('../../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Hostal Lava House</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/hotels/hostal-lava-house/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hostal-lava-house/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hostal-lava-house/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hostal-lava-house/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352526297}')}>
                      <Image
                          source={require('../../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:${manager@finchbayhotel.com}')}>
                      <Image
                          source={require('../../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https:www.finchbayhotel.com')}>
                      <Image
                          source={require('../../../../app/assets/icons/www_gray.png')}
                          style={styles.infoWeb}
                      />
                      <Text style={styles.infoText}>Website</Text>
                  </TouchableOpacity>
              </View>
          <View style={styles.lastRow}>
              <TouchableOpacity
                  style = {{flexDirection: "row"}}
                  onPress={() => OpenMap.show({ latitude: -0.7449591, longitude: -90.3152868 })}>
                  <Image
                      source={require('../../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
              </TouchableOpacity>
                  <Image
                      source={require('../../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Hostal Casalaiguana</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/hotels/casalaiguana/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/casalaiguana/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/casalaiguana/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/casalaiguana/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352526297}')}>
                      <Image
                          source={require('../../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:${manager@finchbayhotel.com}')}>
                      <Image
                          source={require('../../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https:www.finchbayhotel.com')}>
                      <Image
                          source={require('../../../../app/assets/icons/www_gray.png')}
                          style={styles.infoWeb}
                      />
                      <Text style={styles.infoText}>Website</Text>
                  </TouchableOpacity>
              </View>
          <View style={styles.lastRow}>
              <TouchableOpacity
                  style = {{flexDirection: "row"}}
                  onPress={() => OpenMap.show({ latitude: -0.7449591, longitude: -90.3152868 })}>
                  <Image
                      source={require('../../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
              </TouchableOpacity>
                  <Image
                      source={require('../../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Hotel Cucuve Suites</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/hotels/cucuve-suites/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/cucuve-suites/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/cucuve-suites/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/cucuve-suites/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352526297}')}>
                      <Image
                          source={require('../../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:${manager@finchbayhotel.com}')}>
                      <Image
                          source={require('../../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https:www.finchbayhotel.com')}>
                      <Image
                          source={require('../../../../app/assets/icons/www_gray.png')}
                          style={styles.infoWeb}
                      />
                      <Text style={styles.infoText}>Website</Text>
                  </TouchableOpacity>
              </View>
          <View style={styles.lastRow}>
              <TouchableOpacity
                  style = {{flexDirection: "row"}}
                  onPress={() => OpenMap.show({ latitude: -0.7449591, longitude: -90.3152868 })}>
                  <Image
                      source={require('../../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
              </TouchableOpacity>
                  <Image
                      source={require('../../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Hostal El Bambú Galápagos</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/hotels/el-bambu-galapagos/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/el-bambu-galapagos/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/el-bambu-galapagos/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/el-bambu-galapagos/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352526297}')}>
                      <Image
                          source={require('../../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:${manager@finchbayhotel.com}')}>
                      <Image
                          source={require('../../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https:www.finchbayhotel.com')}>
                      <Image
                          source={require('../../../../app/assets/icons/www_gray.png')}
                          style={styles.infoWeb}
                      />
                      <Text style={styles.infoText}>Website</Text>
                  </TouchableOpacity>
              </View>
          <View style={styles.lastRow}>
              <TouchableOpacity
                  style = {{flexDirection: "row"}}
                  onPress={() => OpenMap.show({ latitude: -0.7449591, longitude: -90.3152868 })}>
                  <Image
                      source={require('../../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
              </TouchableOpacity>
                  <Image
                      source={require('../../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}> Hostal Mi Caleta Inn</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/hotels/hostal-mi-caleta-inn/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hostal-mi-caleta-inn/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hostal-mi-caleta-inn/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hostal-mi-caleta-inn/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352526297}')}>
                      <Image
                          source={require('../../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:${manager@finchbayhotel.com}')}>
                      <Image
                          source={require('../../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https:www.finchbayhotel.com')}>
                      <Image
                          source={require('../../../../app/assets/icons/www_gray.png')}
                          style={styles.infoWeb}
                      />
                      <Text style={styles.infoText}>Website</Text>
                  </TouchableOpacity>
              </View>
          <View style={styles.lastRow}>
              <TouchableOpacity
                  style = {{flexDirection: "row"}}
                  onPress={() => OpenMap.show({ latitude: -0.7449591, longitude: -90.3152868 })}>
                  <Image
                      source={require('../../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
              </TouchableOpacity>
                  <Image
                      source={require('../../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Hotel Pikaia Galapagos</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/hotels/hotel-pikaia-galapagos/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hotel-pikaia-galapagos/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hotel-pikaia-galapagos/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hotel-pikaia-galapagos/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352526297}')}>
                      <Image
                          source={require('../../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:${manager@finchbayhotel.com}')}>
                      <Image
                          source={require('../../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https:www.finchbayhotel.com')}>
                      <Image
                          source={require('../../../../app/assets/icons/www_gray.png')}
                          style={styles.infoWeb}
                      />
                      <Text style={styles.infoText}>Website</Text>
                  </TouchableOpacity>
              </View>
          <View style={styles.lastRow}>
              <TouchableOpacity
                  style = {{flexDirection: "row"}}
                  onPress={() => OpenMap.show({ latitude: -0.7449591, longitude: -90.3152868 })}>
                  <Image
                      source={require('../../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
              </TouchableOpacity>
                  <Image
                      source={require('../../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Lodge Scalesia</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/hotels/lodge-scalesia/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/lodge-scalesia/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/lodge-scalesia/3.jpeg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/lodge-scalesia/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352526297}')}>
                      <Image
                          source={require('../../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:${manager@finchbayhotel.com}')}>
                      <Image
                          source={require('../../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https:www.finchbayhotel.com')}>
                      <Image
                          source={require('../../../../app/assets/icons/www_gray.png')}
                          style={styles.infoWeb}
                      />
                      <Text style={styles.infoText}>Website</Text>
                  </TouchableOpacity>
              </View>
          <View style={styles.lastRow}>
              <TouchableOpacity
                  style = {{flexDirection: "row"}}
                  onPress={() => OpenMap.show({ latitude: -0.7449591, longitude: -90.3152868 })}>
                  <Image
                      source={require('../../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
              </TouchableOpacity>
                  <Image
                      source={require('../../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Hostal Torre Mar Galápagos</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/hotels/hostal-torre-mar-galapagos/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hostal-torre-mar-galapagos/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hostal-torre-mar-galapagos/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hostal-torre-mar-galapagos/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352526297}')}>
                      <Image
                          source={require('../../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:${manager@finchbayhotel.com}')}>
                      <Image
                          source={require('../../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https:www.finchbayhotel.com')}>
                      <Image
                          source={require('../../../../app/assets/icons/www_gray.png')}
                          style={styles.infoWeb}
                      />
                      <Text style={styles.infoText}>Website</Text>
                  </TouchableOpacity>
              </View>
          <View style={styles.lastRow}>
              <TouchableOpacity
                  style = {{flexDirection: "row"}}
                  onPress={() => OpenMap.show({ latitude: -0.7449591, longitude: -90.3152868 })}>
                  <Image
                      source={require('../../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
              </TouchableOpacity>
                  <Image
                      source={require('../../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Lodge Twin Galapagos</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/hotels/lodge-twin-galapagos/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/lodge-twin-galapagos/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/lodge-twin-galapagos/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/lodge-twin-galapagos/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <Image
                      source={require('../../../../app/assets/icons/phone.png')}
                      style={styles.infoPhone}
                  />
                  <Text style={styles.infoText}>Call</Text>
                  <Image
                      source={require('../../../../app/assets/icons/email.png')}
                      style={styles.infoEmail}
                  />
                  <Text style={styles.infoText}>Email</Text>
                  <Image
                      source={require('../../../../app/assets/icons/www_gray.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Website</Text>
              </View>
              <View style={styles.lastRow}>
                  <Image
                      source={require('../../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
                  <Image
                      source={require('../../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Hostal Zurisadai</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/hotels/hostal-zurisadai/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hostal-zurisadai/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hostal-zurisadai/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/hostal-zurisadai/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <Image
                      source={require('../../../../app/assets/icons/phone.png')}
                      style={styles.infoPhone}
                  />
                  <Text style={styles.infoText}>Call</Text>
                  <Image
                      source={require('../../../../app/assets/icons/email.png')}
                      style={styles.infoEmail}
                  />
                  <Text style={styles.infoText}>Email</Text>
                  <Image
                      source={require('../../../../app/assets/icons/www_gray.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Website</Text>
              </View>
              <View style={styles.lastRow}>
                  <Image
                      source={require('../../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
                  <Image
                      source={require('../../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Hotel Angermeyer Water Front Inn</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/hotels/angermeyer/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/angermeyer/2.jpg')}
                        style={styles.slideImage}
                    />        
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/angermeyer/3.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/hotels/angermeyer/4.jpg')}
                        style={styles.slideImage}
                    />  
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <Image
                      source={require('../../../../app/assets/icons/phone.png')}
                      style={styles.infoPhone}
                  />
                  <Text style={styles.infoText}>Call</Text>
                  <Image
                      source={require('../../../../app/assets/icons/email.png')}
                      style={styles.infoEmail}
                  />
                  <Text style={styles.infoText}>Email</Text>
                  <Image
                      source={require('../../../../app/assets/icons/www_gray.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Website</Text>
              </View>
              <View style={styles.lastRow}>
                  <Image
                      source={require('../../../../app/assets/icons/location_gray.png')}
                      style={styles.infoAddress}
                  />
                  <Text style={styles.infoText}>Locate</Text>
                  <Image
                      source={require('../../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>
      </ScrollView>
      </SafeAreaView>
    );
  }
}

export default SantaCruzHotels;