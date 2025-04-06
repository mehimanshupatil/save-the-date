import { useEffect, useRef } from 'react';
import './Curtains.scss';

export const Curtains = () => {
const start = useRef<HTMLDivElement>(null)
const end = useRef<HTMLDivElement>(null)
const button = useRef<HTMLButtonElement>(null)
 
        useEffect(() => {
            const handleClick = (event: MouseEvent) => {
                start.current?.classList.add('animate')
                end.current?.classList.add('animate')
                button.current?.classList.add('hide')
            };
    
            window.addEventListener("click", handleClick);
            return () => window.removeEventListener("click", handleClick);
        }, [ ]);

    return ( 
        <div className="curtainItems">
            <div ref={start} className="curtainItem start"></div>
            <div  ref={end}  className="curtainItem end "></div>
       <button ref={button} className='button mt-6 px-6 py-3 bg-rose-500 text-white rounded-full font-light '>CLICK HERE</button>
        </div>)
}