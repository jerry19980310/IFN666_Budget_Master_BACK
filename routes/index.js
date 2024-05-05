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

router.put('/api/category/modify/:Category_ID', async (req, res) => {

  const existingCategory = await req.db('category').where('id', req.params.Category_ID).first();
    if (!existingCategory) {
      return res.status(404).json({ error: 'Category not found' });
    }

  try {
    const { name } = req.body;
    await req.db('category').where('id', req.params.Category_ID).update({name});
    res.status(200).json({ message: 'Category name updated successfully' });
  } catch (error) {
    console.error('Error updating category name:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.delete("/api/category/delete/:Category_ID", async (req, res) => {

  try {
    await req.db('category').where('id', req.params.Category_ID).del();
    res.status(200).json({ message: 'Category deleted successfully' });
  } catch (error) {
    console.error('Error updating category name:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



module.exports = router;
