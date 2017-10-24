type ReactElement = string;
type Tag = 'div' | 'span' | 'ul' | 'ol' | 'li';

interface StringIndexedObject {
  [index: string]: any;
}

const formatProps = (props: StringIndexedObject) => {
  return Object.keys(props)
    .map((key) => `${key}=${props[key]}`)
    .join(' ');
};

const React = {
  createElement: (
    tag: string,
    props?: StringIndexedObject,
    ...children: ReactElement[]
  ) => `<${tag}${children ? undefined : '/'}>${children}${children ? `</${tag}>` : undefined}`,
};

interface Interface {
  render(): string;
}

class Thing implements Interface {
  public render() {
    return React.createElement(
      'div',
      { foo: 'bar' },
      React.createElement('span')
    );
  }
}
