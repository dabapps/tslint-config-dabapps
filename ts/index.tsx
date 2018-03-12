import * as React from 'react';
import { Component, HTMLProps } from 'react';
import * as ReactDOM from 'react-dom';

interface ChildProps {
  name: string;
}

interface TestProps extends HTMLProps<HTMLDivElement> {
  className: string;
}

const Child = ({ name }: ChildProps) => <p>Hello, {name}!</p>;

class Test extends Component<TestProps, {}> {
  public render() {
    return (
      <div className="test" style={{ width: 100 }} onClick={this.boundMethod}>
        <Child name="World" />
        {[
          <div key={0} />,
          <div key={1} />,
          <div key={2} />,
          <div key={3} />,
          <div key={4} />,
        ]}
      </div>
    );
  }

  private boundMethod = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
  };
}

ReactDOM.render(<Test className={'test'} />, document.getElementById('test'));
