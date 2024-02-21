// import { controllers } from '../Model/db.js';
import { getAllFriends, addFriend, deleteFriend, getFriend, editFriend } from '../Model/db.js';



export default {
    allFriends : async (req, res) => {
        res.send(await getAllFriends(req.body.name)); 
    },
 
    deleteFriend : async (req, res) => {
        await deleteFriend(+req.params.id);   
        res.send(await getAllFriends());
    },
    
    addFriendToTable: async (req, res) => {
        const {name, age} = req.body; 

        await addFriend(name, age);

        res.send(await getAllFriends()) 
    },

    getFriendByID : async (req, res) => {
        res.send(await getFriend(+req.params.id));
    }, 

    EditByID : async (req, res) => { 
        console.log(req.params.id)  
        console.log(req.body)  
        const [friend] = await getFriend(+req.params.id);
        let {name, age} = req.body; 
        name ? name : {name} = friend 
        age ? age : {age} = friend
        await editFriend(name, age, +req.params.id) 
        res.send(await getAllFriends()); 
    } 

}

