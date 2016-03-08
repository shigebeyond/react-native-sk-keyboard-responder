# react-native-sk-keyboard-responder

##What is it

react-native-sk-keyboard-responder is a component which wrap a View, and respond to keyboard show up.

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

1 KeyBoardMoveView

respond to moving view up

2 KeyBoardResizeView

respond to reducing view's height

##How to use it

1. install [react-native-image-picker](https://github.com/marcshilling/react-native-image-picker#install)

2. `npm install react-native-sk-keyboard-responder@latest --save`

3. Write this in index.ios.js / index.android.js

```javascript

 AppRegistry.registerComponent('test', () => test);

```
![](https://raw.githubusercontent.com/shigebeyond/react-native-sk-keyboard-responder/master/demo.gif)

##Properties

Any [View property](http://facebook.github.io/react-native/docs/view.html) and the following:

| Prop | Description | Default |
|---|---|---|
|**`pics`**|The selected pictures to show. |*None*|
|**`onChange`**|Callback that is called when the selected pictures changes. |*None*|
|**`maxSelection`**|Max selected picture number. |*None*|
