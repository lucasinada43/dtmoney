import logo from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface Headerprops {
  handleOpenNewTransactionModal: () => void;
}
export function Header({ handleOpenNewTransactionModal }: Headerprops) {
  return (
    <Container>
      <Content>
        <img src={logo} alt="dt money" />
        <button type="button" onClick={handleOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
