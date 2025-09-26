import React, { useRef, useState, useEffect } from 'react';
import { BsArrowUp, BsPaperclip } from 'react-icons/bs';

export default function InputFeild() {
    const [message, setMessage] = useState('');
    const textareaRef = useRef(null);
    
    const handleInputChange = (e) => {
        setMessage(e.target.value);
        const textArea = textareaRef.current;
        textArea.style.height = "auto";
        textArea.style.height = Math.min(textArea.scrollHeight, 150) + "px";
    };

    const handleSubmit = () => {
        if (message.trim()) {
            console.log('Message sent:', message);
            setMessage('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
        }
    };

    return (
        <div className='relative max-w-4xl mx-auto p-4'>
            <div className='relative bg-[#303030] text-white pb-14 shadow-lg rounded-xl '>
                <textarea
                    ref={textareaRef}
                    value={message}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder='Ask me anything...'
                    className='w-full py-4 px-6 min-h-0 text-lg resize-none border-none outline-none pr-16 pl-5 transition-all duration-200'
                    rows={1}
                />
                
                {/* File Upload Button with Icon */}
                <label 
                    htmlFor="file" 
                    className='absolute bottom-4 left-3 p-2 rounded-full bg-gray-600 hover:bg-gray-500 text-white cursor-pointer transition-colors duration-200'
                    title="Upload file"
                >
                    <BsPaperclip className="text-lg" />
                </label>
                <input 
                    className='hidden'
                    type="file" 
                    name="file" 
                    id="file" 
                />
                
                {/* Send Button */}
                <button
                    onClick={handleSubmit}
                    disabled={!message.trim()}
                    className={`absolute bottom-4 right-3 p-2 rounded-full transition-all duration-200 ${
                        message.trim() 
                            ? 'bg-gray-50 text-black hover:bg-white cursor-pointer' 
                            : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    }`}
                >
                    <BsArrowUp className="text-lg font-bold" />
                </button>
            </div>
        </div>
    );
}