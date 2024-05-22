import React from "react"
import Option from "./Option/Option"

const options = ({options,selectedOption,onOptionChange}) => {
  return (
    <div className="">
      {options.map((option) => {
        <div key={index}>
          <Option
            option={option}
            selectedOption={selectedOption}
            onOptionChange={onOptionChange}

          />
        </div>
      })}
    </div>
  )
}

export default options
