import React from "react";

const Table = ({ droplets }) => {
  console.log(Object.keys(droplets).length);
  return (
    <div>
       if {Object.keys(droplets).length > 0 ? (
        Object.entries(droplets).map((droplet, index) => {
          return (
            console.log(droplet), (<ul key={droplet.id}>{droplet.date}</ul>)
          );
        })
      ) : (
        <tr>
          <td colSpan="5">Loading...</td>
        </tr>
      )}
    </div>
  );
};
export default Table;
