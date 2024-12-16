import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Settings, Logout } from '@mui/icons-material';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { useAuthentication } from '../../providers/AuthenticationProvider';
import { ROUTES } from '../../router';
import { accMenuButton } from '../../utils/tailwindStylesHelper';

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
                    src={user.avatarImgURL || "https://d.furaffinity.net/art/khatmedic/1598338509/1598338509.khatmedic_random.png"}
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full object-cover border-[2px] border-cyan-600"
                />
            </button>
            {isOpen && (
                <div
                    className="absolute mt-2 w-50 bg-[#212930] shadow-lg rounded-sm z-50"
                    style={{
                        top: (anchor.current?.getBoundingClientRect().bottom || 0),
                        left: (anchor.current?.getBoundingClientRect().left || 0) - 150,
                    }}
                    onClick={closeMenu}
                >
                    <div className="p-3 flex items-center space-x-2">
                        <img
                            src={user.avatarImgURL || "https://d.furaffinity.net/art/khatmedic/1598338509/1598338509.khatmedic_random.png"}
                            alt="User Avatar"
                            className="w-8 h-8 rounded-full object-cover"
                        />
                        <span className="text-sm">{user.email}</span>
                    </div>
                    <hr className="border-t border-gray-200" />
                    {user.isAdmin && <button
                        onClick={adminPortal}
                        className={accMenuButton}
                    >
                        <AdminPanelSettingsIcon fontSize="small" className="mr-2" />
                        Admin Portal
                    </button>}
                    <button
                        onClick={userProfile}
                        className={accMenuButton}
                    >
                        <Settings fontSize="small" className="mr-2" />
                        User Profile
                    </button>
                    <button
                        onClick={logout}
                        className={accMenuButton}
                    >
                        <Logout fontSize="small" className="mr-2" />
                        Logout
                    </button>
                </div>
            )}
        </>
    );
}
