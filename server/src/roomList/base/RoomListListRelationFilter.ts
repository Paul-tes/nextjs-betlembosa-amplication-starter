/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RoomListWhereInput } from "./RoomListWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class RoomListListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => RoomListWhereInput,
  })
  @ValidateNested()
  @Type(() => RoomListWhereInput)
  @IsOptional()
  @Field(() => RoomListWhereInput, {
    nullable: true,
  })
  every?: RoomListWhereInput;

  @ApiProperty({
    required: false,
    type: () => RoomListWhereInput,
  })
  @ValidateNested()
  @Type(() => RoomListWhereInput)
  @IsOptional()
  @Field(() => RoomListWhereInput, {
    nullable: true,
  })
  some?: RoomListWhereInput;

  @ApiProperty({
    required: false,
    type: () => RoomListWhereInput,
  })
  @ValidateNested()
  @Type(() => RoomListWhereInput)
  @IsOptional()
  @Field(() => RoomListWhereInput, {
    nullable: true,
  })
  none?: RoomListWhereInput;
}
export { RoomListListRelationFilter as RoomListListRelationFilter };
