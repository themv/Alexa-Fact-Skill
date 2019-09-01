'use strict';
var Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.  
//Make sure to enclose your value in quotes, like this: var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
var APP_ID = "amzn1.ask.skill.1aef5c69-eb74-45e0-b6be-522ab20ba7ae";

var SKILL_NAME = "Telangana Facts";
var GET_FACT_MESSAGE = "Here's your fact: ";
var HELP_MESSAGE = "You can say tell me a telangana fact, or, you can say exit... What can I help you with?";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
var data = [
    "The state, Telangana was officially formed on 2 June 2014.",
    "Hyderabad is the capital city of Telangana.",
    "Kalvakuntla Chandrashekar Rao was elected as the first chief minister of Telangana.",
    "Telangana has an area of 112,077 square kilometres , and a population of 35,193,978 (2011 census).",
    "The literacy rate of Telangana State is around 66.46%.",
    "Telangana had a history as the Telugu-speaking region of the princely state of Hyderabad, ruled by the Nizam of Hyderabad.",
    "Ekkadu Srinivasan Lakshmi Narasimhan is the governer of Telangana State.",
    "There are 31 districts in Telangana.",
    "Jinka (Deer) is the state animal of Telangana.",
    "Telugu and Urdu are the official languages of Telangana.",
    "Palapittta (Indian Roller or Blue Jay) is the state bird of Telangana.",
    "Jammmi Chettu (Prosopis Cineraria) is the state tree of Telangana.",
    "Professor Jayashankar was the ideologue of Telangana Movement.",
	"Sri Shailendra Kumar Joshi is the Honorable Chief Secretary of Telangana State."
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.  
//=========================================================================================================================================
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('AMAZON.HelpIntent');
    },
	'Unhandled': function() {
        this.emit(':ask', 'Sorry I didnt understand that. Say help for assistance.');
    },
    'GetNewFactIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
	'SessionEndedRequest': function () {
        console.log('Session Ended!');
    }
};
