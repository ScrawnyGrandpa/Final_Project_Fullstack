import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Settings, Logout } from '@mui/icons-material';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { useAuthentication } from '../../providers/AuthenticationProvider';
import { ROUTES } from '../../router';

export function AccountMenu() {
    const anchor = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const { user, logout } = useAuthentication();
    const navigate = useNavigate();

    const toggleMenu = () => setIsOpen(prev => !prev);
    const closeMenu = () => setIsOpen(false);

    const userProfile = () => {
        navigate(ROUTES.USER_PROFILE);
    };
    const adminPortal = () => {
        navigate(ROUTES.CRM);
    };

    const handleClickOutside = (event) => {
        if (anchor.current && !anchor.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <>
            <button
                className="p-0 focus:outline-none"
                onClick={toggleMenu}
                ref={anchor}
                aria-label="User Settings"
            >
                <img
                    src={user.avatarImgURL || "https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_960_720.jpg"}
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full object-cover"
                />
            </button>

            {/* Menu dropdown */}
            {isOpen && (
                <div
                    className="absolute mt-2 w-50 bg-[#212930] shadow-lg rounded-sm z-50"
                    style={{
                        top: (anchor.current?.getBoundingClientRect().bottom || 0) + 20,
                        left: (anchor.current?.getBoundingClientRect().left || 0) - 150, // Subtract 200px from the left position
                    }}
                    onClick={closeMenu} // Close when clicked inside
                >
                    <div className="p-3 flex items-center space-x-2">
                        <img
                            src={user.avatarImgURL || "https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_960_720.jpg"}
                            alt="User Avatar"
                            className="w-8 h-8 rounded-full object-cover"
                        />
                        <span className="text-sm">{user.email}</span>
                    </div>
                    <hr className="border-t border-gray-200" />
                    {user.isAdmin && <button
                        onClick={adminPortal}
                        className="flex items-center p-3 text-white hover:bg-gray-700 w-full text-left"
                    >
                        <AdminPanelSettingsIcon fontSize="small" className="mr-2" />
                        Admin Portal
                    </button>}
                    <button
                        onClick={userProfile}
                        className="flex items-center p-3 text-white hover:bg-gray-700 w-full text-left"
                    >
                        <Settings fontSize="small" className="mr-2" />
                        User Profile
                    </button>
                    <button
                        onClick={logout}
                        className="flex items-center p-3 text-white hover:bg-gray-700 w-full text-left"
                    >
                        <Logout fontSize="small" className="mr-2" />
                        Logout
                    </button>
                </div>
            )}
        </>
    );
}
