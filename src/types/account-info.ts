import { User } from "@/types/user";

export type AccountInfo = User & {
  token: string;
}