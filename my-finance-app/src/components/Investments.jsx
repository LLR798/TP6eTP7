import React from 'react';
import InvestmentItem from './InvestmentItem';

const Investments = () => {
  return (
    <section>
      <h2>Meus Investimentos</h2>
      <ul>
        <InvestmentItem name="Tesouro Direto" />
        <InvestmentItem name="Ações" />
        <InvestmentItem name="Fundos Imobiliários" />
      </ul>
    </section>
  );
};

export default Investments;
