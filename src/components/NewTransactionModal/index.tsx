import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import incomImg from "../../assets/income.svg";
import outCome from "../../assets/outcome.svg";
import closeImg from "./../../assets/close.svg";
import { FormEvent, useState, useContext } from "react";
import { api } from "../../services/api";
import { TransactionsContext } from "../../TransactionsContext";
interface newTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: newTransactionModalProps) {
  const {createTransaction} = useContext(TransactionsContext)
  const [type, setType] = useState('deposit');
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')
  async function handleCreateNewTransaction(event:FormEvent){
        event.preventDefault();
        await createTransaction({
          title,
          amount,
          category,
          type
        })
        onRequestClose()
  }
  
  return (
    <Modal
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        <input placeholder="Titulo" value={title} onChange = {event => setTitle(event.target.value)}/>
        <input placeholder="Valor" type="number" value={amount} onChange = {event => setAmount(+event.target.value)}/>

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => {
              setType("deposit");
            }}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => {
              setType("withdraw");
            }}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outCome} alt="Saida" />
            <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input placeholder="Categoria" value={category} onChange = {event => setCategory(event.target.value)} />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
