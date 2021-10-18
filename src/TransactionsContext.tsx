import { createContext, ReactNode } from "react";
import { useState, useEffect } from "react";
import { api } from "./services/api";
interface Transaction{
    id:number;
    title:string;
    type:string;
    category:string
    amount:number; 
    createdAt: string
  }
 type TransactionInput = Omit<Transaction, 'id' |'createdAt'>
  interface TransactionsProviderProps{
    children: ReactNode;
  }
  interface TransactionsContextData{
    transactions:Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>
  }
export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData)
export function TransactionsProvider ({children}: TransactionsProviderProps){
    const [transactions,setTransactions] = useState<Transaction[]>([])
    useEffect(() => {
    api.get('transactions')
    .then(response => setTransactions(response.data.transactions))
  }, []);
  async function createTransaction(transaction : TransactionInput){

    await api.post('/transactions' , transaction)
  }
  return(
      <TransactionsContext.Provider value={{transactions, createTransaction}}>
          {children}
      </TransactionsContext.Provider>
  )
} 