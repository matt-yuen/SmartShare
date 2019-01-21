exports.handler = async event => {
  let request = event.request;

  let response = null;

  if (request.type === "LaunchRequest") {
    response = {
      version: "string",
      response: {
        outputSpeech: {
          type: "PlainText",
          text: "Welcome to smartshare!"
        },
        reprompt: {
          outputSpeech: {
            type: "PlainText",
            text: "Plain text string to speak"
          }
        },
        shouldEndSession: true
      }
    };
  } else if (request.type === "IntentRequest") {
    if (request.intent.name === "begin" || request.intent.name === "repeat") {
      response = {
        version: "string",
        response: {
          outputSpeech: {
            type: "PlainText",
            text:
              "The available cars within 2 kilometers are. One: Tesla Model 3, year 2016. Two: a BMW i5, year 2018. Three: a Ford Focus, year 2018. Four: a Lexus RX 350, year 2017. Four: Tesla Model S 85D, year 2018. Please choose a car."
          },
          reprompt: {
            outputSpeech: {
              type: "PlainText",
              text: "lol dood"
            }
          },
          shouldEndSession: true
        }
      };
    } else {
      response = {
        version: "string",
        response: {
          outputSpeech: {
            type: "PlainText",
            text:
              "You have chosen car number" + request.intent.slots.number.value
          },
          reprompt: {
            outputSpeech: {
              type: "PlainText",
              text: "lol dood"
            }
          },
          shouldEndSession: true
        }
      };
    }
  }

  // TODO implement

  return response;
};
