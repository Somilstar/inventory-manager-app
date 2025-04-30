📦 Inventory Management App
This is a React Native application designed to help users efficiently manage and track inventory items. It provides features to view all items, filter low-stock items, and perform CRUD operations (Create, Read, Update, Delete) on inventory entries. The app also uses dynamic styling to visually indicate low-stock items for quick decision-making.

✨ Features
📋 View all stock items

🚨 Filter and highlight low-stock items (red for low stock, green otherwise)

➕ Add new inventory items

📝 Edit existing items

❌ Delete items

🔄 Real-time UI updates with state management

🛠️ Technologies Used
React Native

JavaScript

Expo (for development and testing)

📱 Screens
Home Screen – View all items or filter low-stock

Create Screen – Add new inventory items with name and stock count

Dynamic Styling – Items with stock below threshold show up in red

🚀 How to Run


## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.


