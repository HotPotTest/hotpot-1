import React from 'react'
import { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";
import Card from './Searchcard/Card';
import './Search.css'
const Search = () => {
    const [text, setText] = useState("");
    const [data, setData] = useState([]);
    const datafn = async () => {
        if(text===""){
            setData([]);
            return;
        }
      };
    useEffect(() => {
        datafn();
      }, [text]);

    const clearBtn=()=>{
        setData([]);
        setText("");
    }
    return (
        <>
            <div >
                <div className="searchinput">
                    <input 
                    className="hotstarSearch"
                    type="text"
                    placeholder="Search"
                    />
                    <div>
                    {text===""? <SearchIcon />:< CloseIcon id="clearBtn" onClick={clearBtn} /> }
                    </div>
                </div>
                {data.length!=0 && 
                <div id="searchBox">
                    {data.map((el) => (
                        <Link to="" onClick={clearBtn}>
                        <Card path="Path" title="Title" />
                        </Link>
                    ))}
                </div>
                }
            </div>
        </>
    )
}

export default Search