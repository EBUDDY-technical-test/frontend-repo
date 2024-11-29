'use server'

import { ROUTES } from "@/constants";
import { deleteSession } from "@/features/auth/helper/session";
import { redirect } from "next/navigation";
import { signOut } from "@/libs/firebase/auth";

export async function signoutActions() {
  await signOut();
  await deleteSession();
  redirect(ROUTES.SIGN_IN);
}
