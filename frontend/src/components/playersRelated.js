import { React, useEffect, useState } from "react";
import axios from 'axios'

import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Table from 'react-bootstrap/Table';

export default function PlayersRelated() {
    const [playersArr, setPlayersArr] = useState()
    const [clubsArr, setClubsArr] = useState()
    const [selectedClubName, setSelectedClubName] = useState("")

    const selectClubNameHandler = (value) => setSelectedClubName(value)

    const getPlayersData = async (name) => {
        if (name){
            const dataJson = JSON.stringify({
                clubname: name
            })
            try {
                const res = await axios.post((process.env.baseURL || "http://localhost:3001") + '/api/getPlayersRelatedWithClub/', dataJson, {
                    headers: { 'Content-Type': 'application/json' }
                })
                if (res.data.status === 'ok') {
                    setPlayersArr(res.data.records)
                }
            }
            catch (err) {
            }
        }
        else{
            setPlayersArr("")
        }
    }

    const getClubsNames = async () => {
        const dataJson = JSON.stringify({
        })
        try {
            const res = await axios.get((process.env.baseURL || "http://localhost:3001") + '/api/getClubsNames', dataJson, {
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
        getPlayersData(selectedClubName)
    }, [selectedClubName])

    useEffect(() => {
        getClubsNames()
    }, [])

    return (
        <div className="container">
            <header className="jumbotron">
                <h3>Zawodnicy powiązani z klubem</h3>
            </header>
            <FloatingLabel controlId="floatingSelect" label="Nazwa klubu">
                <Form.Select size="lg"
                    id="floatingSelect"
                    value={selectedClubName}
                    onChange={(e) => {
                        selectClubNameHandler(e.target.value);
                    }}
                >
                    <option key="" value="">
                        {"Wybierz..."}
                    </option>
                    {clubsArr && clubsArr.map((item, index) => (
                        <option key={index} value={item}>
                            {item}
                        </option>
                    ))}

                </Form.Select>
            </FloatingLabel>
            {playersArr ? (
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Zawodnik</th>
                            <th>Narodowość</th>
                            <th>Pozycja</th>
                            <th>Rok przybycia</th>
                            <th>Rok odejścia</th>
                        </tr>
                    </thead>
                    <tbody>
                        {playersArr && playersArr.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.nationality}</td>
                                <td>{item.position}</td>
                                <td>{item.start}</td>
                                <td>{item.end === "now" ? "gra obecnie" : item.end}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            ) : (
                <div></div>
            )}
        </div>
    )
}