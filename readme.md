# Ionic Weather App

This is an Ionic application that uses the openweathermap api to get weather and forecast information by current location.

## Usage

### Settings

Add your openweathermap API_KEY in enviroment file (src/enviroments/enviroment)

```sh
$ cd src/enviroments/
-- enviroment.prod.ts | enviroment.ts
...
$ apiKey: 'xxxxyyyyzzzz1234'
...
```

### Installation

Access to directory

```sh
$ weatherApp
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
