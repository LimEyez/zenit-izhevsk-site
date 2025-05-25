import React from 'react';

const TableElement = (
    { className = '', title = '', children }:
        {
            className?: string | null | undefined,
            title?: string | number | null | undefined,
            children?: React.ReactNode
        }
) => {
    return (
        <div lang='ru' className={`text-center bg-[#00102D] flex flex-1 justify-center items-center hyphens-auto break-words pl-[10px] pr-[10px] lang ${className}`}>
            {title !== null && title !== undefined ? <p>{title}</p> : null}
            {children}
        </div>
    );
}

export default TableElement;
