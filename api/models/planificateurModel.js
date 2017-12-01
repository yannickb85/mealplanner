'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RepasSchema = new Schema({
    nom: {
        type: String,
        required: 'Entrez le nom du repas'       
    },

    ingredientPrincipal: {
        type: [{
            type: String,
            enum: ['boeuf haché', 'poulet', 'pâtes', 'porc', 'veau']
        }]
    },

    tsCreation: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Repas', RepasSchema);