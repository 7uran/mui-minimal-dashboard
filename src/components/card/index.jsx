import React, { useState } from 'react';
import axios from 'axios';
import { BsThreeDotsVertical, BsTrash3 } from 'react-icons/bs';
import { HiMiniUsers } from 'react-icons/hi2';
import { MdSignalCellularAlt, MdOutlineAccessTimeFilled } from 'react-icons/md';
import { FaCommentsDollar, FaUser, FaPen } from 'react-icons/fa';
import { IoEye } from 'react-icons/io5';
import CustomModal from '../CustomModal';
import EditModal from '../EditModal';
import { toast } from 'react-toastify';
import { mutate } from 'swr';

const BASE_URL = "http://localhost:3000/jobs";

const Card = ({ job, onDelete }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const openEditModal = () => {
        setIsEditModalOpen(true);
    };

    const closeEditModal = () => {
        setIsEditModalOpen(false);
    };

    const handleSave = async (updatedJob) => {
        try {
            await axios.put(`${BASE_URL}/${updatedJob.id}`, updatedJob);
            mutate(BASE_URL);
            toast.success('Job updated successfully!');
            closeEditModal();
        } catch (error) {
            console.error(error);
            toast.error('Error updating job');
        }
    };

    return (
        <div className='w-[357px] h-[270px] rounded-2xl border my-2 shadow-lg shadow-black/5'>
            <div>
                <div className='flex justify-between p-5'>
                    <div>
                        <img src={job.companyLogo} alt="" className='w-[50px] rounded-xl' />
                    </div>
                    <div>
                        <button
                            className='relative hover:bg-gray-200 p-2 rounded-full transition flex'
                            onClick={toggleDropdown}
                        >
                            <BsThreeDotsVertical />
                            {isDropdownOpen && (
                                <div className='flex-col shadow-lg p-2 rounded-md shadow-black/5 w-32 absolute gap-2 bg-custom-gradient translate-x-[-130px]'>
                                    <button
                                        className='flex items-center gap-2 p-1 hover:bg-gray-100 w-full rounded transition'
                                        onClick={openModal}
                                    >
                                        <IoEye /> View
                                    </button>
                                    <button
                                        className='flex items-center gap-2 p-1 hover:bg-gray-100 w-full rounded transition'
                                        onClick={openEditModal}
                                    >
                                        <FaPen /> Edit
                                    </button>
                                    <button
                                        className='flex items-center gap-2 p-1 text-red-900 hover:bg-gray-100 w-full rounded transition'
                                        onClick={() => onDelete(job.id)}
                                    >
                                        <BsTrash3 /> Delete
                                    </button>
                                </div>
                            )}
                        </button>
                    </div>
                </div>
                <div className='py-3 flex flex-col gap-2 p-5'>
                    <h1 className='font-semibold hover:underline w-fit cursor-pointer'>{job.title}</h1>
                    <h3 className='text-xs text-gray-400'>Posted date: {job.postedDate}</h3>
                    <h4 className='flex items-center text-mainColor text-xs'>
                        <HiMiniUsers />{job.candidatesCount} candidates
                    </h4>
                </div>
                <hr />
            </div>
            <div className='p-5 flex items-center gap-12'>
                <div className='text-xs flex flex-col gap-2'>
                    <p className='flex items-center gap-1 text-gray-400'>
                        <MdSignalCellularAlt />{job.experience}
                    </p>
                    <p className='flex items-center gap-1 text-gray-400'>
                        <FaCommentsDollar />{job.salary}
                    </p>
                </div>
                <div className='text-xs flex flex-col gap-2'>
                    <p className='flex items-center gap-1 text-gray-400'>
                        <MdOutlineAccessTimeFilled />{job.employmentType}
                    </p>
                    <p className='flex items-center gap-1 text-gray-400'>
                        <FaUser />{job.position}
                    </p>
                </div>
            </div>

            {isModalOpen && <CustomModal job={job} onClose={closeModal} />}
            {isEditModalOpen && <EditModal job={job} onClose={closeEditModal} onSave={handleSave} />}
        </div>
    );
};

export default Card;
