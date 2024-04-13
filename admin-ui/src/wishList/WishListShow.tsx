import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { USER_TITLE_FIELD } from "../user/UserTitle";
import { WISHLIST_TITLE_FIELD } from "./WishListTitle";

export const WishListShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="RoomList"
          target="wishListId"
          label="RoomLists"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="locationData" source="locationData" />
            <TextField label="locationType" source="locationType" />
            <TextField label="mapData" source="mapData" />
            <TextField label="photos" source="photos" />
            <TextField label="placeAmeneties" source="placeAmeneties" />
            <TextField label="placeSpace" source="placeSpace" />
            <TextField label="placeType" source="placeType" />
            <TextField label="price" source="price" />
            <ReferenceField
              label="RoomCreatedBy"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="WishList"
              source="wishlist.id"
              reference="WishList"
            >
              <TextField source={WISHLIST_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
