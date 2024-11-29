import { formatAccount } from "@/features/auth/helper/format-account";
import { onAuthStateChanged } from "@/libs/firebase/auth";
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
    const unsubscribe = onAuthStateChanged(async (user) => {
      if (!user) return;
      setAccount(await formatAccount(user))
    })

    return () => { 
      unsubscribe();
    }
  }, [])
  
  return (
    <AuthContext.Provider value={{ account, clearAccount }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);