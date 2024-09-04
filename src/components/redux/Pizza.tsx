'use client';
import React from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { RootState } from '@/lib/redux/store';
import { setValue, addType } from  '@/lib/redux/faetures/slices/pizzaSlice'

const Pizza = () => {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state: RootState) => state.pizza.value);
  const types = useAppSelector((state: RootState) => state.pizza.types);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Pizza: {value}</h1>
      <input
        className="border border-gray-300 px-4 py-2 rounded"
        value={value}
        onChange={(e) => dispatch(setValue(e.target.value))}
      />
      <div className="flex flex-col items-center mt-4">
        <h2 className="text-2xl font-bold mb-4">Types</h2>
        <div className="flex space-x-4">
          {types.map((type, index) => (
            <div key={index} className="px-4 py-2 bg-gray-200 rounded">
              {type}
            </div>
          ))}
        </div>
        <div className="flex space-x-4 mt-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => dispatch(addType('pepperoni'))}
          >
            Add Pepperoni
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={() => dispatch(addType('hawaiian'))}
          >
            Add Hawaiian
          </button>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            onClick={() => dispatch(addType('meatlovers'))}
          >
            Add Meatlovers
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
