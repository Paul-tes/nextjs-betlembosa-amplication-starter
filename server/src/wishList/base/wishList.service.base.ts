/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  WishList as PrismaWishList,
  RoomList as PrismaRoomList,
  User as PrismaUser,
} from "@prisma/client";

export class WishListServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.WishListCountArgs, "select">): Promise<number> {
    return this.prisma.wishList.count(args);
  }

  async wishLists<T extends Prisma.WishListFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.WishListFindManyArgs>
  ): Promise<PrismaWishList[]> {
    return this.prisma.wishList.findMany<Prisma.WishListFindManyArgs>(args);
  }
  async wishList<T extends Prisma.WishListFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.WishListFindUniqueArgs>
  ): Promise<PrismaWishList | null> {
    return this.prisma.wishList.findUnique(args);
  }
  async createWishList<T extends Prisma.WishListCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WishListCreateArgs>
  ): Promise<PrismaWishList> {
    return this.prisma.wishList.create<T>(args);
  }
  async updateWishList<T extends Prisma.WishListUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WishListUpdateArgs>
  ): Promise<PrismaWishList> {
    return this.prisma.wishList.update<T>(args);
  }
  async deleteWishList<T extends Prisma.WishListDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.WishListDeleteArgs>
  ): Promise<PrismaWishList> {
    return this.prisma.wishList.delete(args);
  }

  async findRoomLists(
    parentId: string,
    args: Prisma.RoomListFindManyArgs
  ): Promise<PrismaRoomList[]> {
    return this.prisma.wishList
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .roomLists(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.wishList
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
