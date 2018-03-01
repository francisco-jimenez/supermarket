

import {Accounts}       from 'meteor/accounts-base'
import { Meteor }       from 'meteor/meteor'

Meteor.methods({
    createUserInServer: function (email, password) {
          Accounts.createUser({ email, password})
          console.log('entra')
    }



})
