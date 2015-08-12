'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} = React;

var Clip = React.createClass({
  getInitialState: function(){
    return {
      name: 'elrrrrrrr'
    }
  },
  spark: function(data){
    this.setState({name:'qinnnnnnnn'});
  },
  render: function(){
    var listImage = (this.props.type == 'rss') ?
      ( <Image source={require('image!rss')} style={[styles.welcome,styles.imageRss]}/> ) :
      ( <Image source={require('image!star')} style={[styles.welcome,styles.imageStar]}/>);
    return (
      <TouchableHighlight
        underlayColor='#ebebeb'>
        <View style={styles.list}>
          <View style={styles.cellfixed}>
            {listImage}
          </View>
          <View style={styles.main}>
            <Text style={styles.welcome}>
              {this.props.title}
            </Text>
          </View>
          <View style={styles.number}>
            <Text style={styles.welcome}>
              {this.props.number}
            </Text>
          </View>
          <View style={styles.arrow}>
            <Image source={require('image!arrow-right')} style={[styles.welcome,styles.imageArrow]}/>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
});

var styles = StyleSheet.create({
  list: {
    height: 35,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ebebeb',
  },
  main: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 13,
    color: '#666',
    textAlign: 'center',
  },
  number: {
    width: 30,
    justifyContent: 'center',
    backgroundColor: '#fefefe'
  },
  arrow: {
    width: 30,
    justifyContent: 'center',
    backgroundColor: '#fefefe'
  },
  cellfixed: {
    width: 40,
    paddingLeft: 10,
    justifyContent: 'center',
    backgroundColor: '#fefefe'
  },
  imageStar: {
    width: 16,
    height: 16,
  },
  imageRss: {
    width: 14,
    height: 14,
  },
  imageArrow: {
    width: 10,
    height: 10,
  }
});

module.exports = Clip;
