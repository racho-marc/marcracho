const TextareaField = (props) => {
    const { handleChange, label, idName, name, value, placeholder, height } = props;
    const heightStyle = {
        height: height
    }
    return (
      <div className="mb-3 form-floating">        
        <textarea className="form-control" onChange={handleChange} name={name} placeholder={placeholder} style={heightStyle} value={value}></textarea>
        <label htmlFor={idName}>{label}</label>
      </div>
    )
  }
  
  export default TextareaField