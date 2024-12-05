import React from "react";

interface ObfuscatedProps extends React.PropsWithChildren {
  email: string;
  headers: Record<string, string>;
  text: string;
  preText: string;
}

const withObfuscation =
  (ObfuscatedButton: React.FC): React.FC<ObfuscatedProps> =>
  ({ email, headers, text, preText, children, ...props }) => {
    const reverseString = (s: string) => s.split("").reverse().join("");

    const combineHeaders = (searchParams: Record<string, string>) =>
      Object.keys(searchParams)
        .map((key) => `${key}=${encodeURIComponent(searchParams[key])}`)
        .join("&");

    const createContactLink = (e: string, h: Record<string, string>) => {
      let link = "";

      if (e) {
        link = `mailto:${e}`;
        if (h) {
          link += `?${combineHeaders(h)}`;
        }
      }

      return link;
    };

    const handleClickObfuscatedClick = (event: React.MouseEvent) => {
      event.preventDefault();
      window.location.href = createContactLink(email, headers);
    };

    const CustomTextButton = () => (
      <ObfuscatedButton
        {...props}
        onClick={(event: React.MouseEvent) => handleClickObfuscatedClick(event)}
        href="obfuscated"
      >
        {text}
      </ObfuscatedButton>
    );

    const AddressTextButton = () => (
      <ObfuscatedButton
        {...props}
        onClick={(event: React.MouseEvent) => handleClickObfuscatedClick(event)}
        href="obfuscated"
      >
        {preText}{" "}
        <span style={{ direction: "rtl", unicodeBidi: "bidi-override" }}>
          {reverseString(email) || children}
        </span>
      </ObfuscatedButton>
    );

    return text ? <CustomTextButton /> : <AddressTextButton />;
  };

export default withObfuscation;
