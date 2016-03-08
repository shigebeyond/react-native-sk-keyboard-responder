'use strict';

var React = require('react-native');
var {
    Animated,
    Easing,
    DeviceEventEmitter,
    View
} = React;

/**
* ios 根据键盘的显示或隐藏，来移动View, 一般用于前置弹层的表单
* 通过设置 bottom 属性，不改变组件高度，而让组件整体向上抬高，从而让出底部显示键盘
* 当隐藏键盘时，组件bottom = 0，当显示键盘时，组件bottom = 键盘高度
*/
var KeyBoardMoveView = React.createClass({
  listeners: null,
  getInitialState: function() {
    return {
      bottom: new Animated.Value(0), // 控制输入框的位置
    }
  },
  componentDidMount: function(){
    // 监听键盘事件
    var l1 = DeviceEventEmitter.addListener('keyboardWillShow', (frames) => this.onFormMove(frames, true)); // 显示
    var l2 = DeviceEventEmitter.addListener('keyboardWillHide', (frames) => this.onFormMove(frames, false)); // 隐藏
    var l3 = DeviceEventEmitter.addListener('keyboardWillChangeFrame', (frames) => this.onFormMove(frames, true)); // 显示
    this.listeners = [l1, l2, l3];
  },
  componentWillUnmount: function(){
    // 删除监听
    // DeviceEventEmitter.removeAllListeners('keyboardWillShow');
    // DeviceEventEmitter.removeAllListeners('keyboardWillHide');
    // DeviceEventEmitter.removeAllListeners('keyboardWillChangeFrame');
    // 为了不影响其他组件的事件绑定, 因此我们单独删除指定监听, 而不是删除所有监听
    this.listeners.forEach((l) => {
      // 删除单个监听
      //DeviceEventEmitter._subscriber.removeSubscription(l)
      l.remove()
    })
  },
  /**
  * 处理表单移动
  * @param frames
  * @param visible 键盘是否显示
  */
  onFormMove: function(frames, visible){
    // console.log(visible);
    // console.log(frames);

    // 执行表单抬高的动画
    Animated.timing(
      this.state.bottom,
      {
        easing: Easing.linear,
        toValue: visible ? frames.endCoordinates.height : 0,
        duration: frames.duration,
      }
    ).start();
    // this.state.bottom.setValue(frames.end.height);
  },
  render: function(){
    return (
      <Animated.View style={[this.props.style, {bottom: this.state.bottom}]}>
        {this.props.children}
      </Animated.View>
    )
  }
});

module.exports = KeyBoardMoveView;
