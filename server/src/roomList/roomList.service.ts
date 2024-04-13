import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RoomListServiceBase } from "./base/roomList.service.base";

@Injectable()
export class RoomListService extends RoomListServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
