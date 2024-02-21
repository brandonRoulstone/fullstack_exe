import express from 'express';
import controllers from '../Controller/friendsController.js';
// import authenticate from '../Middleware/auth.js';
  
const router = express.Router();

router.route('/')

    .get(controllers.allFriends)
    .post(controllers.addFriendToTable);


router.route('/:id')
    .get(controllers.getFriendByID)
    .delete(controllers.deleteFriend)
    .patch(controllers.EditByID) 

export default router;