import React, { createContext, useContext, useState } from "react";
import { IntlProvider as ReactIntlProvider } from "react-intl";
import { messages } from "./locales/messages";

type Locale = "en" | "de";

interface IntlContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const IntlContext = createContext<IntlContextType | undefined>(undefined);

export const useLocale = () => {
  const context = useContext(IntlContext);
  if (!context) {
    throw new Error("useLocale must be used within IntlProvider");
  }
  return context;
};

interface Props {
  children: React.ReactNode;
}

export const IntlProvider: React.FC<Props> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>("en");

  return (
    <IntlContext.Provider value={{ locale, setLocale }}>
      <ReactIntlProvider
        messages={messages[locale]}
        locale={locale}
        defaultLocale="en"
      >
        {children}
      </ReactIntlProvider>
    </IntlContext.Provider>
  );
};
