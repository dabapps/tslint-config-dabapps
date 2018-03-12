import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface ChildProps {
  name: string;
}

const Child = ({ name }: ChildProps) => <p>Hello, {name}!</p>;

class Test extends React.Component {
  public render() {
    return (
      <div className="test" style={{ width: 100 }}>
        <Child name="World" />
      </div>
    );
  }
}

ReactDOM.render(<Test />, document.getElementById('test'));
