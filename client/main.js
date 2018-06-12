import React from "react";
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import App from '../imports/ui/App';

import {Players} from '../imports/api/players';


Meteor.startup(() => {
  Tracker.autorun(() => {
    let players = Players.find().fetch();
    const title = 'Score Keep';
    ReactDOM.render(<App title={title} players={players} />, document.getElementById('app'));
  });
});


