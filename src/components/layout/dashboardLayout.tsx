import React, { useState } from 'react'

import { useLocation } from 'react-router-dom';

import MobileLayout from './mobileLayout';
import Desktopleyout from './desktopLayout';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false); //mobile mode button in on or not...
    const location = useLocation();

    const openSidebar = () => {
        setIsOpen(!isOpen);
    }

    const activePage = location.pathname;

    return (
        <>
            <MobileLayout closeSideBar={openSidebar} isOpen={isOpen} />
            <Desktopleyout buttonClick={openSidebar} activePage={activePage} />
            {children}

        </>
    )
}

export default DashboardLayout