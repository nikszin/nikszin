const connection = require ('../database/connection');

module.exports = {
  async index(request, response) {
    const { page = 1} = request.query;

    const [count] = await connection('teste').count();

      const teste = await connection('teste').select('*')
     .join('usernames', 'usernames.id', '=', 'teste.user_id')
     .limit(10)
     .offset((page -1) * 10)
     .select([
       'teste.*', 
       'usernames.name',
       'usernames.email',
       'usernames.city'
      ]);

    response.header('X-Total-Count', count['count(*)']);

    return response.json(teste);
    },

    async create(request, response) {
    const {title, description, UF } = request.body;
    const user_id = request.headers.authorization;
    
    const [id] = await connection('teste').insert({
      title,
      description,
      UF,
      user_id,
    });

    return response.json({ id });
  },

  async delete(request, response) {
    const { id } = request.params;
    const user_id = request.headers.authorization;

    const incident = await connection('teste')
        .where('id',id)
        .select('user_id')
        .first();

        if (incident.user_id != user_id) {
          return response.status(401).json({ error: 'Operation not permitted.' });
        }
        
        await connection('teste').where('id', id).delete();

        return response.status(204).send();
      }
    };