const Input = ({ handleOnBlur, handleOnChange, type, className, text, id, name, placeholder, succMesg, errMesg }) => (
    <div>
        <label className="form-label mt-3" htmlFor={id}>{text}</label>
        <input onBlur={handleOnBlur} onChange={handleOnChange} name={name} id={id} type={type} className={`${className} ${succMesg ? 'is-valid' : ''} ${errMesg ? 'is-invalid' : ''}  `} placeholder={placeholder} />
        <div id={`validationServer${name}Feedback`} class="invalid-feedback">
            {errMesg}
        </div>
        <div class="valid-feedback">
            {succMesg}
        </div>
    </div>
)

export default Input



