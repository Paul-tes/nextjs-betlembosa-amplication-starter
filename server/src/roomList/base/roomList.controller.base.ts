/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { RoomListService } from "../roomList.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { RoomListCreateInput } from "./RoomListCreateInput";
import { RoomList } from "./RoomList";
import { RoomListFindManyArgs } from "./RoomListFindManyArgs";
import { RoomListWhereUniqueInput } from "./RoomListWhereUniqueInput";
import { RoomListUpdateInput } from "./RoomListUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class RoomListControllerBase {
  constructor(
    protected readonly service: RoomListService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: RoomList })
  @nestAccessControl.UseRoles({
    resource: "RoomList",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createRoomList(
    @common.Body() data: RoomListCreateInput
  ): Promise<RoomList> {
    return await this.service.createRoomList({
      data: {
        ...data,

        roomCreatedBy: {
          connect: data.roomCreatedBy,
        },
      },
      select: {
        createdAt: true,
        id: true,
        locationData: true,
        locationType: true,
        mapData: true,
        photos: true,
        placeAmeneties: true,
        placeSpace: true,
        placeType: true,

        roomCreatedBy: {
          select: {
            id: true,
          },
        },

        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [RoomList] })
  @ApiNestedQuery(RoomListFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "RoomList",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async roomLists(@common.Req() request: Request): Promise<RoomList[]> {
    const args = plainToClass(RoomListFindManyArgs, request.query);
    return this.service.roomLists({
      ...args,
      select: {
        createdAt: true,
        id: true,
        locationData: true,
        locationType: true,
        mapData: true,
        photos: true,
        placeAmeneties: true,
        placeSpace: true,
        placeType: true,

        roomCreatedBy: {
          select: {
            id: true,
          },
        },

        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: RoomList })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "RoomList",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async roomList(
    @common.Param() params: RoomListWhereUniqueInput
  ): Promise<RoomList | null> {
    const result = await this.service.roomList({
      where: params,
      select: {
        createdAt: true,
        id: true,
        locationData: true,
        locationType: true,
        mapData: true,
        photos: true,
        placeAmeneties: true,
        placeSpace: true,
        placeType: true,

        roomCreatedBy: {
          select: {
            id: true,
          },
        },

        title: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: RoomList })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "RoomList",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateRoomList(
    @common.Param() params: RoomListWhereUniqueInput,
    @common.Body() data: RoomListUpdateInput
  ): Promise<RoomList | null> {
    try {
      return await this.service.updateRoomList({
        where: params,
        data: {
          ...data,

          roomCreatedBy: {
            connect: data.roomCreatedBy,
          },
        },
        select: {
          createdAt: true,
          id: true,
          locationData: true,
          locationType: true,
          mapData: true,
          photos: true,
          placeAmeneties: true,
          placeSpace: true,
          placeType: true,

          roomCreatedBy: {
            select: {
              id: true,
            },
          },

          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: RoomList })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "RoomList",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteRoomList(
    @common.Param() params: RoomListWhereUniqueInput
  ): Promise<RoomList | null> {
    try {
      return await this.service.deleteRoomList({
        where: params,
        select: {
          createdAt: true,
          id: true,
          locationData: true,
          locationType: true,
          mapData: true,
          photos: true,
          placeAmeneties: true,
          placeSpace: true,
          placeType: true,

          roomCreatedBy: {
            select: {
              id: true,
            },
          },

          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
