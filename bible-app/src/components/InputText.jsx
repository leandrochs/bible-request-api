import React, { Component } from "react";
import { Link } from "react-router-dom";

class InputText extends Component {
  constructor() {
    super();
    this.state = {
      imputText: '',
    }
  }

  onChange({ target: { value } }) {
    this.setState({ imputText: value })
  }

  render() {
    const { imputText } =this.state;
    const { getBywordApi } = this.props;

    return (
      <div className="mb-2 d-flex align-items-center" >
        <input
          type="text"
          name="imputText"
          placeholder="Busque por palavra chave"
          value={ imputText }
          onChange={ (e) => this.onChange(e) }
        />
        <Link
          to={`/search/${imputText}`}
          onClick={ () => getBywordApi(imputText) }
          // className="d-flex align-items-center"
        >
          <button
            // className="mb-2 "
            style={{ border: 'solid 1px rgb(217, 217, 217)', margin: "8%" }}
          >
            Buscar
          </button>
        </Link>
      </div>
    )
  }
}

export default InputText;