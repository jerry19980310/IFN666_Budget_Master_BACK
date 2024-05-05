const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use(bodyParser.json());

router.get("/api/category/:User_ID", async (req, res) => {
  try {
    const categories = await req.db
      .from("category")
      .select("ID", "name")
      .where("user_id", req.params.User_ID);
    res.json({ error: false, categories });
  } catch (error) {
    res.json({ error: true, message: error });
  }
});


// 处理POST请求
router.post('/api/category/create', async (req, res) => {
  try {
    const { name, user_id } = req.body;
    await req.db.insert({ name, user_id }).into('category');;
    res.status(201).json({ message: 'Data inserted successfully' });
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});




module.exports = router;
