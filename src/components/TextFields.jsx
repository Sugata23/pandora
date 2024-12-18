import PropTypes from "prop-types"

const TextFields = ({
    classes,
    label,
    name,
    placeholder = "",
    helperText = "",
    fieldClasses,
    variant = "outlined",
    ...rest
}) => {
    return (
        <div className={`text-field-wrapper ${classes}`}>
            <label 
            className="label-text"
            htmlFor={name}
            >
                {label}
            </label>
            <input
                type="text"
                className={`text-field ${fieldClasses}`}
                id={name}
                placeholder={name}
                {...rest}
            />
            {helperText && <p className="helper-text">{helperText}</p>}
        </div>
    )
}

TextFields.propTypes = {
    classes: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    helperText: PropTypes.string,
    fieldClasses: PropTypes.string,
    variant: PropTypes.string,
}

export default TextFields