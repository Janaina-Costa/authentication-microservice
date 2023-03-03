import db from '../data/db';
import DatabaseError from '../errors/databaseError';
import IUser from '../interfaces/user';

class UseRepository {
  async findAll ():Promise<IUser[]> {
    const query = `
      SELECT uuid, username
      FROM application_user
    `;
    const { rows } = await db.query<IUser>(query);

    return rows || [];
  }

  async findById (uuid:string): Promise<IUser> {
    try {
      const query = `
        SELECT uuid, username
        FROM application_user
        WHERE uuid = $1
      `;

      const value = [uuid];

      const { rows } = await db.query<IUser>(query, value);
      const [user] = rows;

      return user;
    } catch (err) {
      console.log(err);
      throw new DatabaseError('Erro na consulta por ID', err);
    }
  }

  async create (user: IUser): Promise<string> {
    const script = `
    INSERT INTO application_user (
      username, password)
      VALUES ($1, crypt($2, 'my_salt') )
      RETURNING uuid
      `;
    const values = [user.username, user.password];

    const { rows } = await db.query<{uuid:string}>(script, values);
    const [newUser] = rows;
    return newUser.uuid;
  }

  async update (user: IUser): Promise<void> {
    const script = `
    UPDATE application_user
    SET
      username = $1,
      password = crypt($2, 'my_salt')
    WHERE uuid = $3
      `;
    const values = [user.username, user.password, user.uuid];

    await db.query(script, values);
  }

  async remove (uuid:string):Promise<void> {
    const script = `
      DELETE FROM application_user
      WHERE uuid = $1
    `;
    const values = [uuid];
    await db.query(script, values);
  }
}

export default new UseRepository();
