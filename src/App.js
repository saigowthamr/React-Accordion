import React from "react";
import "./App.css";

class Text extends React.Component {


  contentBox = () => {
    if (!this.props.text) {
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
    const { heading, onShow, children } = this.props;

    return (
      <h2 className={heading ? "active" : "normal"} onClick={onShow}>
        {children}
      </h2>
    );
  }
}

class Accordion extends React.Component {
  state = {
    active: -1
  };

  onShow = i => {
    this.setState({
      active: i
    });
  };

  render() {
    const children = React.Children.map(this.props.children, (child, i) => {
      return React.cloneElement(child, {
        heading: this.state.active === i,
        text: this.state.active + 1 === i,
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
      </Accordion>
    );
  }
}

export default App;
