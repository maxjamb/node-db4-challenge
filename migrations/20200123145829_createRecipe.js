exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments("recipe_id");
      tbl
        .string("recipe_title", 128)
        .notNullable()
        .unique();
    })

    .createTable("ingredients", tbl => {
      tbl.increments("ingredient_id");
      tbl
        .string("ingredient_title", 128)
        .notNullable()
        .unique();
      tbl.string("measurement_units");
    })

    .createTable("recipe_ingredient_quantities", tbl => {
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipe_id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("ingredient_id")
        .inTable("ingredients")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.decimal("quantity").notNullable();
    })

    .createTable("instructions", tbl => {
      tbl.increments("instruction_id");
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipe_id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("step_number")
        .unsigned()
        .notNullable();
      tbl.string("content", 128).notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipes")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipe_ingredient_quantities")
    .dropTableIfExists("instructions");
};
