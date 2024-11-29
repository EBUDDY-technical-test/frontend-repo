import 'server-only';
import { COOKIE } from "@/constants";
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";

type TCookie = {
  name: string;
  options: Partial<ResponseCookie>;
  duration: number;
}

const sessionCookie: TCookie = {
  name: COOKIE.ACCESS_TOKEN,
  options: {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
    path: '/',
  },
  duration: 24 * 60 * 60 * 1000,
}

export async function createSession(token: string) {
  const { name, options, duration } = sessionCookie;
  const expires = new Date(Date.now() + duration);

  const cookie = await cookies();
  
  cookie.set(name, token, { ...options, expires });
}

export async function getSession() {
  const { name } = sessionCookie;
  
  const cookie = await cookies();
  const token = cookie.get(name)?.value;

  return { token };
}

export async function deleteSession() {
  const { name } = sessionCookie;

  const cookie = await cookies();
  
  cookie.delete(name);
}