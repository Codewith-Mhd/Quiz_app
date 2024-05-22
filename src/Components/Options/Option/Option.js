const option = ({option, onselectedOption, onOptionChange}) => {
  return (
    <div>
      <input
        type="radio"
        name="option"
        value={option}
        checked={onselectedOption === option}
        onChange={onOptionChange}
        className="form-check-input"
      />
      <label className="form-check-label">{option}</label>
    </div>
  )
}

export default option
