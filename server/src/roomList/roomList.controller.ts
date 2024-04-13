import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RoomListService } from "./roomList.service";
import { RoomListControllerBase } from "./base/roomList.controller.base";

@swagger.ApiTags("roomLists")
@common.Controller("roomLists")
export class RoomListController extends RoomListControllerBase {
  constructor(
    protected readonly service: RoomListService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
