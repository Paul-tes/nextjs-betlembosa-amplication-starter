import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { WishListTitle } from "../wishList/WishListTitle";

export const RoomListEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <div />
        <TextInput label="locationType" source="locationType" />
        <div />
        <div />
        <div />
        <div />
        <TextInput label="placeType" source="placeType" />
        <NumberInput label="price" source="price" />
        <ReferenceInput
          source="roomCreatedBy.id"
          reference="User"
          label="RoomCreatedBy"
        >
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="title" source="title" />
        <ReferenceInput
          source="wishList.id"
          reference="WishList"
          label="WishList"
        >
          <SelectInput optionText={WishListTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
