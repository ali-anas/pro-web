import React from 'react';

const SkillItemWrapper = ({ children, title }) => {
    return (
        <div className='mr-4 mb-4' title={title}>
            <div className='p-2 h-24 w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 flex items-center justify-center bg-bgSurface shadow-small rounded-full'>
                {children}
            </div>
        </div>
    )
}

export default SkillItemWrapper;