import React from "react";
import store from "./store";
import {
  Container,
  InputPosition,
  Input,
  OutPut,
  ButtonDel,
  Button,
} from "./style";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      out: "0",
    };
    this.refOutput = React.createRef();
  }

  clickButton(value) {
    let currentValues = value;
    let output = this.refOutput.current;

    this.setState({
      out: currentValues,
    });

    if (output.value === "0") {
      output.value = "";
    }
    output.value += currentValues;
  }

  clickButtonOperations(value) {
    let output = this.refOutput.current;

    if (value === "del") {
      output.value.length === 1
        ? (output.value = 0)
        : (output.value = output.value.substring(0, output.value.length - 1));
    } else if (value === "C") {
      output.value = 0;
    } else if (value === "=") {
      output.value = eval(output.value);
    }
  }

  render() {
    return (
      <Container>
        <InputPosition>
          <Input
            ref={this.refOutput}
            type="text"
            defaultValue={this.state.out}
          />
          {store.operations.map((item) => (
            <ButtonDel
              key={item.value}
              onClick={() => {
                this.clickButtonOperations(item.value);
              }}
            >
              <img src="./delete.png" alt="del" />
            </ButtonDel>
          ))}
        </InputPosition>
        <OutPut>
          {store.operation.map((item) => (
            <Button
              key={item.value}
              onClick={() => {
                this.clickButtonOperations(item.value);
              }}
            >
              {item.value}
            </Button>
          ))}
          {store.buttons.map((item) => (
            <Button
              key={item.value}
              onClick={() => {
                this.clickButton(item.value);
              }}
            >
              {item.value}
            </Button>
          ))}
          {store.ravno.map((item) => (
            <Button
              key={item.value}
              onClick={() => {
                this.clickButtonOperations(item.value);
              }}
            >
              {item.value}
            </Button>
          ))}
        </OutPut>
      </Container>
    );
  }
}

export default App;
