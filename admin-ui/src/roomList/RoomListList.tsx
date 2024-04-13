import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const RoomListList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"RoomLists"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="locationData" source="locationData" />
        <TextField label="locationType" source="locationType" />
        <TextField label="mapData" source="mapData" />
        <TextField label="photos" source="photos" />
        <TextField label="placeAmeneties" source="placeAmeneties" />
        <TextField label="placeSpace" source="placeSpace" />
        <TextField label="placeType" source="placeType" />
        <ReferenceField label="RoomCreatedBy" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
