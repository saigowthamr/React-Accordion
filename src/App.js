import React from "react";
import "./App.css";

class Text extends React.Component {
  contentBox = () => {
    if (!this.props.active) {
      return null;
    } else {
      return (
        <div className="content-box">
          <p className="text">{this.props.children}</p>
        </div>
      );
    }
  };

  render() {
    return this.contentBox();
  }
}

class Heading extends React.Component {
  render() {
    const { index, onShow, children } = this.props;

    return (
      <h2 className={index ? "active" : "normal"} onClick={onShow}>
        {children}
      </h2>
    );
  }
}

class Accordion extends React.Component {
  state = {
    active: 1
  };

  onShow = i => {
    this.setState({
      active: i + 1
    });
  };
  render() {
    const children = React.Children.map(this.props.children, (child, i) => {
      return React.cloneElement(child, {
        index: this.state.active - 1 === i,
        active: this.state.active === i,
        onShow: () => this.onShow(i)
      });
    });

    return <div className="accordion">{children}</div>;
  }
}

class App extends React.Component {
  render() {
    return (
      <Accordion>
        <Heading>Heading 1</Heading>
        <Text>
          “You've gotta dance like there's nobody watching, Love like you'll
          never be hurt, Sing like there's nobody listening, And live like it's
          heaven on earth.” ― William W. Purkey
        </Text>
        <Heading>Heading 2</Heading>

        <Text>
          “Don’t walk in front of me… I may not follow Don’t walk behind me… I
          may not lead Walk beside me… just be my friend” ― Albert Camus
        </Text>
        <Heading>Heading 3</Heading>

        <Text>
          “Darkness cannot drive out darkness: only light can do that. Hate
          cannot drive out hate: only love can do that.” ― Martin Luther King
          Jr., A Testament of Hope: The Essential Writings and Speeches
        </Text>
        <Heading>Heading 4</Heading>

        <Text>
          Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam.
          Integer ut neque. Vivamus nisi metus, molestie vel, gravida in,
          condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi.
          Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu
          ante scelerisque vulputate.
        </Text>
        <Heading>Heading 5</Heading>
        <Text>
          “I believe that everything happens for a reason. People change so that
          you can learn to let go, things go wrong so that you appreciate them
          when they're right, you believe lies so you eventually learn to trust
          no one but yourself, and sometimes good things fall apart so better
          things can fall together.” ― Marilyn Monroe
        </Text>
      </Accordion>
    );
  }
}

export default App;
