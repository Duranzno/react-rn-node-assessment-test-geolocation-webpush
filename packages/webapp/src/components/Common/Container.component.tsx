import React from 'react'
export const Container: React.FC = (props) => {
    return (
        <div {...props} className="flex flex-col items-center justify-center rounded-xl border-black border-2 border-solid bg-white min-w-3/4 min-h-3/4 max-h-semi max-w-semi " />
    )
}