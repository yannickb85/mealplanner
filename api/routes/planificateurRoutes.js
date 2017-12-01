'use strict';
module.exports = function(app) {
  var planificateur = require('../controllers/planificateurController');

  // planificateur routes
  app.route('/repas')
    .get(planificateur.find_all_repas)
    .post(planificateur.create_repas);


  app.route('/repas/:repasId')
    .get(planificateur.find_repas)
    .put(planificateur.update_repas)
    .delete(planificateur.delete_repas);
};
