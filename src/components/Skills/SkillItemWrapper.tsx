import React from 'react';

const SkillItemWrapper = ({ children, title }) => {
    return (
        <div className='mr-4 mb-4' title={title}>
            <div className='p-2 h-24 w-24 md:h-32 md:w-32 lg:h-36 lg:w-36 flex flex-col items-center justify-center bg-bgSurface shadow-small rounded-md md:rounded-xl'>
                {children}
            </div>
        </div>
    )
}

export default SkillItemWrapper;