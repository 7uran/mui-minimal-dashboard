import React, { useState } from 'react';
import { FaPlus, FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';
import { IoFilterSharp } from 'react-icons/io5';
import useSWR, { mutate } from 'swr';
import { fetcher, handleDelete as apiHandleDelete } from '../../services/api';
import Card from '../../components/card';
import { LuDot } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
const ListPage = () => {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/new-job`;
        navigate(path);
    }
    const { data, error } = useSWR('http://localhost:3000/jobs', fetcher);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    if (error) return <div>Failed to load jobs</div>;
    if (!data) return <div>Loading...</div>;

    const filteredData = data.filter(job =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = filteredData.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };

    const handleDelete = async (id) => {
        try {
            await apiHandleDelete(id);
            mutate('http://localhost:3002/jobs');
        } catch (error) {
            console.error('Failed to delete job:', error);
        }
    };
   
    return (
        <div className='py-20 min-h-screen'>
            <div className='flex justify-center'>
                <div className='max-w-[1120px]'>
                    <div className='w-[1120px]'>
                        <div className='flex items-center justify-between'>
                            <h1 className='font-bold text-2xl'>List</h1>
                            <button className='border text-white bg-black flex items-center px-3 py-2 gap-2 rounded-lg' onClick={routeChange}>
                                <FaPlus />
                                <p className='font-bold text-sm'>New job</p>
                            </button>
                        </div>
                        <div className='flex items-center gap-2 py-3 text-sm'><p>Dashboard</p><LuDot />
                            <p>Job</p>   <LuDot />
                            <p className='text-gray-400'>List</p> </div>
                        <div className='py-6'>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center w-fit border rounded-lg'>
                                    <CiSearch className='text-gray-500 mx-3' />
                                    <input
                                        type='text'
                                        placeholder='Search...'
                                        className='border-0 py-3 rounded-lg focus:outline-none'
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>

                                <div className='flex items-center'>
                                    <button className='font-bold flex items-center gap-2 hover:bg-gray-100 px-2 py-1 rounded-lg transition'>
                                        Filters<IoFilterSharp />
                                    </button>

                                    <select className='hover:bg-gray-100 px-2 py-1 rounded-lg transition cursor-pointer'>
                                        <option disabled selected className='hidden'>Sort by: Latest</option>
                                        <option>Latest</option>
                                        <option>Popular</option>
                                        <option>Oldest</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className='flex flex-wrap justify-around'>
                                {paginatedData.map(job => (
                                    <Card key={job.id} job={job} onDelete={handleDelete} />
                                ))}
                            </div>

                            <div className='flex items-center justify-center py-10'>
                                <button
                                    className='hover:bg-gray-200 w-8 h-8 rounded-full transition flex items-center justify-center'
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                >
                                    <FaAngleLeft />
                                </button>
                                {[...Array(totalPages)].map((_, index) => (
                                    <button
                                        key={index}
                                        className={`w-8 h-8 rounded-full transition flex items-center justify-center ${currentPage === index + 1 ? 'bg-gray-200' : ''}`}
                                        onClick={() => handlePageChange(index + 1)}
                                    >
                                        {index + 1}
                                    </button>
                                ))}
                                <button
                                    className='hover:bg-gray-200 w-8 h-8 rounded-full transition flex items-center justify-center'
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    disabled={currentPage === totalPages}>
                                    <FaAngleRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListPage;
