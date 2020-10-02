const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtId,
    addThought, //push thought to user
    updateThought,
    removeThought,
    addReaction,
    removeReaction
  } = require('../../controllers/thought-controller');


// /api/thought
router
  .route('/')
  .get(getAllThoughts);

// /api/thought/:userID
router  
  .route('/:userId')
  .post(addThought);

// /api/thought/<thoughtId>
router
  .route('/:thoughtId')
  .get(getThoughtId)
  .put(updateThought)

//api/thought/:userId/:thoughtId:
router
  .route('/:userId/:thoughtId')
  .delete(removeThought);


router.route('/:thoughtId/reactions')
  .post(addReaction);

router.route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);

module.exports = router;