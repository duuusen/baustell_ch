#include <Arduino.h>

#define LED 2
#include <WiFi.h>
#include <HTTPClient.h>
#include <Arduino_JSON.h>
const char *ssid = "HUAWEI-DCE4";
const char *password = "9J0B4BJH221";
const char *urlOfJson = "https://api.npoint.io/e8c29d40ddd7ec77bcea";
int currentState;
int lastState = LOW;
int someOneIsHere = false;
String btos(bool x)
{
  if(x) return "true";
  return "false";
}
boolean getStateFromServer()
{
  if ((WiFi.status() == WL_CONNECTED))
  { // Check the current connection status

    HTTPClient http;

    http.begin(urlOfJson);     // Specify the URL
    int httpCode = http.GET(); // Make the request

    if (httpCode == 200)
    { // Check for the returning code

      String payload = http.getString();

      // {"isSomeoneAtBaustell":boolean}
      JSONVar myObject = JSON.parse(payload);
      http.end(); // Free the resources
      return myObject["isSomeoneAtBaustell"];
    }
    else
    {
      http.end(); // Free the resources
      Serial.println("Error on HTTP request");
      return false;
    }
  }
  else
  {
    Serial.println("Error in WiFi connection");
    return false;
  }
}
// setting the object {"isSomeoneAtBaustell":boolean} on the server with a post request
boolean setStateOnServer(boolean state)
{
  if ((WiFi.status() == WL_CONNECTED))
  {

    HTTPClient http;
    http.begin(urlOfJson);
    http.addHeader("Content-Type", "application/json");
    String payload = "{\"isSomeoneAtBaustell\":" + btos(state) + "}";
    int httpCode = http.POST(payload);
    if (httpCode == 200)
    { // Check for the returning code

      // {"isSomeoneAtBaustell":boolean}
      String payload = http.getString();
      JSONVar myObject = JSON.parse(payload);
      http.end(); // Free the resources
      return myObject["isSomeoneAtBaustell"];
    }

    http.end(); // Free the resources
    Serial.println("Error on HTTP request");

    return false;
  }
   return false;
}

void setup()
{
  // put your setup code here, to run once:
  Serial.begin(115200);
  pinMode(LED, OUTPUT);
  pinMode(21, INPUT_PULLUP);
  delay(1000);

  WiFi.mode(WIFI_STA); // Optional
  WiFi.begin(ssid, password);
  Serial.println("\nConnecting to WIFI");
  while (WiFi.status() != WL_CONNECTED)
  {
    Serial.print(".");
    delay(100);
  }

  Serial.println("\nConnected to the WiFi network");
  Serial.print("Local ESP32 IP: ");
  Serial.println(WiFi.localIP());
  someOneIsHere = getStateFromServer();
}

void loop()
{
  // put your main code here, to run repeatedly:
  int currentState = digitalRead(21);

  digitalWrite(LED, someOneIsHere);
  if (lastState == HIGH && currentState == LOW)
  {
    someOneIsHere = setStateOnServer(!someOneIsHere);
    Serial.println("Someone is here: " + btos(someOneIsHere));
  }
  // else if (lastState == LOW && currentState == HIGH)
  //   Serial.println("The button is released");

  lastState = currentState;
}
