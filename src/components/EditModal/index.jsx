import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';

const EditModal = ({ job, onClose, onSave }) => {
    const [formData, setFormData] = useState({ ...job });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <div className='fixed inset-0 flex items-center justify-center z-50 bg-black/50'>
            <div className='bg-white rounded-lg shadow-lg p-6 w-[500px] relative'>
                <button
                    className='absolute top-2 right-2 p-2'
                    onClick={onClose}
                >
                    <IoClose className='text-2xl' />
                </button>
                <h2 className='text-2xl font-semibold mb-4'>Edit Job</h2>
                <form onSubmit={handleSubmit} className='space-y-4'>
                    <div>
                        <label className='block text-sm font-medium'>Title</label>
                        <input
                            type='text'
                            name='title'
                            value={formData.title}
                            onChange={handleChange}
                            className='mt-1 p-2 border rounded w-full'
                        />
                    </div>
                    <div>
                        <label className='block text-sm font-medium'>Posted Date</label>
                        <input
                            type='date'
                            name='postedDate'
                            value={formData.postedDate}
                            onChange={handleChange}
                            className='mt-1 p-2 border rounded w-full'
                        />
                    </div>
                    <div>
                        <label className='block text-sm font-medium'>Experience</label>
                        <select
                            name='experience'
                            value={formData.experience}
                            onChange={handleChange}
                            className='mt-1 p-2 border rounded w-full'
                        >
                            <option value='noExperience'>No experience</option>
                            <option value='oneYear'>1 year exp</option>
                            <option value='twoYears'>2 year exp</option>
                            <option value='threeYears'> 3 year exp</option>
                        </select>
                    </div>
                    <div>
                        <label className='block text-sm font-medium'>Salary</label>
                        <input
                            type='number'
                            name='salary'
                            value={formData.salary}
                            onChange={handleChange}
                            className='mt-1 p-2 border rounded w-full'
                            placeholder='Enter salary'
                        />
                    </div>
                    <div>
                        <label className='block text-sm font-medium'>Employment Type</label>
                        <select
                            name='employmentType'
                            value={formData.employmentType}
                            onChange={handleChange}
                            className='mt-1 p-2 border rounded w-full'
                        >
                            <option value=''>Select Employment Type</option>
                            <option value='Full-time'>Full-time</option>
                            <option value='Part-time'>Part-time</option>
                            <option value='On-demand'>On-demand</option>
                            <option value='Negotiable'>Negotiable</option>
                        </select>
                    </div>
                    <div>
                        <label className='block text-sm font-medium'>Position</label>
                        <select
                            name='position'
                            value={formData.position}
                            onChange={handleChange}
                            className='mt-1 p-2 border rounded w-full'
                        >
                            <option value=''>Select Position</option>
                            <option value='UI'>UI</option>
                            <option value='UX'>UX</option>
                            <option value='Html'>Html</option>
                            <option value='JavaScript'>JavaScript</option>
                            <option value='TypeScript'>TypeScript</option>
                            <option value='Communicating'>Communicating</option>
                            <option value='Problem Solving'>Problem Solving</option>
                            <option value='Leadership'>Leadership</option>
                        </select>
                    </div>
                    <div>
                        <label className='block text-sm font-medium'>Candidates Count</label>
                        <input
                            type='number'
                            name='candidatesCount'
                            value={formData.candidatesCount}
                            onChange={handleChange}
                            className='mt-1 p-2 border rounded w-full'
                        />
                    </div>
                    <button
                        type='submit'
                        className='mt-4 p-2 bg-blue-500 text-white rounded'
                    >
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditModal;
