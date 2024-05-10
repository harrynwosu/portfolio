import React from 'react'
import { useRef, useEffect } from 'react';

const Tooltip = ({ label }) => {
    const tooltipRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const handlePositioning = () => {
        if (tooltipRef.current) {
            const tooltipRect = tooltipRef.current.getBoundingClientRect();
            const viewportWidth = window.innerWidth;

            // Check if the tooltip will be clipped on the right side
            if (tooltipRect.right > viewportWidth) {
            // Adjust the right position to prevent clipping
            const rightOffset = viewportWidth - tooltipRect.right - 10; // Adding 10px for some spacing
            tooltipRef.current.style.right = `${rightOffset}px`;
            }
        }
        };

        // Call the positioning function on component mount and window resize
        handlePositioning();
        window.addEventListener('resize', handlePositioning);

        // Clean up the event listener on component unmount
        return () => {
        window.removeEventListener('resize', handlePositioning);
        };
    }, []);


    return (
        <div>
            <span 
                ref={tooltipRef}
                className="absolute -top-10 left-[50%] z-50 origin-left scale-0 px-4 py-4 rounded-lg border border-[#33353F] bg-[#18191E] text-3xl shadow-md transition-all duration-300 ease-in-out group-hover:scale-50 whitespace-nowrap overflow-visible"
            >
                {label}
            </span> 
        </div>
    )
}

export default Tooltip