import React, { createContext, useContext, useState, ReactNode } from 'react';
import { PhoneColor } from './data/colors';

type PhoneContextType = {
  selected: PhoneColor | null;
  setSelected: (color: PhoneColor) => void;
};

const PhoneContext = createContext<PhoneContextType | undefined>(undefined);

export function PhoneProvider({ children }: { children: ReactNode }) {
  const [selected, setSelected] = useState<PhoneColor | null>(null);
  return (
    <PhoneContext.Provider value={{ selected, setSelected }}>
      {children}
    </PhoneContext.Provider>
  );
}

export function usePhone() {
  const ctx = useContext(PhoneContext);
  if (!ctx) throw new Error('usePhone phải được dùng bên trong PhoneProvider');
  return ctx;
}