import { Component } from "react";
class ClassBasedComponent extends Component {
  //state
  state = {
    showText: false,
    changeColor: false,
    count: 0,
    changeCountStyle: false,
  };
  handleClick = () => {
    console.log("button clicked");
    //not recommended
    // this.state.showText = !this.state.showText
  };
  handleCount = () => {
    this.setState({
      ...this.state,
      count: this.state.count + 1,
    });
  };
  componentDidMount() {
    console.log("this is called first time on page load");
    this.setState({
      showText: !this.state.showText,
      changeColor: !this.state.changeColor,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);

    if (
      prevState &&
      prevState.count !== this.state.count &&
      this.state.count === 10
    ) {
      this.setState({
        ...this.state,
        changeCountStyle: true,
      });
    }
  }
  render() {
    return (
      <div>
        {this.state.showText ? (
          <h3 style={{ color: this.state.changeColor ? "red" : "black" }}>
            Class Based Component
          </h3>
        ) : null}
        <button onClick={this.handleClick}>Toggle Text</button>
        <button onClick={this.handleCount}>Increase Count Value</button>
        <h3
          style={{
            color: this.state.changeCountStyle ? "blue" : "black",
            fontSize: this.state.changeCountStyle ? "30px" : "12px",
          }}
        >
          Count is {this.state.count}
        </h3>
      </div>
    );
  }
}

export default ClassBasedComponent;
