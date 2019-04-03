//import * as React from 'react'
import React, {useState, ComponentType} from 'react'
import Select from 'react-select';
import {ValueType, OptionsType} from "react-select/lib/types";
import {OptionProps} from "react-select/lib/components/Option";

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

  const CustomOption: ComponentType<OptionProps<OptionType>> = ({innerProps, isDisabled, children}) =>
    !isDisabled ? <div {...innerProps} style={{border: '3px dashed red'}}>[[ {children} ]]</div> : null;

  return <div>
    <h1>Hello React Select</h1>
    <Select value={selectedOption} onChange={setSelectedOption} options={options}
            components={{Option: CustomOption}}/>
    <div>{JSON.stringify(selectedOption)}</div>
  </div>
};
