const { default: axios } = require("axios");
const expect = require("chai.js").expect;

describe("Add property", () => {
  before(async () => {});
  after(async () => {});

  it("Should be able to add product", async () => {
    try {
      const response = await axios.post("/api/v1/products", {
        name: "Samsung Galaxy S21",
        brand: "Samsung",
        price: 1000,
        subCategory: "Smartphone",
      });

      expect(response.data.status).to.equal(200);
    } catch (e) {
      console.log(e);
      throw new Error("failed");
    }
  });
});
