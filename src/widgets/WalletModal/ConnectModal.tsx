import React from "react";
import styled from "styled-components";
import { Link } from "../../components/Link";
import { HelpIcon } from "../../components/Svg";
import { Modal } from "../Modal";
import WalletCard from "./WalletCard";
import config from "./config";
import { Login } from "./types";
import Message from "../../components/Message/Message";
import Text from "../../components/Text/Text";

interface Props {
  login: Login;
  onDismiss?: () => void;
}

const HelpLink = styled(Link)`
  display: flex;
  align-self: center;
  align-items: center;
  margin-top: 24px;
`;

const ConnectModal: React.FC<Props> = ({ login, onDismiss = () => null }) => (
  <Modal title="Connect to a wallet" onDismiss={onDismiss}>
    <Message variant={"danger"} mb={20}>
      <Text maxWidth={"270px"} color="text">
        1.&nbsp;&nbsp;Please switch network to Velas Test Network before connecting wallet.
      </Text>
      <Text maxWidth={"270px"} color="text">
        2.&nbsp;&nbsp;When you are going to access this site from your phone, you need to install Metamask app.
        And then you can access this site on Metamask app by using `Browser` function.
      </Text>
    </Message>
    {config.map((entry, index) => (
      <WalletCard
        key={entry.title}
        login={login}
        walletConfig={entry}
        onDismiss={onDismiss}
        mb={index < config.length - 1 ? "8px" : "0"}
      />
    ))}
    <HelpLink href="https://docs.wagyuswap.finance/help/faq#how-do-i-connect-my-wallet-to-wagyuswap" external>
      <HelpIcon color="primary" mr="6px" />
      Learn how to connect
    </HelpLink>
  </Modal>
);

export default ConnectModal;
