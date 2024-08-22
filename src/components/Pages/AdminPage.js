import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'; // Assuming you're using react-router
import CustomerDetails from '../CustomerDetails';
import ProductDetails from '../ProductDetails';
import OrderDetails from '../OrderDetails';
import ShipmentDetails from '../ShipmentDetails';
import RegisteredCustomers from '../RegisteredCustomers';
import './AdminPage.css';

export default function Admin() {
    const history = useHistory(); // To handle redirection

    // Check admin status when component mounts
    useEffect(() => {
        const isAdmin = localStorage.getItem('isAdmin');
        if (isAdmin !== 'true') {
            history.push('/'); 
        }
    }, [history]);

    const [showCustomers, setShowCustomers] = useState(false);
    const [showProducts, setShowProducts] = useState(false);
    const [showOrders, setShowOrders] = useState(false);
    const [showShipments, setShowShipments] = useState(false);
    const [showRegistered, setShowRegistered] = useState(false);

    const handleShowCustomers = () => {
        setShowCustomers(true);
        setShowProducts(false);
        setShowOrders(false);
        setShowShipments(false);
        setShowRegistered(false);
    };

    const handleShowProducts = () => {
        setShowCustomers(false);
        setShowProducts(true);
        setShowOrders(false);
        setShowShipments(false);
        setShowRegistered(false);
    };

    const handleShowOrders = () => {
        setShowCustomers(false);
        setShowProducts(false);
        setShowOrders(true);
        setShowShipments(false);
        setShowRegistered(false);
    };

    const handleShowShipments = () => {
        setShowCustomers(false);
        setShowProducts(false);
        setShowOrders(false);
        setShowShipments(true);
        setShowRegistered(false);
    };

    const handleShowRegistered = () => {
        setShowCustomers(false);
        setShowProducts(false);
        setShowOrders(false);
        setShowShipments(false);
        setShowRegistered(true);
    };

    return (
        <div className="admin-container">
            <h3 className="i_name">Dashboard</h3>
            <button onClick={handleShowCustomers}>Customers</button>
            <button onClick={handleShowProducts}>Product Details</button>
            <button onClick={handleShowOrders}>Order Details</button>
            <button onClick={handleShowShipments}>Shipment Details</button>
            <button onClick={handleShowRegistered}>Registered Customer Details</button>

            {showCustomers && <CustomerDetails />}
            {showProducts && <ProductDetails />}
            {showOrders && <OrderDetails />}
            {showShipments && <ShipmentDetails />}
            {showRegistered && <RegisteredCustomers />}
        </div>
    );
}
