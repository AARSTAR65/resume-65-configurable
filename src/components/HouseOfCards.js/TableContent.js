import React from 'react';

const TableContent = () => {
  return (
    <table class="conte" id="educ">
      <tr>
        <th>Course</th>
        <th>Institution</th>
        <th>Board</th>
        <th>Percentage of marks scored</th>
        <th>Year of passing</th>
      </tr>
      <tr>
        <td>
          12<sup>th</sup>
        </td>
        <td>DAV Centenary Public School</td>
        <td>C.B.S.E.</td>
        <td>68.2%</td>
        <td>2016</td>
      </tr>
      <tr>
        <td>
          10<sup>th</sup>
        </td>
        <td>DAV Centenary Public School</td>
        <td>C.B.S.E.</td>
        <td>76%</td>
        <td>2014</td>
      </tr>
    </table>
  );
};

export default TableContent;
