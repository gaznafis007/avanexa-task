const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const categories = require("./API/list_category.json");
const products = require("./API/list_products.json");
const models = require("./API/list_models.json");
const brands = require("./API/list_brand.json");
const faqs = require("./API/list_faq.json");
const faqCategory = require("./API/faq_category.json");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Products API is running");
});
app.get("/products", (req, res) => {
  let category = req.query.category;
  let model = req.query.model;
  if (req.query.category) {
    let newProducts = products.filter(
      (product) => product.product_category_name === category
    );
    res.send(newProducts);
  }
  if (req.query.model) {
    console.log(model);
    newProducts = products.filter(
      (product) => product.product_model_name === model
    );
    res.send(newProducts);
  } else {
    res.send(products);
  }
});
app.get("/categories", (req, res) => {
  res.send(categories);
});
app.get("/models", (req, res) => {
  res.send(models);
});
app.get("/brands", (req, res) => {
  res.send(brands);
});
app.get("/faq", (req, res) => {
  const faqCategory = req.query.faqCategory;
  if (req.query.faqCategory) {
    let newFaq = faqs.filter((faq) => faq.name === faqCategory);
    res.send(newFaq);
  } else {
    res.send(faqs);
  }
});
app.get("/faqCategory", (req, res) => {
  res.send(faqCategory);
});

app.listen(port, () => {
  console.log(`API is running on port: ${port}`);
});
