# react-native-sk-keyboard-responder

##What is it

react-native-sk-keyboard-responder is a component which wrap a View, and respond to keyboard show up, only for ios.

There are two way to respond

1 move up

Move view up, and clear a space for keyboard

It changes view’s position(‘bottom’ property), does not change view’s size

![](https://raw.githubusercontent.com/shigebeyond/react-native-sk-keyboard-responder/master/apply-move-up.gif)

2 reduce height

Reduce view’s height, and clear a space for keyboard

It changes view’s size(‘height’ property), does not change view’s position

![](https://raw.githubusercontent.com/shigebeyond/react-native-sk-keyboard-responder/master/apply-reduce-height.gif)

So I come up with 2 component, one component one responding way

1** KeyBoardMoveView**

respond to moving view up

2 **KeyBoardResizeView**

respond to reducing view's height

##How to use it

1. `npm install react-native-sk-keyboard-responder@latest --save`

2. use KeyBoardMoveView

Move view up when keyboard show, move view down when keyboard hide

Change view's position, not change any view's size

```javascript

 'use strict';
 import React, {
   AppRegistry,
   StyleSheet,
   Text,
   TextInput,
   View
 } from 'react-native';

 var {KeyBoardMoveView} = require('react-native-sk-keyboard-responder');

 var test = React.createClass({
   getList: function(){
     var list = [];
     for (var i = 0; i < 10; i++) {
       list.push(<Text key={i} style={styles.item}>{'项目 ' + i}</Text>)
     }
     return list;
   },
   render: function(){
     return (
       <View style={styles.container}>
        <View style={styles.listBox}>
          {this.getList()}
        </View>
        <KeyBoardMoveView style={styles.inputBox}>
          <TextInput
            style={styles.input}
            placeholderTextColor='#AFAFAF'
            placeholder=' 期待您的评论, 让这个世界更美好'
            />
        </KeyBoardMoveView>
       </View>
     )
   },
 });


 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: 'grey',
   },
   listBox: {
     flex: 1,
     justifyContent: 'space-around',
   },
   item: {
     fontSize: 17,
   },
   inputBox: {
     height: 50,
     margin: 5,
     borderWidth:1,
     borderColor:'#E1E1E1',
     borderRadius: 5,
     backgroundColor:'#FFF',
   },
   input: {
    flex: 1,
    fontSize:14,
   }
 });

 AppRegistry.registerComponent('test', () => test);

```
![](https://raw.githubusercontent.com/shigebeyond/react-native-sk-keyboard-responder/master/demo-move-up.gif)

---------------------------------------------------------------------------------------------------------

3. use KeyBoardResizeView

Reduce view's height when keyboard show, expand view's height when keyboard hide

Change view's size, not change view's position

```javascript
 'use strict';
 import React, {
   AppRegistry,
   StyleSheet,
   Text,
   TextInput,
   View
 } from 'react-native';

 var {KeyBoardResizeView} = require('react-native-sk-keyboard-responder');

 var test = React.createClass({
   getList: function(){
     var list = [];
     for (var i = 0; i < 10; i++) {
       list.push(<Text key={i} style={styles.item}>{'项目 ' + i}</Text>)
     }
     return list;
   },
   render: function(){
     return (
      <KeyBoardResizeView style={styles.container}>
        <View style={styles.listBox}>
          {this.getList()}
        </View>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            placeholderTextColor='#AFAFAF'
            placeholder=' 期待您的评论, 让这个世界更美好'
            />
        </View>
      </KeyBoardResizeView>
     )
   },
 });


 const styles = StyleSheet.create({
   container: {
    //  flex: 1,
     backgroundColor: 'grey',
   },
   listBox: {
     flex: 1,
     justifyContent: 'space-around',
   },
   item: {
     fontSize: 17,
   },
   inputBox: {
     height: 50,
     margin: 5,
     borderWidth:1,
     borderColor:'#E1E1E1',
     borderRadius: 5,
     backgroundColor:'#FFF',
   },
   input: {
    flex: 1,
    fontSize:14,
   }
 });

AppRegistry.registerComponent('test', () => test);

```
![](https://raw.githubusercontent.com/shigebeyond/react-native-sk-keyboard-responder/master/demo-reduce-height.gif)

##Properties

Any [View property](http://facebook.github.io/react-native/docs/view.html) and the following:

| Prop | Description | Default |
|---|---|---|
|**`initHeight`**|Set view's height before keyboard show up, only for KeyBoardResizeView. For example, when you render the view under NavigatorBar, you maybe want less height |*None*|
