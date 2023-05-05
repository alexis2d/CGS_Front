import {Box, Button, Link, Typography} from "@mui/material";
import Sidebar from "../../component/sidebar";
import {ENTITIES} from "../../api/routeApi";
import React, {useEffect, useState} from "react";
import Default from "../../api/api";
import {useParams} from "react-router-dom";
import _ from "lodash";

function ClassroomsEdit() {

    const [data, setData] = useState([]);

    const id = useParams().id;
    useEffect(() => {
        Default.getData(ENTITIES.classroom.detail + id)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        Default.putData(ENTITIES.classroom.edit + id, data)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <>
            <Box display="flex">
                <Sidebar />
                <Box>
                    {<form onSubmit={handleSubmit}>
                        {_.entries(data).filter(([field]) => field !== "id" && !field.includes("site")).map(([field, fieldValue]) =>
                            (<>
                                    <label>{field}</label>
                                    <input
                                        name={field}
                                        type="text"
                                        required
                                        value={fieldValue}
                                        onChange={(e) => setData(_.set(_.cloneDeep(data), field, e.target.value))}
                                    />
                                </>
                            ))}
                        <button type='submit'>Modifier</button>
                    </form>}
                </Box>
            </Box>
        </>
    )
}
export default ClassroomsEdit