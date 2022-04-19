const InputField = (props) => {
    const { handleChange, label, idName, name, type, value, placeholder } = props;
    console.log(props)
    return (
      <div className="mb-3 form-floating">        
        <input className="form-control" type={type} onChange={handleChange} value={value} name={name} placeholder={placeholder} required />
        
        <label htmlFor={idName}>{label}</label>
      </div>
    )
  }
  
  export default InputField