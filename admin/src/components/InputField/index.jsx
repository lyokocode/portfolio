// InputField.js

import PropTypes from 'prop-types';
import { MdDriveFolderUpload } from 'react-icons/md';

export const InputField = ({ input, onChange }) => {
    const handleChange = (e) => {
        onChange(e);
    };

    return (
        <div key={input.id} className="formInput">
            {input.type === "textarea" ? (
                <>
                    <label >
                        {input.label}
                    </label>
                    <textarea
                        placeholder={input.placeholder}
                        name={input.model}
                        onChange={handleChange}
                    />
                </>
            ) : input.type === "file" ? (
                <div className="formInput">
                    <label htmlFor="file" style={{ cursor: "pointer" }}>
                        <MdDriveFolderUpload size={35} />
                    </label>
                    <div className="labelText">
                        {input.label}
                    </div>
                    <input
                        type={input.type}
                        id={input.type}
                        name={input.model}
                        onChange={handleChange}
                        style={{ display: "none" }}
                    />
                </div>
            ) : input.type === "select" ? (
                <>
                    <label htmlFor={input.model}>
                        {input.label}
                    </label>
                    <select
                        name={input.model}
                        onChange={handleChange}
                        defaultValue="false"

                    >
                        {input.options.map((option, index) => (
                            <option
                                key={index}
                                value={option}
                            >
                                {option}
                            </option>
                        ))}
                    </select>
                </>
            ) : (
                <>
                    <label >
                        {input.label}
                    </label>
                    <input
                        type={input.type}
                        placeholder={input.placeholder}
                        name={input.model}
                        onChange={handleChange}
                    />
                </>
            )}
        </div>
    );
};

InputField.propTypes = {
    input: PropTypes.shape({
        id: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        placeholder: PropTypes.string,
        model: PropTypes.string.isRequired,
        options: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
    onChange: PropTypes.func.isRequired,
};