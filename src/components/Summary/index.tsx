import  {useContext} from "react";
import incomeImage from "./../../assets/income.svg";
import outComeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { Container } from "./styles";
import { TransactionsContext } from "../../TransactionsContext";
export function Summary() {
  const {transactions} = useContext(TransactionsContext)
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImage} alt="Entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outComeImg} alt="Entradas" />
        </header>
        <strong>-R$500,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Entradas" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  );
}
