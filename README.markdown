# REACT CERAMIC :lock: :rocket: :nail_care:

![GitHub CI](https://github.com/angeldollface/react-ceramic/actions/workflows/react.yml/badge.svg)

***An IMEI validator written in React. :lock: :rocket: :nail_care:***

## ABOUT :books:

Since I was trying to figure out the algorithm for validating IMEI numbers for a uni course, I thought I'd write a small app that solves this interesting problem. This little app checks whether the IMEI number of any one of your devices is valid or not by computing the check digit and comparing this to the actual check digit. The "Luhn Algorithm" is used to
do this. I wrote this once using Vue [here](https://github.com/angeldollface/ceramic/). This is the implementation of the very same app using React.

## DEPLOYED PROJECT ON GITHUB PAGES :rocket:

To view a live deployed version of this project, click here: [VIEW](https://angeldollface.boo/react-ceramic)

## USAGE :hammer:

- 1.) Visit [this link](https://angeldollface.boo/react-ceramic).
- 2.) Get the IMEI for your device from the instructions for your platform. (You might have to scroll a bit.)
- 3.) Copy this IMEI number or write it down.
- 4.) Put the number into the input field.
- 5.) Click "VALIDATE"!
- 6.) Receive the status of your IMEI number from the text below the "VALIDATE" button that says `IMEI valid: Type something!`.

Note: You can use this fake IMEI for testing: `356728113476259`

## TRY THIS PROJECT ON YOUR OWN MACHINE! :inbox_tray:

To try this project locally, make sure you have the following tools installed and available from the command line:

- Node.js
- Git

Once you have these tools installed, execute these steps:

- 1.) Get the source code:

```bash
$ git clone https://github.com/angeldollface/react-ceramic
```

- 2.) Change directory into the source's root directory:

```bash
$ cd react-ceramic
```

- 3.) Install the project's dependencies:

```bash
$ npm install
```

- 4.) Run React's development server:

```bash
$ npm start
```

- 5.) Optional: To compile this project, run this command:

```bash
$ npm run build
```


## CHANGELOG :black_nib:

### Version 1.0.0

- Initial release.
- Upload to GitHub.
- Deployment on GitHub Pages.

## NOTE :scroll:

- *React Ceramic :lock: :rocket: :nail_care:* by Alexander Abraham :black_heart: a.k.a. *"Angel Dollface" :dolls: :ribbon:*
- Licensed under the MIT license.