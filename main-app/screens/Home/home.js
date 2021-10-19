import 'react-native-gesture-handler';
import * as React from 'react';
import {StyleSheet, Button, Text, View, TouchableOpacity, Image, Dimensions,} from 'react-native';
import Video from 'react-native-video';

//get scaling factors
const entireScreenWidth = Dimensions.get('window').width;
let rem;
rem = entireScreenWidth / 350;

const styles = StyleSheet.create ({
    header: {
        fontSize: 34*rem,
        fontWeight: "600",
        paddingVertical: 16,
        paddingLeft: 34,
        paddingRight: 59
    },
    buttonText:{
        fontSize: 17*rem,
        paddingLeft: 16
    },
    buttonContainer:{
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#C0C0C0',
        paddingVertical: 10,
        paddingLeft: 34,
        paddingRight: 14
    },
    lastButtonContainer:{
        flexDirection: 'row',
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
        alignItems: 'center'
    },
    chevron:{
        width: 11*rem,
        height: 18*rem
    }
});


class Home extends React.Component {

  // videoBuffer = (isBuffer) =>{
  //
  //
  //   console.log(isBuffer)
  //   //here you could set the isBuffer value to the state and then do something with it
  //   //such as show a loading icon
  // }

  render(){
    // const gVideo = require('/Users/abhi/Galapago/main/Galapagos-Islands-Project/main-app/app/assets/videos/video1.mp4');
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <Text style={styles.header}>Home</Text>

        <Image
            source={require('../../app/assets/images/headerImage_short.png')}
            style={{width: entireScreenWidth, height: 25*rem}}
        />
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.props.navigation.navigate("RelevantInformation")}>
            <View style={styles.buttonLeft}>
                <Image
                    source={require('../../app/assets/icons/RI.png')}
                    style={{width: 31*rem, height: 25*rem}}
                />
                <Text style={styles.buttonText}>Relevant Information</Text>
            </View>
            <View style={styles.buttonRight}>
                <Image
                    source={require('../../app/assets/icons/chevron.png')}
                    style={styles.chevron}
                />
            </View>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.lastButtonContainer}
            onPress={() => this.props.navigation.navigate("Maps")}>
            <View style={styles.buttonLeft}>
                <Image
                      source={require('../../app/assets/icons/Map.png')}
                      style={{width: 31*rem, height: 27*rem}}
                />
                <Text style={styles.buttonText}>Maps</Text>
              </View>
              <View style={styles.buttonRight}>
                    <Image
                        source={require('../../app/assets/icons/chevron.png')}
                        style={styles.chevron}
                    />
              </View>
              <View style={{borderBottomWidth: 1}}></View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.lastButtonContainer}
            onPress={() => this.props.navigation.navigate("Overview")}>
            <View style={styles.buttonLeft}>
                <Image
                      source={require('../../app/assets/icons/history_gray.png')}
                      style={{width: 27*rem, height: 28*rem}}
                />
                <Text style={styles.buttonText}>Galapagos Overview</Text>
              </View>
              <View style={styles.buttonRight}>
                    <Image
                        source={require('../../app/assets/icons/chevron.png')}
                        style={styles.chevron}
                    />
              </View>
              <View style={{borderBottomWidth: 1}}></View>
          </TouchableOpacity>
      </View>
    );
  }
}

export default Home;
