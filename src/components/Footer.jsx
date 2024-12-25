import React from "react";
import Image from "next/image";
import fit from "../assets/fit.png";
import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaTwitter, FaApple, FaGooglePlay } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#2d1a17] text-neutral-300 font-lato pr-[72px] pl-[72px]">
            {/* Main Content */}
            <div className="py-8 grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Company Info */}
                <div>
                    <div className="flex items-center mb-4">
                        <Image src={fit} alt="FitnEarnPal Logo" className="h-8 w-9" />
                        <h2 className="text-2xl font-bold text-gradient bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-transparent bg-clip-text ml-2">
                            FitnEarnPal
                        </h2>
                    </div>
                    <p className="text-sm">
                        FitnEarnPal is your all-in-one place where you can train people as per your schedule. It's a place where you
                        can upload workout videos, create live sessions, write blogs, and much more. Available on Android and iOS. Join our
                        community of coaches today!
                    </p>
                    <p className="mt-4 flex items-center text-sm">
                        <FaEnvelope className="h-4 w-5 text-white-500 mr-2" />
                        <a href="mailto:help-support@fitnearn.com" className="hover:underline">
                            help-support@fitnearn.com
                        </a>
                    </p>
                    <div className="flex mt-4 space-x-4">
                        <a href="/twitter" className="hover:text-white">
                            <FaTwitter className="text-xl" />
                        </a>
                        <a href="/facebook" className="hover:text-white">
                            <FaFacebook className="text-xl" />
                        </a>
                        <a href="/instagram" className="hover:text-white">
                            <FaInstagram className="text-xl" />
                        </a>
                        <a href="/github" className="hover:text-white">
                            <FaGithub className="text-xl" />
                        </a>
                    </div>
                </div>

                {/* Useful Links */}
                <div className="ml-24">
                    <h3 className="text-lg font-bold mb-4">Useful Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="/home" className="hover:underline">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/flow" className="hover:underline">
                                How it works
                            </a>
                        </li>
                        <li>
                            <a href="/features" className="hover:underline">
                                Features
                            </a>
                        </li>
                        <li>
                            <a href="/signUp" className="hover:underline">
                                Sign Up Form
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Policies */}
                <div className="ml-24">
                    <h3 className="text-lg font-bold mb-4">Policies</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="/aboutUs" className="hover:underline">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="/policy" className="hover:underline">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="/terms" className="hover:underline">
                                Terms & Conditions
                            </a>
                        </li>
                        <li>
                            <a href="/dataDeletion" className="hover:underline">
                                Data Deletion
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Download Now */}
                <div className="ml-24">
                    <h3 className="text-lg font-bold mb-4">Download Now</h3>
                    <div className="space-y-4 ">
                        <a href="/appleStore" className="flex items-center border-2 border-neutral-100 px-5 py-2 bg-red-500 text-white rounded-lg shadow-lg hover:opacity-90">
                            <FaApple className="w-10 h-10 mr-2" />
                            <div className="text-left">
                                <p className="text-xs">Download on the</p>
                                <p className="text-xl font-semibold">App Store</p>
                            </div>
                        </a>
                        <a href="/appStore" className="flex items-center px-5 py-2 border-2 border-neutral-100 bg-red-500 text-white rounded-lg shadow-lg hover:opacity-90">
                            <FaGooglePlay className="w-10 h-10 mr-2" />
                            <div className="text-left">
                                <p className="text-xs">Download on the</p>
                                <p className="text-xl font-semibold">Google Play</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <hr className="border-gray-600" />

            {/* Footer Bottom */}
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 py-4">
                <p>© Copyright 2024, All Rights Reserved.</p>
                <p>Made with ❤️ in India</p>
                <p>Reg@2024</p>
            </div>
        </footer>
    );
}
