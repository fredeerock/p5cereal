int ledPin = 13;            // the pin that the LED is attached to
int incomingByte;           // a variable to read incoming serial data into

void setup() {
  Serial.begin(9600);       // initialize serial communications
  pinMode(ledPin, OUTPUT);  // initialize the LED pin as an output
}
 
void loop() {
  int potentiometer = analogRead(A0);					// read the input pin
  int mappedPot = map(potentiometer, 0, 1023, 0, 255);	// remap the pot value to fit in 1 byte
  // Serial.println(potentiometer);						// Print out a string to the serial port. Use with serial.readStringUntil("\r\n") in p5.
  Serial.write(mappedPot);								// Print out a byte to the serial port. Use with serial.read in p5.

  if (Serial.available() > 0) {   // see if there's incoming serial data
    incomingByte = Serial.read(); // read it
    
    if (incomingByte == 'H') {    // if it's a capital H (ASCII 72),
      digitalWrite(ledPin, HIGH); // turn on the LED
    }

    if (incomingByte == 'L') {    // if it's an L (ASCII 76)
      digitalWrite(ledPin, LOW);  // turn off the LED
    }
  }

}
