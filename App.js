/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button, Platform, StyleSheet, Text, TextInput, InteractionManager, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      selection: {
        start: 0,
        end: 0,
      },
      text: '',
    }
  }

  addText = () => {
    let start = this.state.selection.start
    let end = this.state.selection.end
    var text = this.state.text
    text = `${text.substring(0, start)}text${text.substring(end, text.length)}`

    let selection = {
      start: start + 4,
      end: start + 4
    }

    // Change input field text
    this.setState({text})

    // This should run after text has been changed but doesn't
    InteractionManager.runAfterInteractions(() => {
      this.setState({selection})
    })
  }

  onChangeText = text => {
    this.setState({text})
  }

  onSelectionChange = event => {
    let selection = event.nativeEvent.selection
    this.setState({selection})
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          autoFocus={true}
          onChangeText={this.onChangeText}
          onSelectionChange={this.onSelectionChange}
          selection={this.state.selection}
          style={styles.textInput}
          value={this.state.text}
        />
        <Button title="Add text" onPress={this.addText} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textInput: {
    backgroundColor: '#eee',
    borderColor: '#08f',
    borderRadius: 5,
    borderWidth: 2,
    marginBottom: 20,
    width: 200,
  },
});
