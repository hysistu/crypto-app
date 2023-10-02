import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useRouter } from "next/router";
import decode from "jwt-decode";
import { loginUser } from "requests/user";
import { User } from "components/User/Interface";
import { toast } from "react-toastify";
import { usersRoles } from "src/utils/usersRoles";
interface AuthContextType {
  user?: {
    id: string;
    role: string;
    email: string;
    firstName: string;
    lastName: string;
    iat: number;
    // role: { name: string };
  };
  loading: boolean;
  error?: any;
  login: (email: string, password: string) => void;
  logout: () => void;
  setUserAfterUpdate: () => void;
}

const AuthContext = createContext<AuthContextType | any>({} as AuthContextType);

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const router = useRouter();
  const [user, setUser] = useState<User | any>();
  const [error, setError] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(router.pathname !== "/");

  const setUserFromToken = (token: string) => {
    const decoded: User | any = decode(token);
    console.log(decoded, 'aaaa')

    if (
      !user &&
      decoded &&
      (decoded?._doc.role == usersRoles.admin ||
        decoded?._doc.role == usersRoles.user)
    ) {
      setUser(decoded?._doc);
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(decoded?._doc));
      if (router.pathname === "/") {
        router.push("/dashboard");
      }
    }
  };

  const setUserAfterUpdate = (token: string) => {
    const decoded: User = decode(token);
    setUser(decoded);
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(decoded));
    if (router.pathname === "/") {
      router.push("/dashboard");
    }
  };

  const login = async (email: string, password: string) => {
    setLoading(true);

    const res = await loginUser({ email, password });

    if ("error" in res) {
      setLoading(false);
      setError(res.message);
      toast.error(res.message);
      return;
    }

    if ("token" in res) {
      console.log("ccc", res);
      const decodedRes: User | any = decode(res?.token);
      console.log(decodedRes);
      if (
        decodedRes?._doc.role == usersRoles.admin ||
        decodedRes?._doc.role == usersRoles.user
      ) {
        setUserFromToken(res?.token);
        setLoading(false);
        setError("");
        router.replace("/dashboard");
        toast.success("Login successfully");
        return;
      }
      setLoading(false);
      toast.error("You don't have access!");
    }
  };

  const logout = async () => {
    await router.replace("/");
    setUser(undefined);
    localStorage.removeItem("token");
  };

  const memoedValue = useMemo(
    () => ({
      user,
      loading,
      error,
      login,
      logout,
      setUserAfterUpdate,
    }),
    [user, loading, error]
  );

  useEffect(() => {
    if (!user) {
      const token = localStorage.getItem("token") as string;
      if (token) {
        setUserFromToken(token);
      }

      setLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>
  );
}

export default function useAuth() {
  return useContext(AuthContext);
}
