
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('happiness').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('happiness').insert({id: 1, happ_level: 'high happiness'}),
        knex('happiness').insert({id: 2, happ_level: 'medium happiness'}),
        knex('happiness').insert({id: 3, happ_level: 'low happiness'})
      ]);
    });
};
