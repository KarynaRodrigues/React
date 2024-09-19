import React, { useState } from 'react';

const CalculaIdade = () => {
  const [anoNascimento, setAnoNascimento] = useState('');
  const [mesNascimento, setMesNascimento] = useState('');
  const anoAtual = 2024;
  const mesAtual = 9; // Setembro

  const meses = [
    { valor: 1, nome: 'Janeiro' },
    { valor: 2, nome: 'Fevereiro' },
    { valor: 3, nome: 'Março' },
    { valor: 4, nome: 'Abril' },
    { valor: 5, nome: 'Maio' },
    { valor: 6, nome: 'Junho' },
    { valor: 7, nome: 'Julho' },
    { valor: 8, nome: 'Agosto' },
    { valor: 9, nome: 'Setembro' },
    { valor: 10, nome: 'Outubro' },
    { valor: 11, nome: 'Novembro' },
    { valor: 12, nome: 'Dezembro' },
  ];

  const calcularIdade = () => {
    const idade = anoAtual - anoNascimento;
    if (mesNascimento === mesAtual) {
      return `Você tem a idade ${idade} e completará aniversário este mês.`;
    } else if (mesNascimento > mesAtual) {
      return `Você tem a idade ${idade - 1}.`;
    } else {
      return `Você tem a idade ${idade}.`;
    }
  };

  const [resultado, setResultado] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setResultado(calcularIdade());
  };

  return (
    <div>
      <h1>Calculadora de Idade</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Ano de Nascimento:
            <input
              type="number"
              value={anoNascimento}
              onChange={(e) => setAnoNascimento(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Mês de Nascimento:
            <select
              value={mesNascimento}
              onChange={(e) => setMesNascimento(Number(e.target.value))}
              required
            >
              <option value="">Selecione o mês</option>
              {meses.map((mes) => (
                <option key={mes.valor} value={mes.valor}>
                  {mes.nome}
                </option>
              ))}
            </select>
          </label>
        </div>
        <button type="submit">Descobrir a idade</button>
      </form>
      {resultado && <p>{resultado}</p>}
    </div>
  );
};

export default CalculaIdade;