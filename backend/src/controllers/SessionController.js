const connection = require('../database/connection');

module.exports = {
  async create(request, response){
    const { id } = request.body;

    const username = await connection('usernames')
    .where ('id', id)
    .select('name')
    .first();
     
    if (!username) {
      return response.status(400).json({ error: 'No Username found with this ID'})
    }

     return response.json(username);
  }
}