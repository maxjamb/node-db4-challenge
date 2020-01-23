exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { recipe_title: "Apple Pie" },
        { recipe_title: "Eggs and Toast" },
        { recipe_title: "Cookies" },
        { recipe_title: "Chocolate Cake" },
        { recipe_title: "Roast Chicken & Veg" }
      ]);
    });
};
