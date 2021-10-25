import { Request, Response } from "express";
import { CreateMessageService } from "../services/CreateMessageService";
import { GetLast3MessagesService } from "../services/GetLast3MessagesService";
import { ProfileUserService } from "../services/ProfileUserService";

class ProfileUserController {
  async handle(req: Request, res: Response) {
    const { user_id } = req

    const service = new ProfileUserService()

    const profile = await service.execute(user_id)

    return res.json(profile);
  }
}

export { ProfileUserController };
