import { React, useEffect, useState } from "react";
import axios from 'axios'

import "bootstrap/dist/css/bootstrap.min.css";
import Table from 'react-bootstrap/Table';

export default function Players() {
    const [playersArr, setPlayersArr] = useState()

    const getPlayersData = async () => {
        const dataJson = JSON.stringify({
        })
        try {
            const res = await axios.get((process.env.baseURL || "http://localhost:3001") + '/api/getPlayers', dataJson, {
                headers: { 'Content-Type': 'application/json' }
            })
            if (res.data.status === 'ok') {
                setPlayersArr(res.data.records)
            }
        }
        catch (err) {
        }
    }

    useEffect(() => {
        getPlayersData()
    }, [])

    return (
        <div className="container">
            <header className="jumbotron">
                <h3>Wszyscy zawodnicy</h3>
            </header>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Zawodnik</th>
                        <th>Narodowość</th>
                        <th>Rok urodzenia</th>
                        <th>Pozycja</th>
                    </tr>
                </thead>
                <tbody>
                    {playersArr &&
                        playersArr.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.nationality}</td>
                                <td>{item.born}</td>
                                <td>{item.position}</td>
                            </tr>
                        ))}
                </tbody>
            </Table>
        </div>
    )
}