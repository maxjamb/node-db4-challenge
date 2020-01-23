exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredient_title: "Eggs" },
        { ingredient_title: "Flour" },
        { ingredient_title: "Sugar" },
        { ingredient_title: "Milk" },
        { ingredient_title: "Butter" },
        { ingredient_title: "Baking Powder" },
        { ingredient_title: "Bread" },
        { ingredient_title: "Pastry" },
        { ingredient_title: "Apple" },
        { ingredient_title: "Chocolate" },
        { ingredient_title: "Chicken" }
      ]);
    });
};
