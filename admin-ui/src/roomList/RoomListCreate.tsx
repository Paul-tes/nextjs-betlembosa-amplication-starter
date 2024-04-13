import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const RoomListCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="locationType" source="locationType" />
      </SimpleForm>
    </Create>
  );
};
