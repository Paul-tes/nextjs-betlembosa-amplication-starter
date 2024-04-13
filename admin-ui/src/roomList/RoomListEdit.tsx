import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const RoomListEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="locationType" source="locationType" />
        <TextInput label="placeType" source="placeType" />
      </SimpleForm>
    </Edit>
  );
};
