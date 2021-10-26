import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const [service, setService] = useState({});
    const { serviceId } = useParams();

    useEffect(() => {
        const url = `https://safe-bayou-45775.herokuapp.com/services/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <div>
            <h1>Service Name: {service.name}</h1>
            <h2>This is Booking: {serviceId}</h2>
        </div>
    );
};

export default Booking;