'use strict';

var React = require('react-native');
var List = require('./pages/list');

var {
    NavigatorIOS,
	  AppRegistry,
    StyleSheet,
} = React;

var drop = React.createClass({
    render: function(){
      return(
          <NavigatorIOS
            style={styles.container}
            initialRoute={{
              title: 'DROP',
              component: List,
            }}/>
      );
    }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});


AppRegistry.registerComponent('drop', () => drop);
