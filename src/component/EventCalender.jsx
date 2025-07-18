import React from 'react'
import '../App.css'


const events = [
    {
        event: "THE RETAIL JEWELLER INDIA AWARDS",
        date: "01.08.2024",
        city: "Mumbai",
        country: "India",
        department: "Awards"
    },
    {
        event: "THE RETAIL JEWELLER INDIA AWARDS",
        date: "01.08.2024",
        city: "Mumbai",
        country: "India",
        department: "Awards"
    },
    {
        event: "THE RETAIL JEWELLER INDIA AWARDS",
        date: "01.08.2024",
        city: "Mumbai",
        country: "India",
        department: "Awards"
    },
    {
        event: "THE RETAIL JEWELLER INDIA AWARDS",
        date: "01.08.2024",
        city: "Mumbai",
        country: "India",
        department: "Awards"
    },
    {
        event: "THE RETAIL JEWELLER INDIA AWARDS",
        date: "01.08.2024",
        city: "Mumbai",
        country: "India",
        department: "Awards"
    }
]

export const EventCalender = () => {
  return (
    <div className='calendarContainer'>
        <strong style={{ fontSize: '5rem' }}>RJ EventCalender</strong>
        <table className='eventtable'>
            <thead>
                <tr>
                    <th>EVENT / SHOW</th>
                    <th>DATE</th>
                    <th>CITY</th>
                    <th>COUNTRY</th>
                    <th>DEPARTMENT</th>
                </tr>
            </thead>
            <tbody>
                {events.map((e, index) => (
                    <tr>
                        <td>{e.event}</td>
                        <td>{e.date}</td>
                        <td>{e.city}</td>
                        <td>{e.country}</td>
                        <td>{e.department}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
