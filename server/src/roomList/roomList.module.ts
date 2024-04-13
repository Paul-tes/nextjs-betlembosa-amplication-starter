import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RoomListModuleBase } from "./base/roomList.module.base";
import { RoomListService } from "./roomList.service";
import { RoomListController } from "./roomList.controller";
import { RoomListResolver } from "./roomList.resolver";

@Module({
  imports: [RoomListModuleBase, forwardRef(() => AuthModule)],
  controllers: [RoomListController],
  providers: [RoomListService, RoomListResolver],
  exports: [RoomListService],
})
export class RoomListModule {}
