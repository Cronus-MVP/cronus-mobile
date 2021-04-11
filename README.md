# Cronus

Cronus offers a appointment scheduling platform for small business to avoid huge crowds at stores. It helps the potential customers skip the line by booking an appointment ahead of time. This project is the Cronus Mobile/Web Application built using React Native.

## Target

This project targets the Android and iOS mobile operating systems.

For Android, the minimum SDK for this project in found in Android Manifest folder while for ios, the target framework is inidicated in the Info.plist file.

## Getting Started

### Prerequisites

For this project, you may use the Node Package Manager, NPM, or Yarn. We prefer you use Yarn.

- [Install Yarn on macOS](https://classic.yarnpkg.com/en/docs/install/#mac-stable)

As this is a React Native Project, yuou'll need to install the RN CLI

- [React Native CLI](https://reactnative.dev/docs/environment-setup) under `React Native CLI Quickstart`

You'll also need to install Xcode (for IOS development) and Android development environment environment

- [Xcode](https://facebook.github.io/react-native/docs/getting-started#xcode)
- [Android](https://facebook.github.io/react-native/docs/getting-started#android-development-environment)

CocoaPods is a package management tool for iOS and macOS development. We use it to add the actual React Native framework code locally into your current project. We recommend installing CocoaPods using Homebrew.
`brew install cocoapods`

- Lastly, clone the repository to your computer

### Installing

### Install Dependancies

To setup the development environment, install all dependencies.

```
cd cronus-mobile
yarn
```

### Set up Cocoapods in ios

```
cd ios
pod install
```

### Run in development

`yarn start`

### Run in Android Emulator/Device

`yarn run android`

### Run in iOS Emulator/Device

`yarn run ios`

## Running the tests

```
yarn test
```

### Updating failing tests due to failed snapshots

```
yarn test:update
```

### And coding style tests

```
yarn lint
```

## Built With

- [React-Native](https://reactnative.dev/) - The web framework used