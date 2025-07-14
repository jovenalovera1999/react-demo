import {
  createContext,
  useContext,
  useState,
  type FC,
  type ReactNode,
} from "react";

type HeaderContextType = {
  isUserMenuOpen: boolean;
  toggleUserMenu: () => void;
  closeUserMenu: () => void;
};

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export const useHeader = () => {
  const context = useContext(HeaderContext);

  if (!context) {
    throw new Error("useHeader must be used within a HeaderProvider");
  }

  return context;
};

export const HeaderProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleUserMenu = () => {
    setIsUserMenuOpen((prev) => !prev);
  };

  const closeUserMenu = () => {
    setIsUserMenuOpen(false);
  };

  return (
    <HeaderContext.Provider
      value={{ isUserMenuOpen, toggleUserMenu, closeUserMenu }}
    >
      {children}
    </HeaderContext.Provider>
  );
};
