
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tags').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('tags').insert({id: 1, tag: 'JavaScript'}),
        knex('tags').insert({id: 2, tag: 'Kata'}),
        knex('tags').insert({id: 3, tag: 'Database'}),
        knex('tags').insert({id: 4, tag: 'Personal Project'}),
        knex('tags').insert({id: 5, tag: 'Conways'})
      ]);
    });
};
