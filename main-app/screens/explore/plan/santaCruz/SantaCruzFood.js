import 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
import * as React from 'react';
import {StyleSheet, Button, Text, View, TouchableOpacity, Image, Dimensions, SafeAreaView, ScrollView, Linking} from 'react-native';
import OpenMap from "react-native-open-map";
import { AsyncStorage } from 'react-native';
import { any } from 'prop-types';
import { getDatabase, ref} from '@firebase/database';
import { auth, db, firebaseApp, firebase } from "../../../../App";

import { getStorage } from '@firebase/storage';

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

class SantaCruzFood extends React.Component {
  constructor() {
    super();

    this.state = {
      restaurants: []
    };
  }
  componentDidMount() {
    db.ref("/restaurants").on("value", snapshot => {
    let allRestaurants = [];
    snapshot.forEach(snap => {
      allRestaurants.push(snap.val());
    });
    this.setState({ restaurants: allRestaurants });
  });


}

    async addToFavorites(name,info){
        let value = await AsyncStorage.getItem('Food');
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
        await AsyncStorage.setItem('Food', JSON.stringify(new_value))
    };

  render(){
    return (

      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <View style={{backgroundColor: 'white', flex: 1}}>
          <View style={styles.header}>
              <Image
                  source={require('../../../../app/assets/icons/food.png')}
                  style={{width: 25*rem, height: 31 *rem}}
              />
              <Text style={styles.headerText}>Food & Drinks</Text>
          </View>
          <Image
              source={require('../../../../app/assets/images/headerImage_short.png')}
              style={{width: entireScreenWidth, height: 25*rem}}
          />
          {this.state.restaurants.map(restaurant => {
            return(
              <View>
              <Text style={styles.regularBold}>{restaurant.name}</Text>

              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/1835-coffee-lab/1.jpg')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/1835-coffee-lab/2.jpg')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/1835-coffee-lab/3.jpg')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/1835-coffee-lab/4.jpg')}
                        style={styles.slideImage}
                    />
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${'+ restaurant.phoneNo + '}')}>
                      <Image
                          source={require('../../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:' + restaurant.email)}>
                    <Image
                        source={require('../../../../app/assets/icons/email.png')}
                        style={styles.infoEmail}
                    />
                    <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https:www.coffeelabec.com')}>
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
                      onPress={() => this.addToFavorites( "Coffee Lab",{Name: "Coffee Lab",
                          Latitude: "-0.7449591", Longitude: "-90.3152", Mail: "oficina@1835coffeelabec.com",
                          Website: "https:www.coffeelabec.com", Phone: "59352526627", Image:"/../../app/assets/images/food/1835-coffee-lab/1.jpg"})}>
                      <Image
                          source={require('../../../../app/assets/icons/turtleBW.png')}
                          style={styles.infoWeb}
                      />
                      <Text style={styles.infoText}>Favorites</Text>
                  </TouchableOpacity>
              </View>
              </View>
            );
          })}

              <Text style={styles.regularBold}>Bar Bongo</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/food/bar-bongo/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/bar-bongo/2.jpg')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/bar-bongo/3.jpg')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/bar-bongo/4.jpg')}
                        style={styles.slideImage}
                    />
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352527520}')}>
                      <Image
                          source={require('../../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:elisagps@gmail.com')}>
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
                      onPress={() => OpenMap.show({ latitude: -0.7448105, longitude: -90.3139175 })}>
                      <Image
                          source={require('../../../../app/assets/icons/location_gray.png')}
                          style={styles.infoAddress}
                      />
                      <Text style={styles.infoText}>Locate</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => this.addToFavorites( "Bar Bongo",{Name: "Bar Bongo",
                          Latitude: "-0.7449591", Longitude: "-90.3152", Mail: "elisagps@gmail.com",
                          Website: "https://galapagostour.org/socios-capturgal/",  Phone: "59352527520", Image:'../../app/assets/images/food/bar-bongo/1.jpg'})}>
                      <Image
                          source={require('../../../../app/assets/icons/turtleBW.png')}
                          style={styles.infoWeb}
                      />
                      <Text style={styles.infoText}>Favorites</Text>
                  </TouchableOpacity>
              </View>
              <Text style={styles.regularBold}>Discoteca La Panga</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/food/discoteca-la-panga/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/discoteca-la-panga/2.jpg')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/discoteca-la-panga/3.jpg')}
                        style={styles.slideImage}
                    />
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352526266}')}>
                      <Image
                          source={require('../../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:gerencia@electronautica.com.ec')}>
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


              <Text style={styles.regularBold}>El Muelle de Darwin</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/food/el-muelle-de-darwin/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/el-muelle-de-darwin/2.jpg')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/el-muelle-de-darwin/3.jpg')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/el-muelle-de-darwin/4.jpg')}
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
                      onPress={() => Linking.openURL('mailto:reservas@elmuellededarwin.com')}>
                      <Image
                          source={require('../../../../app/assets/icons/email.png')}
                          style={styles.infoEmail}
                      />
                      <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('https:www.elmuellededarwin.com')}>
                      <Image
                          source={require('../../../../app/assets/icons/www_gray.png')}
                          style={styles.infoWeb}
                      />
                      <Text style={styles.infoText}>Website</Text>
                  </TouchableOpacity>
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


              <Text style={styles.regularBold}>Lo & Lo Restaurante</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/food/lo-lo/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/lo-lo/2.jpg')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/lo-lo/3.jpg')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/lo-lo/4.jpg')}
                        style={styles.slideImage}
                    />
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352524681}')}>
                      <Image
                          source={require('../../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:loylococinaecuatoriana@gmail.com')}>
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


              <Text style={styles.regularBold}>Restaurante Aquelarre</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/food/aquelarre/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/aquelarre/2.jpg')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/aquelarre/3.jpg')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/aquelarre/4.jpg')}
                        style={styles.slideImage}
                    />
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${593093175377}')}>
                      <Image
                          source={require('../../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:selvapro2014@hotmail.com')}>
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
                  <Text style={styles.infoText}>Locate</Text>
                  <Image
                      source={require('../../../../app/assets/icons/turtleBW.png')}
                      style={styles.infoWeb}
                  />
                  <Text style={styles.infoText}>Favorite</Text>
              </View>


              <Text style={styles.regularBold}>Restaurante Bahía Mar</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/food/bahia-mar/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/bahia-mar/2.jpg')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/bahia-mar/3.jpg')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/bahia-mar/4.jpg')}
                        style={styles.slideImage}
                    />
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${593994325803}')}>
                      <Image
                          source={require('../../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:reservasbahiamar@gmail.com')}>
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


              <Text style={styles.regularBold}>Cebichería El Guille</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/food/el-guille/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/el-guille/2.jpg')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/el-guille/3.jpg')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/el-guille/4.jpg')}
                        style={styles.slideImage}
                    />
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${593906240395}')}>
                      <Image
                          source={require('../../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:selvapro2010@hotmail.com')}>
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


              <Text style={styles.regularBold}>Il Nuovo Giardino</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/food/il-nuovo-giardino/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/il-nuovo-giardino/2.jpg')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/il-nuovo-giardino/3.jpg')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/il-nuovo-giardino/4.jpg')}
                        style={styles.slideImage}
                    />
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352526627}')}>
                      <Image
                          source={require('../../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:ilgiardinogalapagos@hotmail.com')}>
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


              <Text style={styles.regularBold}>Restaurante Isla Grill</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/food/isla-grill/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/isla-grill/2.jpg')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/isla-grill/3.jpg')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/isla-grill/4.jpg')}
                        style={styles.slideImage}
                    />
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352527395}')}>
                      <Image
                          source={require('../../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:islagrillgalapagos@hotmail.com')}>
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


              <Text style={styles.regularBold}>Restaurante La Garrapata</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/food/la-garrapata/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/la-garrapata/2.jpg')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/la-garrapata/3.jpg')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/la-garrapata/4.jpg')}
                        style={styles.slideImage}
                    />
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59352526264}')}>
                      <Image
                          source={require('../../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:garrapata.restaurant@hotmail.com')}>
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


              <Text style={styles.regularBold}>Santa Cruz Brewery Resto Pub</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/food/brewery-resto-pub/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/brewery-resto-pub/2.jpg')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/brewery-resto-pub/3.jpg')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/brewery-resto-pub/4.jpg')}
                        style={styles.slideImage}
                    />
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${59353014445}')}>
                      <Image
                          source={require('../../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:${}')}>
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


              <Text style={styles.regularBold}>Cafetería Proinsular</Text>
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                      <Image
                          source={require('../../../../app/assets/images/food/cafe-proinsular/1.jpg')}
                          style={styles.slideImage}
                      />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/cafe-proinsular/2.png')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/cafe-proinsular/3.jpg')}
                        style={styles.slideImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../../../app/assets/images/food/cafe-proinsular/4.jpg')}
                        style={styles.slideImage}
                    />
                </View>
              </Swiper>
              <View style={styles.numberRow}>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('tel:${5932526121}')}>
                      <Image
                          source={require('../../../../app/assets/icons/phone.png')}
                          style={styles.infoPhone}
                      />
                      <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style = {{flexDirection: "row"}}
                      onPress={() => Linking.openURL('mailto:ventas@proinsular.com.ec')}>
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


      </View>
      </ScrollView>
      </SafeAreaView>
    );
  }
}

export default SantaCruzFood;
