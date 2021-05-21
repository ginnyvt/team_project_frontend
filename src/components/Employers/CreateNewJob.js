import React from 'react';
import Select from 'react-select';

import './CreateNewJob.css';

const frontendSkills = [
  { value: 'react', label: 'ReactJS' },
  { value: 'vue', label: 'VueJS' },
  { value: 'bootstrap', label: 'Bootstrap' },
  { value: 'material ui', label: 'Material UI' },
];

const backendSkills = [
  { value: 'express', label: 'ExpressJS' },
  { value: 'python', label: 'Python' },
  { value: 'graphql', label: 'GraphQL' },
];

const groupedOptions = [
  {
    label: 'Frontend',
    options: frontendSkills,
  },
  {
    label: 'Backend',
    options: backendSkills,
  },
];

const groupStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const groupBadgeStyles = {
  backgroundColor: '#EBECF0',
  borderRadius: '2em',
  color: '#172B4D',
  display: 'inline-block',
  fontSize: 12,
  fontWeight: 'normal',
  lineHeight: '1',
  minWidth: 1,
  padding: '0.16666666666667em 0.5em',
  textAlign: 'center',
};

const formatGroupLabel = (data) => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

const CreateNewJob = () => {
  return (
    <div className='container create-new-job-section'>
      <div className='row'>
        <div className='col-12'>
          <h3 className='text-center'>Create new job</h3>
          <form>
            <div className='form-group'>
              <label htmlFor='company'>Company</label>
              <input type='text' className='form-control' />
            </div>

            <div className='form-group'>
              <label htmlFor='location'>Location</label>
              <input type='text' className='form-control' />
            </div>

            <div className='form-group'>
              <label htmlFor='type'>Type</label>
              <input type='text' className='form-control' />
            </div>

            <div className='form-group'>
              <label htmlFor='position'>Position</label>
              <input type='text' className='form-control' />
            </div>

            <div className='form-group'>
              <label htmlFor='specialty'>Specialty</label>
              <input type='text' className='form-control' />
            </div>

            <div className='form-group'>
              <label htmlFor='company'>Description</label>
              <textarea className='form-control' rows='3'></textarea>
            </div>

            <div className='form-group'>
              <label htmlFor='skills'>Frontend Skills</label>
            </div>

            <Select options={frontendSkills} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateNewJob;
