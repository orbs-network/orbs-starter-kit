import React, { useState, useEffect } from 'react';
import {
  argUint64,
  Client,
  createAccount
} from 'orbs-client-sdk';

const contractName = 'counter';
const { publicKey, privateKey } = createAccount();
const client = new Client('http://localhost:8080', 42, 'TEST_NET');

export default () => {
  const [sum, setSum] = useState('');
  const [value, setValue] = useState('');

  const getValue = async () => {
    const query = client.createQuery(publicKey, contractName, 'get', []);
    const { outputArguments } = await client.sendQuery(query);
    setSum(outputArguments[0].value.toString());
  };

  const submitValue = async val => {
    const [tx] = client.createTransaction(
      publicKey,
      privateKey,
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
