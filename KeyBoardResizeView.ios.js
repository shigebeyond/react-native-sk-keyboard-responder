'use strict';

var React = require('react-native');
var {
    Animated,
    Easing,
    DeviceEventEmitter,
    View,
    Dimensions,
    PropTypes
} = React;
var screen = Dimensions.get('window'),
    com = require('./common');

/**
* ios 根据键盘的显示或隐藏，来收缩View, 一般用于前置弹层的表单
* 通过设置 height 属性，减少组件高度，收缩组件，从而让出底部来显示键盘
* 当隐藏键盘时，组件高度=屏幕高度，当显示键盘时，组件高度=屏幕高度-键盘高度
*/
var KeyBoardResizeView = React.createClass({
  listeners: null,
  propTypes: {
    initHeight: PropTypes.number, // 初始高度
    hasNavBar: PropTypes.bool, // 是否有导航栏
  },
  getInitialState: function() {
    // 获得初始高度，缺省为屏幕高度
    this.initHeight = this.props.initHeight;
    if(!this.initHeight){
      if(this.props.hasNavBar){
        this.initHeight = screen.height - com.navBarHeight.TotalNavHeight;
      }else{
        this.initHeight = screen.height;
      }
    }
    return {
      height: new Animated.Value(this.initHeight), // 控制输入框的位置
    }
  },
  componentDidMount: function(){
    // 监听键盘事件
    var l1 = DeviceEventEmitter.addListener('keyboardWillShow', (frames) => this.onFormResize(frames, true)); // 显示
    var l2 = DeviceEventEmitter.addListener('keyboardWillHide', (frames) => this.onFormResize(frames, false)); // 隐藏
    var l3 = DeviceEventEmitter.addListener('keyboardWillChangeFrame', (frames) => this.onFormResize(frames, true)); // 显示
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
  * 处理表单收缩
  * @param frames
  * @param visible 键盘是否显示
  */
  onFormResize: function(frames, visible){
    // console.log(visible);
    // console.log(frames);

    // 执行表单收缩的动画
    Animated.timing(
      this.state.height,
      {
        easing: Easing.linear,
        toValue: visible ? this.initHeight - frames.endCoordinates.height : this.initHeight,
        duration: frames.duration,
      }
    ).start();
    // this.state.height.setValue(this.initHeight - frames.end.height);
  },
  render: function(){
    return (
      <Animated.View style={[this.props.style, {height: this.state.height}]}>
        {this.props.children}
      </Animated.View>
    )
  }
});

module.exports = KeyBoardResizeView;
