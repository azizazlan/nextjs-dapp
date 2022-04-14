import React from 'react';
import { GreeterContext } from '../../contexts/Greeter';

const Greeter = (props: GreeterContext) => {
  const [greeting, setGreeting] = React.useState('Hello World');
  const onSelectGreet = (event: React.FormEvent) => {
    var unsafeSearchTypeValue = (event.target as any).value;
    setGreeting(unsafeSearchTypeValue);
  };

  if (!props.isContractValid) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', color: 'red' }}>
        <h3>Invalid smart contract</h3>
        <div>
          Greeter.sol at <code>{props.smartContractAddress}</code> could not be
          found on the network.
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h3>Setter (Greeter.sol)</h3>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <select name="greeting" id="select-greeting" onChange={onSelectGreet}>
          <option value="Hello World">Hello World</option>
          <option value="I love my cat">I love my cat</option>
          <option value="I hate hamster">I hate hamster</option>
          <option value="You talk like a Parrot">You talk like a parrot</option>
          <option value="Itsy bitsy spider">Itsy bitsy spider</option>
          <option value="He look like a goldfish">
            He look like a goldfish
          </option>
        </select>
        <button onClick={() => props.setGreeting(greeting)}>Update</button>
      </div>
      <h3>Getter</h3>
      {props.greet}
    </div>
  );
};

export default Greeter;
