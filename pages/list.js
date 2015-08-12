'use strict';

var React = require('react-native');
var Clip = require('./clip');

var {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image,
  Component,
} = React;

var List = React.createClass({
  getInitialState: function(){
    return {
      name: 'qin'
    }
  },
  spark: function(data){
    this.setState({name:data});
  },
  render: function(){
    return (
      <View style={styles.container}>
        <Clip type="star" title="全部" number="10" ></Clip>
        <View style={styles.listHeader}>
          <Text style={styles.header}>
            列表
          </Text>
        </View>
        <Clip type="rss" title="elr" number="10"></Clip>
        <Clip type="rss" title="qin" number="0"></Clip>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  listHeader:{
    marginTop: 15,
    height: 35,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  header:{
    fontSize: 13,
    color: '#666',
  },
  list: {
    height: 35,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ebebeb',
  },
  container: {
    paddingTop: 10,
    marginTop: 65,
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  cell: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 13,
    color: '#666',
    textAlign: 'center',
  },
  cellfixed: {
    width: 50,
    paddingLeft: 10,
    justifyContent: 'center',
    backgroundColor: '#fefefe'
  },
  imageStar: {
    width: 18,
    height: 18,
  },
  imageRss: {
    width: 16,
    height: 16,
  },
});

module.exports = List;
