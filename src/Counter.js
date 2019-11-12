import React, { useState, useEffect } from 'react';
import {
  argUint64,
  Client,
  createAccount,
  LocalSigner
} from 'orbs-client-sdk';

const contractName = 'counter';
const sender = createAccount();
const client = new Client(
  'http://localhost:8080',
  42,
  'TEST_NET',
  new LocalSigner(sender)
);

export default () => {
  const [sum, setSum] = useState('');
  const [value, setValue] = useState('');

  const getValue = async () => {
    const query = await client.createQuery(contractName, 'get', []);
    const { outputArguments } = await client.sendQuery(query);
    setSum(outputArguments[0].value.toString());
  };

  const submitValue = async val => {
    const [tx] = await client.createTransaction(
      contractName,
      'add',
      [argUint64(val)]
    );
    await client.sendTransaction(tx);
  };

  const submitHandler = async () => {
    await submitValue(value);
    await getValue();
    setValue('');
  };

  useEffect(() => {
    getValue();
  }, []);

  return (
    <>
      <input
        type="text"
        placeholder="Enter value"
        value={value}
        onChange={ev => setValue(ev.target.value)}
      />
      <button onClick={submitHandler}>Add</button>
      <p>Sum: {sum}</p>
    </>
  );
};
