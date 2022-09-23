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
import palette from './palette';
import DeleteIcon from "./delete";

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
      try {
        output.value = eval(output.value);
      } catch (e) {
        output.value = "Error";
        setTimeout(() => {
          output.value = 0;
        }, 1500);
      }
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
          <ButtonDel
            onClick={() => {
              this.clickButtonOperations("del");
            }}
          >
            <DeleteIcon />
          </ButtonDel>
        </InputPosition>
        <OutPut>
          <Button
            onClick={() => {
              this.clickButtonOperations("C");
            }}
          >
            C
          </Button>
          {store.buttons.map((item, index) => (
            <Button
              key={index}
              onClick={() => {
                this.clickButton(item.value);
              }}
            >
              {item.value}
            </Button>
          ))}
          <Button
            onClick={() => {
              this.clickButtonOperations("=");
            }}
            style={{ backgroundColor: `${palette.orange}` }}
          >
            =
          </Button>
        </OutPut>
      </Container>
    );
  }
}

export default App;
