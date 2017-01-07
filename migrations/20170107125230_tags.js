
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists("tags", function(table){
    table.increments();
    table.string("tag");
    table.integer("entry_id")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("tags")
};
