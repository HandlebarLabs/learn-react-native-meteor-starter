The complete example app to go along with [Learn React Native + Meteor](http://handlebarlabs.teachable.com/p/react-native-meteor). A detailed overview and getting started guide is available in the course.

## Getting Started

- [Install Meteor](https://www.meteor.com/install)
- [Install React Native](https://facebook.github.io/react-native/docs/getting-started.html#content) and its dependencies

### Meteor

- `cd meteor`
- `meteor npm install`
- `meteor`

### iOS Simulator

- `cd react-native`
- `react-native run-ios`

### Android Simulator/Emulator

* Make sure the simulator/emulator is already running

- `cd react-native`
- Change `localhost` to your machine's IP address in `react-native/app/config/config.js`
- `react-native run-android`

### iOS Device

- `cd react-native`
- Connect your device via USB
- Change `localhost` to your machine's IP address in `react-native/app/config/config.js`
- `adb reverse tcp:8081 tcp:8081`
- `react-native run-ios`

### Android Device

- `cd react-native`
- Connect your device via USB
- Change `localhost` to your machine's IP address in `react-native/app/config/config.js`
- `adb reverse tcp:8081 tcp:8081`
- `react-native run-android`
