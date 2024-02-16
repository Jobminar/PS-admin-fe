import React from "react";

import { validateForm, formatPhone, calculateDistance } from "../helpers"; // import helper functions from a separate file

// Define the Table component
const Karyakarthatable = ({
  data,
  isLoading,
  isError,
  error,
  handleDelete,
  handleVerify,
}) => {
  // Define the columns for the table
  const columns = [
    {
      header: "Name",
      accessor: "name",
    },
    {
      header: "Phone",
      accessor: "phone",
      format: formatPhone, // use a helper function to format the phone number
    },
    {
      header: "Email",
      accessor: "email",
    },
    {
      header: "Address",
      accessor: "address",
    },
    {
      header: "Verified",
      accessor: "verified",
      format: (value) =>
        value ? (
          <span className="text-green-500">Yes</span>
        ) : (
          <span className="text-red-500">No</span>
        ), // use a function to format the verified status
    },
    {
      header: "Actions",
      accessor: "id",
      format: (value) => (
        <div className="flex space-x-2">
          <button
            className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
            onClick={() => handleVerify(value)}
          >
            Verify
          </button>
          <button
            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            onClick={() => handleDelete(value)}
          >
            Delete
          </button>
        </div>
      ), // use a function to format the actions
    },
  ];

  // Render the table
  return (
    <table className="table-auto w-full mt-8">
      <thead>
        <tr className="bg-gray-200">
          {columns.map((column) => (
            <th key={column.header} className="px-4 py-2">
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {isLoading ? (
          <tr>
            <td colSpan={columns.length} className="text-center py-4">
              Loading...
            </td>
          </tr>
        ) : isError ? (
          <tr>
            <td
              colSpan={columns.length}
              className="text-center py-4 text-red-500"
            >
              {error.message}
            </td>
          </tr>
        ) : data.length === 0 ? (
          <tr>
            <td colSpan={columns.length} className="text-center py-4">
              No karyakarthas found
            </td>
          </tr>
        ) : (
          data.map((item) => (
            <tr key={item.id}>
              {columns.map((column) => (
                <td key={column.header} className="border px-4 py-2">
                  {column.format
                    ? column.format(item[column.accessor])
                    : item[column.accessor]}
                </td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};
export default Karyakarthatable;
