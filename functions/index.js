// Copyright 2016, Google, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

process.env.DEBUG = 'actions-on-google:*';

const ActionsSdkApp = require('actions-on-google').ActionsSdkApp;
const functions = require('firebase-functions');

const NO_INPUTS = [
  'I didn\'t hear that.',
  'If you\'re still there, say that again.',
  'We can stop here. See you soon.'
];

exports.sayNumber = functions.https.onRequest((request, response) => {
  const app = new ActionsSdkApp({request, response});

  function mainIntent (app) {
    console.log('mainIntent');
    let inputPrompt = app.buildInputPrompt(true, '<speak>Hi! <break time="1"/> ' +
      'I can read out an ordinal like ' +
      '<say-as interpret-as="ordinal">123</say-as>. Say a number.</speak>', NO_INPUTS);
    app.ask(inputPrompt);
  }

  function rawInput (app) {
    console.log('rawInput');
    if (app.getRawInput() === 'bye') {
      app.tell('Goodbye!');
    } else {
      let inputPrompt = app.buildInputPrompt(true, '<speak>You said, <say-as interpret-as="ordinal">' +
        app.getRawInput() + '</say-as></speak>', NO_INPUTS);
      app.ask(inputPrompt);
    }
  }

  let actionMap = new Map();
  actionMap.set(app.StandardIntents.MAIN, mainIntent);
  actionMap.set(app.StandardIntents.TEXT, rawInput);

  app.handleRequest(actionMap);
});
