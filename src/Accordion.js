import React from "react";


class Text extends React.Component {



  render() {
    const {enter,text,style,children,render}= this.props

    return (

        <div style={style} className={enter ? text? enter.active :enter.normal : `content ${text ? "open" : ""}`}>
          {text ?children : ""}

          {text?render &&render(this.props.text):''}
        </div>

    );
  }
}

class Heading extends React.Component {
  render() {
    const { heading, onShow, children,enter } = this.props;

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          ...this.props.style
        }}
        onClick={onShow}
        className={ enter? heading ?enter.active : enter.normal:''}
      >
        {children}

        {this.props.render && this.props.render(heading)}
      </div>
    );
  }
}

class Accordion extends React.Component {
  state = {
    active: -1,
    heading: -1
  };

  onShow = i => {
    this.setState({
      active: i,
      heading: i
    });

    if (this.state.heading === i) {
      this.setState({
        active: -1,
        heading: -1
      });
    }
  };

  kickOff = () => {
    this.setState({
      active: -1
    });
  };

  render() {
    const children = React.Children.map(this.props.children, (child, i) => {
      return React.cloneElement(child, {
        heading: this.state.active === i,
        text: this.state.active + 1 === i,
        onShow: () => {
          this.onShow(i);
        }
      });
    });
    return children;
  }
}

export { Accordion, Text, Heading };
