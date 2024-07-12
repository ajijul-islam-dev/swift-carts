import React from 'react';

const SectionTitle = ({title}:{title : string}) => {
    return (
        <div>
            <h2 className="text-xl border-l-[20px] border-red-500 pl-3">{title || "Title"}</h2>
        </div>
    );
};

export default SectionTitle;