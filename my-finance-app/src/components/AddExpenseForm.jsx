import React, { useState } from 'react';

const AddExpenseForm = ({ onAddExpense }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifica se o nome e o valor da despesa foram preenchidos
    if (name.trim() !== '' && amount.trim() !== '') {
      const newExpense = {
        name,
        amount: parseFloat(amount)
      };

      // Chama a função onAddExpense passando a nova despesa como argumento
      onAddExpense(newExpense);

      // Limpa os campos de entrada
      setName('');
      setAmount('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nome da Despesa:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="amount">Valor:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button type="submit">Adicionar Despesa</button>
    </form>
  );
};

export default AddExpenseForm;
