
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists("happiness", function(table){
    table.increments();
    table.string("happ_level");
    table.integer("entry_id")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("happiness")
};
