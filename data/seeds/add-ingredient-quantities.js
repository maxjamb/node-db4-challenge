exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipe_ingredient_quantities")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipe_ingredient_quantities").insert([
        { recipe_id: 1, ingredient_id: 1, quantity: "2 large" }
      ]);
    });
};
