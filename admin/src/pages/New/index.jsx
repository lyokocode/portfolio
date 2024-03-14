import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';
import "./new.scss"
import { handleInputChange } from "~/utils";
import { handleSubmitForm } from "~/utils/formUtils";
import { InputField } from "~/components";


export const New = ({ title, inputs, api }) => {
    const [formData, setFormData] = useState({});
    const [imgSrc, setImgSrc] = useState("");
    console.log(formData)
    const navigate = useNavigate()
    const { auth } = useSelector(state => state.auth)
    const UserId = auth?.id

    const handleSubmit = async (event) => {
        event.preventDefault();
        handleSubmitForm(formData, UserId, api, navigate);
    };

    const handleChange = (e) => {
        handleInputChange(e, formData, setFormData, setImgSrc);
    };


    return (
        <div className="newPage">
            <header className="top">
                <h1>{title}</h1>
            </header>
            <div className="bottom">
                <div className="left">
                    <img src={imgSrc || "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="" />

                </div>
                <div className="right">
                    <form onSubmit={handleSubmit}>
                        {inputs.map(input => (
                            <InputField key={input.id} input={input} onChange={handleChange} />
                        ))}
                        <div className="formInput">
                            <button type="submit" className="sendBtn">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
New.propTypes = {
    title: PropTypes.string.isRequired,
    inputs: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            type: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            placeholder: PropTypes.string,
            model: PropTypes.string.isRequired,
            options: PropTypes.arrayOf(PropTypes.string),
            onChange: PropTypes.func.isRequired, // onChange fonksiyonunu ekliyoruz
        })
    ).isRequired,
    api: PropTypes.string.isRequired,
};