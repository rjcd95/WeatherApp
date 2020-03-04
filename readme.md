# Ionic Weather App

This is an Ionic application that uses the openweathermap api to get weather and forecast information by current location. 

## Features
- Use 2 tabs:
  - Current Weather
  - Forecast (Show info for 5 days every 3 hours).
- Use OpenWeatherMap API.
- Get current location (Web browsers and mobile devices).
- Use default coordinates in case of location permission are disabled.
- Implement skeleton effect while data is loading.
- Implement "pull to refresh" effect to reload data.
- Use custom image for weather state.
- Show current location at bottom of the main view (above tabs bar).

## Usage

### Settings

Add your openweathermap API_KEY in enviroment file (src/enviroments/enviroment)

```sh
$ cd src/enviroments/ - enviroment.prod.ts | enviroment.ts
...
$ apiKey: 'xxxxyyyyzzzz1234'
...
```

### Installation

Access to directory

```sh
$ cd weatherApp
```

Install the dependencies

```sh
$ npm install
```

### Serve

To serve in the browser

```sh
$ ionic serve
```

### To Add Platforms

```sh
$ ionic build
$ ionic capacitor add android
$ ionic capacitor add ios
```

### Run Platforms

```sh
$ npx cap open android
$ npx cap open ios
```

### Run test

```sh
$ npm test
```
