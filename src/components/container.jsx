import React from "react";

export const Container = ({ children }) => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className=" p-6 rounded-lg shadow-2xl">
                {children}
            </div>
        </div>
    );
};
