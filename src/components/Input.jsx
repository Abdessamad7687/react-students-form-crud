import FSVG from "./FSVG"

const Input = ({ id, className, type, placeholder }) => {
    return (
        <div className="form-group col-md-4 mx-auto mt-2">
            <label className="form-label">
                <FSVG />
            </label>
            <input
                type={type}
                id={id}
                className={className}
                placeholder={placeholder}
            />
        </div>

    )
}

export default Input