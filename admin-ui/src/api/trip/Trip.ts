import { User } from "../user/User";

export type Trip = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User;
};
