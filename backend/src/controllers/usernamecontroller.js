const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const usernames = await connection('usernames').select('*');
    
    return response.json(usernames);
    },

async create(request, response) {
    const { name, email, city, UF } = request.body;

    const id = crypto.randomBytes(4).toString('HEX');
  
    await connection('usernames').insert({
      id,
      name,
      email,
      city,
      UF,
     })

  return response.json({ id });
  }
};