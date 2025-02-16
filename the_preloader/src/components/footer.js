import {FaEnvelope }   from 'react-icons/fa';

export default function Footer()
{
    return (
        <footer className="mt-[1300px] bg-gray-900 text-white text-center">
            <p>&copy; 2025 Laptop Store. All Rights Reserved.</p>
            <div className="mt-2">
            <FaEnvelope className="inline text-xl" /> support@laptopstore.com
            </div>
        </footer>
    )
}