import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "./MacroTable.css";

export default function TestTable() {
  // Define the dynamic data inside the component
  const events = [
    { name: "Tablescon", date: "9 April 2019", location: "East Annex" },
    { name: "Capstone Data", date: "19 May 2019", location: "205 Gorgas" },
    { name: "Tuscaloosa D3", date: "29 June 2019", location: "Github" },
    { name: "React Summit", date: "5 December 2024", location: "Online" },
    { name: "JS Conf", date: "15 January 2025", location: "New York" },
    { name: "Tablescon", date: "9 April 2019", location: "East Annex" },
    { name: "Capstone Data", date: "19 May 2019", location: "205 Gorgas" },
    { name: "Tuscaloosa D3", date: "29 June 2019", location: "Github" },
    { name: "React Summit", date: "5 December 2024", location: "Online" },
    { name: "JS Conf", date: "15 January 2025", location: "New York" },
    { name: "Tablescon", date: "9 April 2019", location: "East Annex" },
    { name: "Capstone Data", date: "19 May 2019", location: "205 Gorgas" },
    { name: "Tuscaloosa D3", date: "29 June 2019", location: "Github" },
    { name: "React Summit", date: "5 December 2024", location: "Online" },
    { name: "JS Conf", date: "15 January 2025", location: "New York" },
    { name: "Tablescon", date: "9 April 2019", location: "East Annex" },
    { name: "Capstone Data", date: "19 May 2019", location: "205 Gorgas" },
    { name: "Tuscaloosa D3", date: "29 June 2019", location: "Github" },
    { name: "React Summit", date: "5 December 2024", location: "Online" },
    { name: "JS Conf", date: "15 January 2025", location: "New York" },
    // Add more events as needed
  ];

  return (
    <Table>
      <Thead>
        <Tr className="md:flex md:items-stretch md:flex-1  ">
          <Th>Event</Th>
          <Th>Date</Th>
          <Th>Location</Th>
          <Th>Event</Th>
          <Th>Date</Th>
          <Th>Location</Th>
        </Tr>
      </Thead>
      <Tbody>
        {events.map((event, index) => (
          <Tr
            key={index}
            className="md:border-b md:border-[#C7C7Cb] md:h-[47px] md:flex md:items-start md:self-stretch"
          >
            <Td>{event.name}</Td>
            <Td>{event.date}</Td>
            <Td>{event.location}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
