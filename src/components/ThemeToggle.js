import React from 'react';
import { FaSun, FaMoon} from "react-icons/fa";
import { ThemeContext } from './ThemeContext';

const Toggle = ({imgHandler}) => {
    const { theme, setTheme } = React.useContext(ThemeContext);

    return (
        <div className="transition duration-500 ease-in-out rounded-full p-2">
        <div>
        </div>
            {theme === 'dark' ? (
                <div onClick={imgHandler} className='p-2 rounded-full bg-[#FFC300]'>
                <FaSun
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="text-gray-700 dark:text-white text-lg cursor-pointer"
                />
                </div>
            ) : (   <div onClick={imgHandler} className='p-2 rounded-full bg-[#FFC300]'>
                    <FaMoon
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="text-gray-700 dark:text-white text-lg cursor-pointer"
                    />
                    </div>
                )}
        </div>
    );
};

export default Toggle;