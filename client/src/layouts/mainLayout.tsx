import React, { ReactNode } from "react";

import { css } from "@emotion/react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      css={css`
        max-width: 100%;
        width: 100%;
        padding: 0;
        margin: 0;
        height: auto;
      `}
    >
      <div>{children}</div>
    </div>
  );
};

export default Layout;
