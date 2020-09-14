import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
  TextInput
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
    try {
      let response = await fetch('https://53a0077d3b50.ngrok.io/player-one-name?name=' + playerOneName);
      // let response = await fetch('http://smooth-server-env.eba-2nxttkpc.us-east-2.elasticbeanstalk.com/player-one-name?name=' + this.state.playerOneName);
      return response
    } catch (error) {
      console.error(error);
    }
  }

  async onSubmitP2() {
    const { playerTwoName } = this.state;
    try {
      let response = await fetch('https://53a0077d3b50.ngrok.io/player-two-name?name=' + playerTwoName);
      // let response = await fetch('http://smooth-server-env.eba-2nxttkpc.us-east-2.elasticbeanstalk.com/player-one-name?name=' + this.state.playerOneName);
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
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Dojo Storm</Text>
              </View>
              <TouchableHighlight
                onPress={() => {
                  startTimer();
                }}
                style={styles.button}
              >
                <Text style={styles.buttonText}> START TIMER </Text>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => {
                  resetTimer();
                }}
                style={styles.button}
              >
                <Text style={styles.buttonText}> RESET TIMER </Text>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => {
                  stopTimer();
                }}
                style={styles.button}
              >
                <Text style={styles.buttonText}> STOP TIMER </Text>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => {
                  addPlayerOnePoint();
                }}
                style={styles.button}
              >
                <Text style={styles.buttonText}> ADD PLAYER ONE POINT </Text>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => {
                  addPlayerTwoPoint();
                }}
                style={styles.button}
              >
                <Text style={styles.buttonText}> ADD PLAYER TWO POINT </Text>
              </TouchableHighlight>
              <TextInput
                placeholder="Player One Name"
                maxLength={20}
                value={playerOneName}
                onChangeText={this.onPlayerOneNameChange}
                style={styles.input}
              />
              <TouchableHighlight
                onPress={() => this.onSubmitP1(this.state.playerOneName)
                }
                style={styles.button}
              >
                <Text> Submit </Text>
              </TouchableHighlight>
              <TextInput
                placeholder="Player Two Name"
                maxLength={20}
                value={playerTwoName}
                onChangeText={this.onPlayerTwoNameChange}
                style={styles.input}
              />
              <TouchableHighlight
                onPress={() => this.onSubmitP2(this.state.playerTwoName)
                }
                style={styles.button}
              >
                <Text> Submit </Text>
              </TouchableHighlight>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
};

async function startTimer() {
  try {
    let response = await fetch('https://53a0077d3b50.ngrok.io/start');
    // let response = await fetch('http://smooth-server-env.eba-2nxttkpc.us-east-2.elasticbeanstalk.com/start');

    return response;
  } catch (error) {
    console.error(error);
  }
}

async function resetTimer() {
  try {
    let response = await fetch('https://53a0077d3b50.ngrok.io/reset');
    // let response = await fetch('http://smooth-server-env.eba-2nxttkpc.us-east-2.elasticbeanstalk.com/reset');

    return response;
  } catch (error) {
    console.error(error);
  }
}

async function stopTimer() {
  try {
    let response = await fetch('https://53a0077d3b50.ngrok.io/stop');
    // let response = await fetch('http://smooth-server-env.eba-2nxttkpc.us-east-2.elasticbeanstalk.com/stop');
    return response;
  } catch (error) {
    console.error(error);
  }
}

async function addPlayerOnePoint() {
  try {
    let response = await fetch('https://53a0077d3b50.ngrok.io/addPlayerOnePoint');
    // let response = await fetch('http://smooth-server-env.eba-2nxttkpc.us-east-2.elasticbeanstalk.com/addPlayerOnePoint');
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
}

async function addPlayerTwoPoint() {
  try {
    let response = await fetch('https://53a0077d3b50.ngrok.io/addPlayerTwoPoint');
    // let response = await fetch('http://smooth-server-env.eba-2nxttkpc.us-east-2.elasticbeanstalk.com/addPlayerTwoPoint');
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
    marginBottom: 10
  },
  buttonText: {
    fontSize: 20
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1
  }
});
