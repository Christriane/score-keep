import React from "react";
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import App from '../imports/ui/App';

import {Players, calculatePlayerPositions} from '../imports/api/players';


Meteor.startup(() => {
  Tracker.autorun(() => {
    let players = Players.find({}, {sort: {score: -1}}).fetch();
    let positionedPlayers = calculatePlayerPositions(players);
    const title = 'Score Keep', subtitle= 'Developed by Christriane Marquez';
    ReactDOM.render(<App title={title} subtitle={subtitle} players={positionedPlayers} />, document.getElementById('app'));
  });
});


