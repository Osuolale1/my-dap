'use client';
import React, { useState } from 'react';



interface DashboardFeatureProps {
    handleProceedWithSolanaPay: () => void;
}

const DashboardFeature: React.FC<DashboardFeatureProps> = ({ handleProceedWithSolanaPay }) => {
    // State to track the quantity of each item
    const [quantities, setQuantities] = useState<number[]>([0, 0, 0, 0, 0]);

    // Function to increase the quantity of an item
    const increaseItem = (index: number) => {
        setQuantities((prevQuantities) => {
            const newQuantities = [...prevQuantities];
            newQuantities[index]++;
            return newQuantities;
        });
    };

    // Function to decrease the quantity of an item
    const decreaseItem = (index: number) => {
        setQuantities((prevQuantities) => {
            const newQuantities = [...prevQuantities];
            // Ensure the quantity does not go below 0
            if (newQuantities[index] > 0) {
                newQuantities[index]--;
            }
            return newQuantities;
        });
    };

    // Calculate the total sum of quantities
    const totalSum = quantities.reduce((acc, curr) => acc + curr, 0);

    // Render the dashboard feature component
    return (
        <div className="dashboard-container">
            <h1>Dashboard Feature</h1>
            {/* Display the list of items with buttons */}
            <div className="items-container">
                <ul className="item-list">
                    <li className="item">
                        Milk
                        <button onClick={() => decreaseItem(0)}>-</button>
                        <span>{quantities[0]}</span>
                        <button onClick={() => increaseItem(0)}>+</button>
                    </li>
                    <li className="item">
                        Detergent
                        <button onClick={() => decreaseItem(1)}>-</button>
                        <span>{quantities[1]}</span>
                        <button onClick={() => increaseItem(1)}>+</button>
                    </li>
                    <li className="item">
                        Shoes
                        <button onClick={() => decreaseItem(2)}>-</button>
                        <span>{quantities[2]}</span>
                        <button onClick={() => increaseItem(2)}>+</button>
                    </li>
                    <li className="item">
                        Jean
                        <button onClick={() => decreaseItem(3)}>-</button>
                        <span>{quantities[3]}</span>
                        <button onClick={() => increaseItem(3)}>+</button>
                    </li>
                    <li className="item">
                        Rice
                        <button onClick={() => decreaseItem(4)}>-</button>
                        <span>{quantities[4]}</span>
                        <button onClick={() => increaseItem(4)}>+</button>
                    </li>
                </ul>
            </div>
            {/* Display the total order */}
            <p>Total Order: ${totalSum}</p>
            {/* Button to proceed with SolanaPay */}
            <button className="pay-button" onClick={handleProceedWithSolanaPay}>Pay with Solana</button>
        </div>
    );
}

export default DashboardFeature;

