function InputProduct({ type='text', label, placeholder, value='', onChange, name }) {
  return <div>
    <label>{label}</label>
    <input
      className='form-control mt-2'
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e)}
      />
  </div>
}

export { InputProduct }
