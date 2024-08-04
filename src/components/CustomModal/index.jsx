import React from 'react';
import { IoClose } from 'react-icons/io5';

const CustomModal = ({ job, onClose }) => {
    if (!job) return null;

    return (
        <div className='fixed inset-0 flex items-center justify-center z-50 bg-black/50'>
            <div className='bg-white rounded-lg shadow-lg p-6 w-[500px] relative'>
                <button
                    className='absolute top-2 right-2 p-2'
                    onClick={onClose}
                >
                    <IoClose className='text-2xl' />
                </button>
                <img src={job.companyLogo} alt="" className='w-24 h-24 rounded-xl mx-auto' />
                <h1 className='text-2xl font-semibold mt-4'>{job.title}</h1>
                <h3 className='text-gray-500'>Posted date: {job.postedDate}</h3>
                <div className='mt-4'>
                    <p><strong>Experience:</strong> {job.experience}</p>
                    <p><strong>Salary:</strong> {job.salary}</p>
                    <p><strong>Employment Type:</strong> {job.employmentType}</p>
                    <p><strong>Position:</strong> {job.position}</p>
                    <p><strong>Candidates Count:</strong> {job.candidatesCount}</p>
                </div>
            </div>
        </div>
    );
};

export default CustomModal;
