import { pool } from "../Config/config";


const getAllFriends = async () => {
    const [result] = await pool.query(`
    SELECT * FROM the_boys
    `);

    return result
}

const getFriend = async (id) => {
    const [result] = await pool.query(`
    SELECT * FROM the_boys WHERE id = ?
    `, [id]);

    return result
}

const deleteFriend = async (id) => { 
    const [friend] = await pool.query(`
    DELETE FROM the_boys WHERE id = ?
    `, [id]); 
}

const addFriend = async (name, age) => {
    const [friend] = await pool.query(`
    INSERT INTO the_boys (name, age) VALUES (?, ?)
    `, [name, age]);

    // this will return the entire JSON object of the
    // data being inserted
    return getAllFriends(friend.insertId)
}


const editFriend = async (name, age, id) => {
    const [friend] = await pool.query(`
    UPDATE the_boys SET name = ?, age = ? WHERE id = ?
    `, [name, age, id])
}


const addUser = async (username, password) => {
    await pool.query(`
    INSERT INTO users (username, password) VALUES (?, ?)
    `,[username, password])
}

const checkUser = async (username) => {
    const [[{password}]] = await pool.query(`
    SELECT password FROM users WHERE username = ?
    `, [username]) 
    return password
}

// console.log(await checkUser('QuandaleDingle'));
export { getAllFriends, getFriend, deleteFriend, addFriend, editFriend, addUser, checkUser }