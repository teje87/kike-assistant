import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Tts from 'react-native-tts';
import SpeechAndroid from 'react-native-android-voice';






export default class App extends React.Component {


  async _buttonClick(){
    try{
        //More Locales will be available upon release.
        var spokenText = await SpeechAndroid.startSpeech("Speak yo", SpeechAndroid.SPANISH);
        console.log(spokenText);
        ToastAndroid.show(spokenText , ToastAndroid.LONG);
    }catch(error){
        switch(error){
            case SpeechAndroid.E_VOICE_CANCELLED:
                ToastAndroid.show("Voice Recognizer cancelled" , ToastAndroid.LONG);
                break;
            case SpeechAndroid.E_NO_MATCH:
                ToastAndroid.show("No match for what you said" , ToastAndroid.LONG);
                break;
            case SpeechAndroid.E_SERVER_ERROR:
                ToastAndroid.show("Google Server Error" , ToastAndroid.LONG);
                break;
            /*And more errors that will be documented on Docs upon release*/
        }
    }
}



  render() {
    return (
      <View style={styles.container}>
       
        <Button
          onPress={this._buttonClick}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
