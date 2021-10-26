import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://safe-bayou-45775.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    });

    const handleDelete = id => {
        const procced = window.confirm('Are you sure you want to delete the service?')
        if (procced) {
            const url = `https://safe-bayou-45775.herokuapp.com/services/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("Deleted Successfully");
                        const remaining = services.filter(service => service._id !== id);
                        setServices(remaining);
                    }
                });
        }
    }

    return (
        <div>
            <h2>This is manage Services</h2>

            {
                services.map(service => <div key={service._id}>
                    <h2>{service.name}</h2>
                    <button onClick={() => handleDelete(service._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;