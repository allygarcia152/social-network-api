// import the methods from the thought-controller file
const router = require("express").Router();
const {
  getAllThoughts,
  getThoughtById,
  addThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controllers");

// Set up GET all and POST at /api/thoughts
router
  .route("/")
  .get(getAllThoughts);

// /api/thoughts/:id
router
  .route("/:id")
  .get(getThoughtById);

// /api/thoughts/<userId>
router
  .route("/:userId")
  .post(addThought);

// /api/thoughts/<userId>/<thoughtId>
router  
  .route("/:userId/:thoughtId")
  .put(updateThought)
  .delete(removeThought);

router
  .route("/:thoughtId/reactions")
  .post(addReaction)
  .delete(removeReaction);

module.exports = router;
