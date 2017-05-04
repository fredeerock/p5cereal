// Serial port global variables

var serial;                               // Variable to hold instance of serialport library
var portName = '/dev/cu.usbmodem1411';    // Fill in  serial port name here

// Serial data global variables

var inData;                               // For incoming serial data
var outData;                              // For outgoing serial data

// Setup the serial port for communication

function setup() {
  serial = new p5.SerialPort();           // Make new instance of serialport library
  serial.on('data', serialEvent);         // Callback when new data arrives
  serial.on('error', serialError);        // Callback for errors
  serial.open(portName);                  // Open serial port
}

// Error Logging

function serialError(err) {
  console.log('Something went wrong with the serial port:', err);
}

// Read data from the serial port

function serialEvent() {
  inData = serial.read();                   // Read *bytes* from serial port. Used with serial.write from the Arduino.
  // inData = serial.readStringUntil("\r\n");  // Read *strings* from the serial port. Used with serial.println from the Arduino.
  console.log(inData);                      // Log incoming data
}

// Write data to the serial port

function keyPressed() {
  outData = key; 
  console.log("Writing to Serial Port", outData);
  serial.write(outData);                    // Send data out the serial port
}