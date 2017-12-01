'use strict';


var mongoose = require('mongoose'),
Repas = mongoose.model('Repas');

exports.find_all_repas = function(req, res) {
  Repas.find({}, function(err, repas) {
    if (err)
      res.send(err);
    res.json(repas);
  });
};

exports.create_repas = function(req, res) {
  var new_repas = new Repas(req.body);
  new_repas.save(function(err, repas) {
    if (err)
      res.send(err);
    res.json(repas);
  });
};


exports.find_repas = function(req, res) {
  Repas.findById(req.params.repasId, function(err, repas) {
    if (err)
      res.send(err);
    res.json(repas);
  });
};


exports.update_repas = function(req, res) {
  Repas.findOneAndUpdate({_id: req.params.repasId}, req.body, {new: true}, function(err, repas) {
    if (err)
      res.send(err);
    res.json(repas);
  });
};


exports.delete_repas = function(req, res) {
  Repas.remove({
    _id: req.params.repasId
  }, function(err, repas) {
    if (err)
      res.send(err);
    res.json({ message: 'Repas supprime avec succes' });
  });
};
