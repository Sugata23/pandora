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
        <div className="">
            <label 
            className=""
            htmlFor={name}
            >
                {label}
            </label>
            <input
                type="text"
                className=""
                id={name}
                placeholder={name}
                {...rest}
            />
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