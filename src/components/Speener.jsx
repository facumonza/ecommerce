import React from 'react'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Speener = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (

        <div>
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
                </div>
            ) : (
                <div>
                    <h1>Productos cargados</h1>
                </div>
            )}
        </div>
    );
};

export default Speener
