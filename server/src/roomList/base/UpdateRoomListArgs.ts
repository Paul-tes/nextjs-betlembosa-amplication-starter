/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RoomListWhereUniqueInput } from "./RoomListWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { RoomListUpdateInput } from "./RoomListUpdateInput";

@ArgsType()
class UpdateRoomListArgs {
  @ApiProperty({
    required: true,
    type: () => RoomListWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RoomListWhereUniqueInput)
  @Field(() => RoomListWhereUniqueInput, { nullable: false })
  where!: RoomListWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => RoomListUpdateInput,
  })
  @ValidateNested()
  @Type(() => RoomListUpdateInput)
  @Field(() => RoomListUpdateInput, { nullable: false })
  data!: RoomListUpdateInput;
}

export { UpdateRoomListArgs as UpdateRoomListArgs };