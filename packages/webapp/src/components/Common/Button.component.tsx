import React from 'react'
import cx from 'classnames'
export const Button: React.FC<{ disabled?: boolean }> = (props) => {
    const className = cx(
        'font-sans text-md px-4 py-2 bg-white rounded-lg', {
        'text-black shadow-button border-solid border-2 border-black': !props.disabled,
        'text-grey': props.disabled
    }
    )
    return (
        <button {...props}
            className={className} />
    )
}