import { formatAccount } from "@/features/auth/helper/format-account";
import { onAuthStateChanged } from "@/libs/firebase/auth";
import { firebaseAuth } from "@/libs/firebase/config";
import { AccountInfo } from "@/types/account-info";
import { createContext, FC, PropsWithChildren, useContext, useEffect, useState } from "react";

type AuthContextProps = {
  account: AccountInfo | null;
  clearAccount: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  account: null,
  clearAccount: () => {}
})

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [account, setAccount] = useState<AccountInfo | null>(null)
  const clearAccount = () => setAccount(null)
  
  useEffect(() => {
    const subscribe = onAuthStateChanged(async (user) => {
      console.log(user)
      if (!user) return;
      setAccount(await formatAccount(user))
    })

    return () => { subscribe() }
  }, [])
  
  return (
    <AuthContext.Provider value={{ account, clearAccount }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);