import React, { useState } from 'react';
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi';


function Accordion( { title, content } ) {
    const [isOpen, setIsOpen] = useState( false );

    const toggleAccordion = () => {
        setIsOpen( !isOpen );
    };

    return (
        <div className="accordion-item">
            <div
                // className="accordion-title" onClick={ toggleAccordion }
                className={ `accordion-title ${isOpen ? 'open' : ''}` }
                onClick={ toggleAccordion }
            
            >
                <h3>{ title }</h3>
                <span>{ isOpen ? <BiSolidUpArrow/>: <BiSolidDownArrow/> }</span>
            </div>
            { isOpen && (
                <div className="accordion-content">
                    <p>{ content }</p>
                </div>
            ) }
        </div>
    );
}

export default Accordion;
