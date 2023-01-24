function TextAreaProduct({ label, placeholder, value='', onChange, name }) {
  return (
    <div>
      <label>{label}</label>
      <textarea
        className="form-control mt-2"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
        />
    </div>
  );
}

export { TextAreaProduct }
