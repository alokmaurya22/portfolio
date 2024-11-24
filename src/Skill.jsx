import React from 'react';
import './SkillTree.css';

const skills = [
  'JS',
  'Javascript',
  'Typescript',
  'Python',
  'Java',
  'AWS',
  'React',
  'Kubernetes',
  'MongoDB',
  'Bash',
  'Azure',
  'NextJs',
  'Express',
  'Postgres',
  'Git',
  'Redis',
  'Docker',
  'ManyMore',
];

const SkillTree = () => {
  const [expanded, setExpanded] = useState({});

  const handleToggle = (skill) => {
    setExpanded({ ...expanded, [skill]: !expanded[skill] });
  };

  const renderSkill = (skill) => {
    if (skill.children) {
      return (
        <div key={skill} className="tree-node">
          <span onClick={() => handleToggle(skill)}>{skill}</span>
          {expanded[skill] && (
            <ul className="tree-children">
              {skill.children.map(child => (
                <li key={child} className="tree-child">
                  {renderSkill(child)}
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    } else {
      return <li key={skill} className="tree-leaf">{skill}</li>;
    }
  };

  const groupedSkills = {
    'Programming Languages': ['JS', 'Python', 'Java'],
    'Cloud Platforms': ['AWS', 'Azure'],
    'Frontend Frameworks': ['React', 'NextJs'],
    'Databases': ['MongoDB', 'Postgres'],
    'Tools': ['Git', 'Redis', 'Docker'],
    'Others': ['Kubernetes', 'Bash', 'Express'],
  };

  return (
    <div className="tree-container">
      <h1>Skill Tree</h1>
      <ul className="tree-root">
        {Object.keys(groupedSkills).map(category => (
          <li key={category} className="tree-category">
            <span>{category}</span>
            <ul className="tree-children">
              {groupedSkills[category].map(skill => (
                <li key={skill} className="tree-child">
                  {renderSkill(skill)}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillTree;