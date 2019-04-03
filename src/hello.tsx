//import * as React from 'react'
import React, {useState} from 'react'
import Select from 'react-select';
import {ValueType, OptionsType} from "react-select/lib/types";
import makeAnimated from "react-select/lib/animated";

type OptionType = {
  value: string,
  label: string
}

const options: OptionsType<OptionType> = [
  {value: 'chocolate', label: 'Chocolate'},
  {value: 'strawberry', label: 'Strawberry'},
  {value: 'vanilla', label: 'Vanilla'}
];

export default function Hello() {
  const [selectedOption, setSelectedOption] = useState<ValueType<OptionType>>(null)

  return <div>
    <h1>Hello React Select</h1>
    <Select value={selectedOption} onChange={setSelectedOption} options={options} isMulti
            components={makeAnimated<OptionType>()}/>
    <div>{JSON.stringify(selectedOption)}</div>
  </div>;
};
