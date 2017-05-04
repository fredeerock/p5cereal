# p5cereal

This node module helps build a scaffold for setting up serial communication between p5.js and Arduino. It creates a simple p5 website and Arduino sketch and also serves up the content via a local web server. Live reload is also included to help ease the development process. 

### Dependencies

To start you'll need to [install Node.js](https://nodejs.org/en/download/) if you don't already have it. 

### Usage

If you're creating a new project you can run the following command to build out your directories and download the latest libraries:

`npm init -y && npm install`

To then serve the content with live reload and serial communication use:

`npm start`

Lastly, visit http://localhost:8000. 

*Note: You have to shutdown the server to release the serial port anytime you need to update the Arduino code.*

