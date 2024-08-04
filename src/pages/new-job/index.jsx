import React, { useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import { LuDot } from 'react-icons/lu';
import CustomCheckbox from '../../components/CustomCheckbox';
import CustomRadio from '../../components/CustomRadio';
import CountrySelect from '../../components/CustomSelect';
import { MdAccessTimeFilled } from 'react-icons/md';
import { FaCommentsDollar } from 'react-icons/fa';
import CurrencyInput from '../../components/CurrencyInput';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewJobPage = () => {
    const [formData, setFormData] = useState({
        companyLogo: '',
        title: '',
        postedDate: '',
        candidatesCount: '12',
        salary: '',
        position: '',
    });

    const [checkboxes, setCheckboxes] = useState({
        fullTime: false,
        partTime: false,
        onDemand: false,
        negotiable: false,
    });

    const [selectedOption, setSelectedOption] = useState('');
    const [selectedOptionBtn, setSelectedOptionBtn] = useState('');

    const handleCheckboxChange = (type) => {
        setCheckboxes(prevState => ({
            ...prevState,
            [type]: !prevState[type],
        }));
    };

    const handleRadioChange = (value) => {
        setSelectedOption(value);
    };

    const handleSelect = (value) => {
        setSelectedOptionBtn(value);
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setFormData({
                ...formData,
                companyLogo: reader.result,
            });
        };
        reader.readAsDataURL(file);
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop: handleDrop });

    const handleSubmit = async () => {
        const employmentType = [];
        if (checkboxes.fullTime) employmentType.push('Full-time');
        if (checkboxes.partTime) employmentType.push('Part-time');
        if (checkboxes.onDemand) employmentType.push('On-demand');
        if (checkboxes.negotiable) employmentType.push('Negotiable');

        const experienceMap = {
            noExperience: 'No experience',
            oneYear: '1 yr experience',
            twoYears: '2 yrs experience',
            threeYears: '3+ yrs experience',
        };

        const finalFormData = {
            ...formData,
            employmentType: employmentType.join(', '),
            experience: experienceMap[selectedOption] || '',
        };

        try {
            const response = await axios.post('http://localhost:3000/jobs', finalFormData);
            toast.success('Job posted successfully!');
            console.log('Data posted successfully:', response.data);
        } catch (error) {
            toast.error('Error posting data. Please try again.');
            console.error('Error posting data:', error);
        }
    };

    return (
        <div className='py-20 min-h-screen'>
            <div className='flex justify-center'>
                <div className='max-w-[1120px]'>
                    <div className='w-[1120px]'>
                        <div>
                            <h1 className='font-bold text-2xl'>Create a new job</h1>
                        </div>
                        <div className='flex items-center gap-2 py-3 text-sm'>
                            <p>Dashboard</p>
                            <LuDot />
                            <p>Job</p>
                            <LuDot />
                            <p className='text-gray-400'>New job</p>
                        </div>
                        <div className='w-[1120px] flex justify-center py-10'>
                            <div className='w-[880px] rounded-lg shadow-lg shadow-black/5'>
                                <div className='p-6'>
                                    <h1 className='font-semibold text-lg'>Details</h1>
                                    <p className='text-gray-500 text-sm'>Title, short description, image...</p>
                                </div>
                                <hr />
                                <div className='p-6 font-semibold flex flex-col gap-3'>
                                    <h3>Title</h3>
                                    <input
                                        type='text'
                                        name='title'
                                        className='hover:border-black transition border w-full p-4 rounded-lg'
                                        placeholder='Ex: Software Engineer...'
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className='p-6 font-semibold flex flex-col gap-3'>
                                    <h3>Company Logo</h3>
                                    <div
                                        {...getRootProps({ className: 'dropzone border-dashed border-2 border-gray-300 p-6 rounded-lg flex items-center justify-center' })}
                                    >
                                        <input {...getInputProps()} />
                                        {formData.companyLogo ? (
                                            <img src={formData.companyLogo} alt='Company Logo' className='w-32 h-32 object-cover' />
                                        ) : (
                                            <p>Drag & drop a logo here, or click to select one</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='w-[1120px] flex justify-center py-10'>
                            <div className='w-[880px] rounded-lg shadow-lg flex flex-col gap-6 py-6 shadow-black/5'>
                                <div className='px-6'>
                                    <h1 className='font-semibold text-lg'>Properties</h1>
                                    <p className='text-gray-500 text-sm'>Additional functions and attributes...</p>
                                </div>
                                <hr />
                                <div className='px-6 flex flex-col gap-3'>
                                    <p>Employment type</p>
                                    <div className="p-4 flex gap-10">
                                        <CustomCheckbox
                                            checked={checkboxes.fullTime}
                                            onChange={() => handleCheckboxChange('fullTime')}
                                            label="Full-time"
                                        />
                                        <CustomCheckbox
                                            checked={checkboxes.partTime}
                                            onChange={() => handleCheckboxChange('partTime')}
                                            label="Part-time"
                                        />
                                        <CustomCheckbox
                                            checked={checkboxes.onDemand}
                                            onChange={() => handleCheckboxChange('onDemand')}
                                            label="On-demand"
                                        />
                                        <CustomCheckbox
                                            checked={checkboxes.negotiable}
                                            onChange={() => handleCheckboxChange('negotiable')}
                                            label="Negotiable"
                                        />
                                    </div>
                                </div>

                                <div className='px-6 flex flex-col gap-3'>
                                    <p>Experience</p>
                                    <div className='p-4 flex gap-10'>
                                        <CustomRadio
                                            checked={selectedOption === 'noExperience'}
                                            onChange={() => handleRadioChange('noExperience')}
                                            label="No experience"
                                            name="experience"
                                        />
                                        <CustomRadio
                                            checked={selectedOption === 'oneYear'}
                                            onChange={() => handleRadioChange('oneYear')}
                                            label="1 year exp"
                                            name="experience"
                                        />
                                        <CustomRadio
                                            checked={selectedOption === 'twoYears'}
                                            onChange={() => handleRadioChange('twoYears')}
                                            label="2 year exp"
                                            name="experience"
                                        />
                                        <CustomRadio
                                            checked={selectedOption === 'threeYears'}
                                            onChange={() => handleRadioChange('threeYears')}
                                            label="> 3 year exp"
                                            name="experience"
                                        />
                                    </div>
                                </div>

                                <div className='px-6 flex flex-col gap-3'>
                                    <div><h2>Role</h2></div>
                                    <select
                                        name='position'
                                        className='hover:border-black transition border w-full p-4 rounded-lg'
                                        onChange={handleInputChange}
                                    >
                                        <option disabled className='hidden'>+ Skills</option>
                                        <option value="UI">UI</option>
                                        <option value="UX">UX</option>
                                        <option value="Html">Html</option>
                                        <option value="JavaScript">JavaScript</option>
                                        <option value="TypeScript">TypeScript</option>
                                        <option value="Communicating">Communicating</option>
                                        <option value="Problem Solving">Problem Solving</option>
                                        <option value="Leadership">Leadership</option>
                                    </select>
                                </div>

                                <div className='px-6 flex flex-col gap-3'>
                                    <div><h2>Locations</h2></div>
                                    <CountrySelect />
                                </div>

                                <div className='px-6 flex flex-col gap-3'>
                                    <div><h2>Expired</h2></div>
                                    <input
                                        name='postedDate'
                                        className='hover:border-black transition border w-full p-4 rounded-lg'
                                        type='date'
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className='px-6 flex flex-col gap-3'>
                                    <div><h2>Payment Type</h2></div>
                                    <div className='flex justify-around'>
                                        <button
                                            onClick={() => handleSelect('hourly')}
                                            className={`rounded-lg border w-[404px] h-[109px] flex flex-col gap-2 items-center justify-center ${selectedOptionBtn === 'hourly' ? ' border-black' : ''}`}
                                        >
                                            <MdAccessTimeFilled className='text-4xl' />
                                            <p className='text-sm'>Hourly</p>
                                        </button>
                                        <button
                                            onClick={() => handleSelect('fixed')}
                                            className={`rounded-lg border w-[404px] h-[109px] flex flex-col gap-2 items-center justify-center ${selectedOptionBtn === 'fixed' ? ' border-black' : ''}`}
                                        >
                                            <FaCommentsDollar className='text-4xl' />
                                            <p className='text-sm'>Fixed</p>
                                        </button>
                                    </div>
                                </div>

                                <div className='px-6 flex flex-col gap-3'>
                                    <div><h2>Salary</h2></div>
                                    <CurrencyInput
                                        name='salary'
                                        onChange={handleInputChange}
                                        value={formData.salary}
                                    />
                                </div>

                                <div className='px-6 flex justify-end'>
                                    <button
                                        onClick={handleSubmit}
                                        className='bg-black text-white py-2 px-4 rounded-lg'
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default NewJobPage;
