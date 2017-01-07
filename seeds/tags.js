
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tags').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('tags').insert({id: 1, tag: 'JavaScript', entry_id: 1}),
        knex('tags').insert({id: 2, tag: 'JavaScript', entry_id: 2}),
        knex('tags').insert({id: 3, tag: 'JavaScript', entry_id: 3}),
        knex('tags').insert({id: 4, tag: 'Kata', entry_id: 1}),
        knex('tags').insert({id: 5, tag: 'Kata', entry_id: 2}),
        knex('tags').insert({id: 6, tag: 'Kata', entry_id: 3}),
        knex('tags').insert({id: 7, tag: 'Database', entry_id: 1}),
        knex('tags').insert({id: 8, tag: 'Personal Project', entry_id: 1}),
        knex('tags').insert({id: 9, tag: 'Conways', entry_id: 3})
      ]);
    });
};
