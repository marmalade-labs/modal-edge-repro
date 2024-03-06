import { ReactNode } from "react";

const RootLayout = ({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) => {
  return (
    <html lang="en">
      <body>
        {children}
        {modal}
      </body>
    </html>
  );
};

export const runtime = "edge";
export default RootLayout;
