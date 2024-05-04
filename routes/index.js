const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get("/api/category/:User_ID", async (req, res) => {
  try {
    const categories = await req.db
      .from("category")
      .select("name")
      .where("user_id", req.params.User_ID);
    res.json({ error: false, categories });
  } catch (error) {
    res.json({ error: true, message: error });
  }
});

router.get("/api/city/:CountryCode", async (req, res) => {
  try {
    const [cities] = await req.db.query(
      "SELECT name, district FROM city WHERE CountryCode = ? ",
      [req.params.CountryCode]
    );
    res.json({ error: false, cities });
  } catch (error) {
    res.json({ error: true, message: error });
  }
});



module.exports = router;
