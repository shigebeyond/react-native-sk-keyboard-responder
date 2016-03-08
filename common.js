'use strict';

var React = require('react-native');
/**
 * 导航栏高度
 * ios: 导航栏 44 / 状态栏 20 / 总 46, 详情参照 NavigatorNavigationBarStylesIOS
 * android: 导航栏 56 / 状态栏 0 / 总 56, 详情参照 NavigatorNavigationBarStylesAndroid
 */
// var NavigatorNavigationBarStyles = React.Platform.OS === 'android' ?
//   require('NavigatorNavigationBarStylesAndroid') : require('NavigatorNavigationBarStylesIOS');
var NavigatorNavigationBarStyles = React.Navigator.NavigationBar.Styles;

var com = {
  //边框颜色
  borderColor:'#F3F3F3',
  navBarHeight: NavigatorNavigationBarStyles.General, // 导航栏相关的高度: 1 NavBarHeight 导航栏 2 StatusBarHeight 状态栏 3 TotalNavHeight 总
  tabBarHeight: 48, // tabbar高度
  navBar:{
    tintColor:'#FFF',
    barTintColor:'#FF2700',
    titleTextColor:'#FFF'
  },
};

module.exports = com;
