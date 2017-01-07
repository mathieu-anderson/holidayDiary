
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists("tags", function(table){
    table.increments();
    table.string("tag")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("tags")
};
