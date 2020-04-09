import React, { Component } from "react";
import countryList from "react-select-country-list";
import Flag from "react-world-flags";

export default class CountrySelector extends Component {
  constructor(props) {
    super(props);
    this.arrCountry = countryList().getData();
  }

  render() {
    return (
      <div>
        <div style={{ border: "1px solid yellow", display: "inline-block" }}>
          <Flag code={this.props.value} height="35px" />
        </div>
        <br />
        <select
          id="country"
          name="country"
          className="input-transp w3-black"
          value={this.props.value}
          onChange={(e) => this.props.onChange(e.target.value)}
        >
          {this.arrCountry.map((country, i) => (
            <option key={i} value={country.value}>
              {country.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
