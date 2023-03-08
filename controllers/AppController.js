/* eslint-disable import/no-named-as-default */
import redisClient from "../utils/redis";
import dbClient from "../utils/db";

export default class AppController {
  static getStatus(req, res) {
    res.status(200).json({
      redis: redisClient.isAlive(),
      db: dbClient.isAlive(),
    });
  }

/*   static async getStats(request, response) {
    const usersC = await dbClient.nbUsers();
    const filesC = await dbClient.nbFiles();
    response.status(200).send({ users, files });
  } */
 

  static getStats(req, res) {
    Promise.all([dbClient.nbUsers(), dbClient.nbFiles()]).then(
      ([usersC, filesC]) => {
        res.status(200).json({ users: usersC, files: filesC });
      }
    );
  }
}
