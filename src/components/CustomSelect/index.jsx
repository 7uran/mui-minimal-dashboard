import React from 'react';

const countries = [
    { name: 'Azerbaijan', code: '+994' },
    { name: 'United States', code: '+1' },
    { name: 'United Kingdom', code: '+44' },
    { name: 'Canada', code: '+1' },
    { name: 'Germany', code: '+49' },
    { name: 'France', code: '+33' },
    { name: 'Japan', code: '+81' },
    { name: 'China', code: '+86' },
    { name: 'India', code: '+91' },
    { name: 'Australia', code: '+61' },
    { name: 'Brazil', code: '+55' },
    { name: 'South Africa', code: '+27' },
    { name: 'Mexico', code: '+52' },
    { name: 'Russia', code: '+7' },
    { name: 'Italy', code: '+39' },
    { name: 'Spain', code: '+34' },
    { name: 'Netherlands', code: '+31' },
    { name: 'Sweden', code: '+46' },
    { name: 'Switzerland', code: '+41' },
    { name: 'Turkey', code: '+90' },
    { name: 'Saudi Arabia', code: '+966' },
    { name: 'Argentina', code: '+54' },
    { name: 'Chile', code: '+56' },
    { name: 'Colombia', code: '+57' },
    { name: 'Peru', code: '+51' },
    { name: 'Vietnam', code: '+84' },
    { name: 'Thailand', code: '+66' },
    { name: 'Singapore', code: '+65' },
    { name: 'Malaysia', code: '+60' },
    { name: 'Philippines', code: '+63' },
    { name: 'New Zealand', code: '+64' },
    { name: 'Pakistan', code: '+92' },
    { name: 'Iran', code: '+98' },
    { name: 'Iraq', code: '+964' },
    { name: 'Jordan', code: '+962' },
    { name: 'Lebanon', code: '+961' },
    { name: 'Kuwait', code: '+965' },
    { name: 'Oman', code: '+968' },
    { name: 'Bahrain', code: '+973' },
    { name: 'Qatar', code: '+974' },
    { name: 'United Arab Emirates', code: '+971' },
    { name: 'South Korea', code: '+82' },
    { name: 'Hong Kong', code: '+852' },
    { name: 'Taiwan', code: '+886' },
    { name: 'Mongolia', code: '+976' },
    { name: 'Nepal', code: '+977' },
    { name: 'Sri Lanka', code: '+94' },
    { name: 'Bangladesh', code: '+880' },
    { name: 'Myanmar', code: '+95' },
    { name: 'Cambodia', code: '+855' },
    { name: 'Laos', code: '+856' },
    { name: 'Brunei', code: '+673' },
    { name: 'Maldives', code: '+960' },
    { name: 'Mauritius', code: '+230' },
    { name: 'Kenya', code: '+254' },
    { name: 'Nigeria', code: '+234' },
    { name: 'Ghana', code: '+233' },
    { name: 'Uganda', code: '+256' },
    { name: 'Tanzania', code: '+255' },
    { name: 'Zambia', code: '+260' },
    { name: 'Zimbabwe', code: '+263' },
    { name: 'Botswana', code: '+267' },
    { name: 'Namibia', code: '+264' },
    { name: 'Angola', code: '+244' },
    { name: 'Mozambique', code: '+258' },
];

const CountrySelect = () => {
    return (
        <select className='hover:border-black transition border w-full p-4 rounded-lg'>
            <option disabled selected value=''>
                Select a country...
            </option>
            {countries.map((country, index) => (
                <option key={index} value={country.code}>
                    {country.name} {country.code}
                </option>
            ))}
        </select>
    );
};

export default CountrySelect;
