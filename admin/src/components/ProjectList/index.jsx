import { useState } from "react";
import PropTypes from 'prop-types';
import axios from "axios"
import { UpdateProject } from "../UpdateProject";
import { Error } from "..";
import "./projectList.scss"

export const ProjectList = ({ project, reFetch }) => {
    const [errorMessage, setErrorMessage] = useState()
    const [error, serError] = useState(null)

    const deleteProject = async () => {
        try {
            await axios.delete(`${import.meta.env.VITE_REACT_BASE_URL}/api/projects/project?id=${project.id}`);
            reFetch()
        } catch (error) {
            serError(true)
            setErrorMessage(error?.response?.data?.message)
        }
    };

    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <div className="projectList">
            <img
                className="projectImage"
                src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/blog/projects/${project.image}`}
                alt="project image"
            />
            <div className="projectInfo">
                <p>{project?.title}</p>
            </div>
            <div className="buttonContainer">
                <button className="updateBtn" onClick={openModal}>update</button>
                <button className="deleteBtn" onClick={() => deleteProject()}>delete</button>
            </div>

            {modalVisible && (
                <UpdateProject
                    projectData={project}
                    onClose={closeModal}
                    reFetch={reFetch}
                />
            )}
            {error && <Error error={errorMessage} />}

        </div>
    )
}

ProjectList.propTypes = {
    project: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    }).isRequired,
    reFetch: PropTypes.func.isRequired
};