App.info({
  id: 'nz.northernbass',
  name: 'Northern Bass',
  description: 'Get the Official Northern Bass app for 2015/16',
  author: 'FUZEN Entertainment',
  email: 'work@paulgrey.co.nz',
  website: 'http://northernbass.co.nz',
  version: '0.1.5.0'
});

App.accessRule('*.google.com/*');
App.accessRule('*.googleapis.com/*');
App.accessRule('*.gstatic.com/*');
App.accessRule('*.soundcloud.com/*');
App.accessRule('*.sndcdn.com/*');
App.accessRule('northernbassapp.uppercase8.com/*');
App.accessRule('*');
App.accessRule('meteor.local/*');
App.accessRule('*.northernbass.co.nz/*');
   
App.icons({

  // iOS
  'iphone': 'resources/iphone.icon.png',
  'iphone_2x': 'resources/iphone_2x.icon.png',
  'iphone_3x': 'resources/iphone_3x.icon.png',
  'ipad': 'resources/ipad.icon.png',
  'ipad_2x': 'resources/ipad_2x.icon.png',

  // Android
  'android_ldpi': "resources/android_ldpi.icon.png", // 36x36
  'android_mdpi': "resources/android_mdpi.icon.png", // 48x48
  'android_hdpi': "resources/android_hdpi.icon.png", // 72x72
  'android_xhdpi': "resources/android_xhdpi.icon.png" // 96x96
});

App.launchScreens({
  "iphone": "resources/splashes/iphone.png", // 320x245
  "iphone_2x": "resources/splashes/iphone_2x.png", // 640x490
  "iphone5": "resources/splashes/iphone5.png", // 640x1136
  "iphone6": "resources/splashes/iphone6.png", // 750x1334
  "iphone6p_portrait": "resources/splashes/iphone6p_portrait.png", // 2208x1242
  "iphone6p_landscape": "resources/splashes/iphone6p_landscape.png", 

  "ipad_portrait": "resources/splashes/ipad_portrait.png",
  "ipad_portrait_2x": "resources/splashes/ipad_portrait_2x.png",
  "ipad_landscape": "resources/splashes/ipad_landscape.png",
  "ipad_landscape_2x": "resources/splashes/ipad_landscape_2x.png",
  
  "android_ldpi_portrait": "resources/splashes/android_ldpi_portrait.png",
  "android_ldpi_landscape": "resources/splashes/android_ldpi_landscape.png",
  "android_mdpi_portrait": "resources/splashes/android_mdpi_portrait.png",
  "android_mdpi_landscape": "resources/splashes/android_mdpi_landscape.png",
  "android_hdpi_portrait": "resources/splashes/android_hdpi_portrait.png",
  "android_hdpi_landscape": "resources/splashes/android_hdpi_landscape.png",
  "android_xhdpi_portrait": "resources/splashes/android_xhdpi_portrait.png",
  "android_xhdpi_landscape": "resources/splashes/android_xhdpi_landscape.png"
});

App.setPreference('AutoHideSplashScreen', true);


