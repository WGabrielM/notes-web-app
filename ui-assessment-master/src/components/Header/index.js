import React from "react";

import { Email, SupportInfo, SupportContact, Support } from "./styles";

export default function Header() {
  return (
    <Support>
      <h1>Account Overview</h1>
      <SupportInfo>
        <span>your feefo support contact</span>
        <SupportContact>
          <Email>
            <strong>Support</strong>
            <p>support@feefo.com</p>
          </Email>
          <p>020 3362 4208</p>
        </SupportContact>
      </SupportInfo>
    </Support>
  );
}
