import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {

    return (
        <footer className="bg-[#1a1b1b] text-gray-500 pt-16 pb-6 relative">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col sm:flex-row justify-evenly gap-8 py-10">
                    <div className="flex flex-row space-x-8 pb-6">
                        <div className="flex items-center space-x-2">
                            <FaEnvelope className="text-cyan-300" />
                            <a href="mailto:nastia1989@gmail.com" className="hover:text-cyan-300">nastia1989@gmail.com</a>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaPhoneAlt className="text-cyan-300" />
                            <span>(+972) 050-2212773</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaLinkedin className="text-cyan-300" />
                            <a href="https://www.linkedin.com/in/anastacia-siniagovski/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300">
                                LinkedIn
                            </a>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaGithub className="text-cyan-300" />
                            <a href="https://github.com/ScrawnyGrandpa" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300">
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="absolute bottom-14 left-0 right-0 text-center text-xs text-gray-400 py-4">
                    <p>© 2024 All Rights Reserved | ScrawnyGrandpa Guides</p>
                    <p>Do not share any personal info on this site.</p>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
                    <p>Made with ❤️ by ScrawnyGrandpa Guides</p>
                </div>
            </div>
        </footer>
    );
}
