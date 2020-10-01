const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtId,
    addThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
  } = require('../../controllers/thought-controller');


// /api/thoughts
router
  .route('/')
  .get(getAllThoughts)
  .post(addThought);

// /api/thoughts/<thoughtId>
router
  .route('/:thoughtId')
  .get(getThoughtId)
  .post(addThought)

// /api/thoughts/<userId>/<thoughtId>
router
  .route('/:userId/:thoughtId')
  .put(updateThought)
  .delete(removeThought)

router.route('/:userId/:thoughtId/:reactionId')
  .post(addReaction)
  .delete(removeReaction);


module.exports = router;