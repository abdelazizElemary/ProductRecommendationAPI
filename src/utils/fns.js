const { products, users } = require("./data"); // Adjust the path as needed

function getUserById(userId) {
  return users.find((user) => user.id === userId);
}

function matches(user) {
  const matches = products
    .map((product) => {
      let score = 0;
      if (user.preferences.subCategories.includes(product.subCategory)) {
        score += 2;
      }
      if (user.preferences.brands.includes(product.brand)) {
        score += 1;
      }
      return { product, score };
    })
    .filter((match) => match.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((match) => match.product);

  return matches;
}

module.exports = {
  matches,
  getUserById,
};
