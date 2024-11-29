import { AccountInfo } from "@/types/account-info";
import { User as FirebaseUser } from "firebase/auth";

export async function formatAccount(user: FirebaseUser): Promise<AccountInfo> {
  return {
    id: user.uid,
    email: user.email,
    name: user.displayName,
    phoneNumber: user.phoneNumber,
    avatar: user.photoURL,
    token: await user.getIdToken(),
  }
}
