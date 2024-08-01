import { useState } from "react";
import PropTypes from 'prop-types';
import { Action } from "@/components";
import { UpdateProject } from "@/modals/Update/UpdateProject";
import "./projectList.scss"

export const ProjectList = ({ project, reFetch }) => {

    const [modalVisible, setModalVisible] = useState(false);

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

            <Action
                reFetch={reFetch}
                setModalVisible={setModalVisible}
                endpoint={`projects/project?id=${project.id}`}
                title="project"
            />

            {modalVisible && (
                <UpdateProject
                    projectData={project}
                    onClose={closeModal}
                    reFetch={reFetch}
                />
            )}
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