import { React, useEffect, useState } from "react";
import axios from 'axios'

import "bootstrap/dist/css/bootstrap.min.css";
import Table from 'react-bootstrap/Table';

export default function Clubs() {
    const [clubsArr, setClubsArr] = useState()

    const getClubsData = async () => {
        const dataJson = JSON.stringify({
        })
        try {
            const res = await axios.get((process.env.baseURL || "http://localhost:3001") + '/api/getClubs', dataJson, {
                headers: { 'Content-Type': 'application/json' }
            })
            if (res.data.status === 'ok') {
                setClubsArr(res.data.records)
            }
        }
        catch (err) {
        }
    }

    useEffect(() => {
        getClubsData()
    }, [])

    return (
        <div className="container">
            <header className="jumbotron">
                <h3>Wszystkie kluby</h3>
            </header>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Klub</th>
                        <th>Kraj</th>
                        <th>Miasto</th>
                        <th>Rok powstania</th>
                    </tr>
                </thead>
                <tbody>
                    {clubsArr &&
                        clubsArr.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.nation}</td>
                                <td>{item.city}</td>
                                <td>{item.founded}</td>
                            </tr>
                        ))}
                </tbody>
            </Table>
        </div>
    )
}