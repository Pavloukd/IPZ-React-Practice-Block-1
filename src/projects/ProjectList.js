import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProjectCard from './ProjectCard';

import { Project } from './Project';
import ProjectForm from './ProjectForm';

function ProjectList({ projects, onSave }) {
    const handleEdit = (project) => {
        console.log(project);
        setProjectBeingEdited(project);
    }

    const cancelEditing = () => {
        setProjectBeingEdited({})
    }

    const [projectBeingEdited, setProjectBeingEdited] = useState({});
    const items = projects.map(project => (
        <div key={project.id} className="cols-sm">
        {project === projectBeingEdited ? (
            <ProjectForm onCancel={cancelEditing} onSave={onSave} project={project}/>
        ) : (
            <ProjectCard project={project} onEdit={handleEdit}/>
        )}
        </div>
    ));

    return <div className='row'>{items}</div>
}

ProjectList.propTypes = {
    onSave: PropTypes.func.isRequired,
    projects: PropTypes.arrayOf(PropTypes.instanceOf(Project)).isRequired
}

export default ProjectList;