
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('happiness').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('happiness').insert({id: 1, happ_level: 'high happiness', entry_id:1}),
        knex('happiness').insert({id: 2, happ_level: 'medium happiness', entry_id:2}),
        knex('happiness').insert({id: 3, happ_level: 'medium happiness', entry_id:3}),
        knex('happiness').insert({id: 4, happ_level: 'low happiness', entry_id:0})
      ]);
    });
};
