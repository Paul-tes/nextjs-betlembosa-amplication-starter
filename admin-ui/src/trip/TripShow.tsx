import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { ROOMLIST_TITLE_FIELD } from "../roomList/RoomListTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const TripShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="RoomList"
          source="roomlist.id"
          reference="RoomList"
        >
          <TextField source={ROOMLIST_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
