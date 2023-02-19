import { Auth, Hub } from "aws-amplify";
import React, {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { CognitoUser } from "@aws-amplify/auth";
interface Props {
  children: React.ReactElement;
}
interface UserContextType {
  user: CognitoUser | null;
  setUser: Dispatch<SetStateAction<CognitoUser | null>>;
}
const UserContext = createContext<UserContextType>({} as UserContextType);

export default function AuthContext({ children }: Props): ReactElement {
  const [user, setUser] = useState<CognitoUser | null>(null);

  useEffect(() => {
    checkUser();
    Hub.listen("auth", () => {
      //Perform some action
      checkUser();
    });
  }, []);

  const checkUser = async () => {
    try {
      const amplifyUSer = await Auth.currentAuthenticatedUser();
      console.log('user context...', amplifyUSer);
      
      if (amplifyUSer) {
        setUser(amplifyUSer);
      }
    } catch (error) {
      console.log(error);
      setUser(null);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = (): UserContextType => useContext(UserContext);
