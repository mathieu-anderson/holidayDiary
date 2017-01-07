
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists("entries", function(table){
    table.increments();
    table.string("date");
    table.string("entry");
    table.string("state")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("entries")
};
