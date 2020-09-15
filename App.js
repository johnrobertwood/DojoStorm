import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
  TextInput,
  Keyboard
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOneName: '',
      playerTwoName: ''
    };
  }

  onPlayerOneNameChange = (text) => {
    this.setState({ playerOneName: text });
  }

  onPlayerTwoNameChange = (text) => {
    this.setState({ playerTwoName: text });
  }

  async onSubmitP1() {
    const { playerOneName } = this.state;
    this.setState({ playerOneName: '' })
    try {
      // let response = await fetch('https://53a0077d3b50.ngrok.io/player-one-name?name=' + playerOneName);
      let response = await fetch('http://smooth-server-env.eba-2nxttkpc.us-east-2.elasticbeanstalk.com/player-one-name?name=' + this.state.playerOneName);
      return response
    } catch (error) {
      console.error(error);
    }
  }

  async onSubmitP2() {
    const { playerTwoName } = this.state;
    this.setState({ playerTwoName: '' })
    try {
      // let response = await fetch('https://53a0077d3b50.ngrok.io/player-two-name?name=' + playerTwoName);
      let response = await fetch('http://smooth-server-env.eba-2nxttkpc.us-east-2.elasticbeanstalk.com/player-one-name?name=' + this.state.playerOneName);
      return response
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { playerOneName, playerTwoName } = this.state;
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Dojo Storm</Text>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableHighlight onPress={() => { startTimer() }} style={styles.button}>
                  <Text style={styles.buttonText}> START TIMER </Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => { resetTimer() }} style={styles.button}>
                  <Text style={styles.buttonText}> RESET TIMER </Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => { stopTimer() }} style={styles.button}>
                  <Text style={styles.buttonText}> STOP TIMER </Text>
                </TouchableHighlight>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableHighlight onPress={() => { addPlayerOnePoint() }} style={styles.button}>
                  <Text style={styles.buttonText}> + P1 POINT </Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => { subtractPlayerOnePoint() }} style={styles.button}>
                  <Text style={styles.buttonText}> - P1 POINT </Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => { clearPlayerOnePoint() }} style={styles.button}>
                  <Text style={styles.buttonText}> CLEAR P1 </Text>
                </TouchableHighlight>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableHighlight onPress={() => { addPlayerTwoPoint() }} style={styles.button}>
                  <Text style={styles.buttonText}> + P2 POINT </Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => { subtractPlayerTwoPoint() }} style={styles.button}>
                  <Text style={styles.buttonText}> - P2 POINT </Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => { clearPlayerTwoPoint() }} style={styles.button}>
                  <Text style={styles.buttonText}> CLEAR P2 </Text>
                </TouchableHighlight>
              </View>
              <View style={styles.buttonContainer}>
                <TextInput
                  placeholder="Player One Name"
                  maxLength={20}
                  value={playerOneName}
                  onChangeText={this.onPlayerOneNameChange}
                  style={styles.input}
                  onBlur={Keyboard.dismiss}
                />
                <TouchableHighlight onPress={() => this.onSubmitP1(this.state.playerOneName)} style={styles.button} >
                  <Text> Submit </Text>
                </TouchableHighlight>
              </View>
              <View style={styles.buttonContainer}>
                <TextInput
                  placeholder="Player Two Name"
                  maxLength={20}
                  value={playerTwoName}
                  onChangeText={this.onPlayerTwoNameChange}
                  style={styles.input}
                  onBlur={Keyboard.dismiss}
                />
                <TouchableHighlight onPress={() => this.onSubmitP2(this.state.playerTwoName)} style={styles.button}>
                  <Text> Submit </Text>
                </TouchableHighlight>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
};

async function startTimer() {
  try {
    // let response = await fetch('https://53a0077d3b50.ngrok.io/start');
    let response = await fetch('http://smooth-server-env.eba-2nxttkpc.us-east-2.elasticbeanstalk.com/start');

    return response;
  } catch (error) {
    console.error(error);
  }
}

async function resetTimer() {
  try {
    // let response = await fetch('https://53a0077d3b50.ngrok.io/reset');
    let response = await fetch('http://smooth-server-env.eba-2nxttkpc.us-east-2.elasticbeanstalk.com/reset');

    return response;
  } catch (error) {
    console.error(error);
  }
}

async function stopTimer() {
  try {
    // let response = await fetch('https://53a0077d3b50.ngrok.io/stop');
    let response = await fetch('http://smooth-server-env.eba-2nxttkpc.us-east-2.elasticbeanstalk.com/stop');
    return response;
  } catch (error) {
    console.error(error);
  }
}

async function addPlayerOnePoint() {
  try {
    // let response = await fetch('https://53a0077d3b50.ngrok.io/addPlayerOnePoint');
    let response = await fetch('http://smooth-server-env.eba-2nxttkpc.us-east-2.elasticbeanstalk.com/addPlayerOnePoint');
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
}

async function subtractPlayerOnePoint() {
  try {
    // let response = await fetch('https://53a0077d3b50.ngrok.io/subtractPlayerOnePoint');
    let response = await fetch('http://smooth-server-env.eba-2nxttkpc.us-east-2.elasticbeanstalk.com/subractPlayerOnePoint');
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
}

async function clearPlayerOnePoint() {
  try {
    // let response = await fetch('https://53a0077d3b50.ngrok.io/clearPlayerOnePoint');
    let response = await fetch('http://smooth-server-env.eba-2nxttkpc.us-east-2.elasticbeanstalk.com/clearPlayerOnePoint');
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
}

async function addPlayerTwoPoint() {
  try {
    // let response = await fetch('https://53a0077d3b50.ngrok.io/addPlayerTwoPoint');
    let response = await fetch('http://smooth-server-env.eba-2nxttkpc.us-east-2.elasticbeanstalk.com/addPlayerTwoPoint');
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
}

async function subtractPlayerTwoPoint() {
  try {
    // let response = await fetch('https://53a0077d3b50.ngrok.io/subtractPlayerTwoPoint');
    let response = await fetch('http://smooth-server-env.eba-2nxttkpc.us-east-2.elasticbeanstalk.com/subractPlayerTwoPoint');
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
}

async function clearPlayerTwoPoint() {
  try {
    // let response = await fetch('https://53a0077d3b50.ngrok.io/clearPlayerTwoPoint');
    let response = await fetch('http://smooth-server-env.eba-2nxttkpc.us-east-2.elasticbeanstalk.com/clearPlayerTwoPoint');
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: '600',
    color: Colors.black,
    alignSelf: 'center'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    width: '25%'
  },
  buttonText: {
    fontSize: 16
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
    width: '40%'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
});
