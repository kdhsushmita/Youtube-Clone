import { Paper, TextField } from '@mui/material'
import React, { useState } from 'react'

const SearchBar = ({ onSubmit }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const onChangeHandler = (e) => {
        setSearchTerm(e.target.value);
    }
    const keyPressHandler = (e) => {
        if (e.key === "Enter") {
            onSubmit(searchTerm);
        }
    }
    return (
        <>
            <Paper elevation={6} style={{ padding: "20px" }}>
                <TextField fullWidth label="Search.." value={searchTerm} onChange={onChangeHandler} onKeyPress={keyPressHandler} />
            </Paper>
        </>
    )
}

export default SearchBar
