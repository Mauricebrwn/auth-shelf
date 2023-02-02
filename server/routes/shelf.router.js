const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * Get all of the items on the shelf
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  pool
    .query(`
    SELECT * FROM "item";` )
    .then((results) => res.send(results.rows))
    .catch((error) => {
      console.log('Error making SELECT for shelf:', error);
      res.sendStatus(500);
    }); 
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
  const description = req.body.description
  const user_id= req.body.user_id
  const image = req.body.image
  const sqlQuery =`
  INSERT INTO "item"
  ("description", "image_url", "user_id")
  VALUES
($1,$2,$3);
  `
  const sqlValues = [description, image, user_id]
  pool.query(sqlQuery,sqlValues)
  .then((dbres)=>{
    res.sendStatus(201);

  })
  .catch((error)=>{
    res.sendStatus(500);
  })
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  const id = req.params.id
  let sqlQuery = `
  DELETE FROM "item"
  WHERE id = $1;
  `
  const sqlVal = [id]
  pool.query(sqlQuery, sqlVal)
  .then((dbRes) => {res.sendStatus(200)})
    .catch((error) => {
      console.log('Error making DELETE for shelf:', error);
      res.sendStatus(500);
    }); 
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
