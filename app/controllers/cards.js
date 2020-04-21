const { executeQuery } = require('../db');

const getCard = async (id) => {
  try {
    console.log('request to db');
    const data = await executeQuery('SELECT * FROM cards WHERE id=$1', [id]);
    return data.rows[0];
  } catch (err) {
    console.log(err);
    return null;
  }
};

const getAllCards = async () => {
  try {
    const data = await executeQuery('SELECT * FROM cards');
    return data.rows;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const addCard = async (cardObject) => {
  try {
    const data = await executeQuery('INSERT INTO cards (cardObject) VALUES ($1) RETURNING *', [cardObject]);
    return data.rows[0];
  } catch (err) {
    console.log(err);
    return null;
  }
};

const deleteCard = async (id) => {
  try {
    const data = await executeQuery('DELETE FROM cards WHERE id=$1 RETURNING *', [id]);
    return data.rows[0];
  } catch (err) {
    console.log(err);
    return null;
  }
};

module.exports = {
  getCard,
  getAllCards,
  addCard,
  deleteCard,
};