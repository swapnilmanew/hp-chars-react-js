import React, { useState, useEffect } from 'react'
import "./styles.css";
import Loading from "./Loading";
function Characters() {

    const [data, setData] = useState([]);
    const [spinner, setSpinner] = useState(true)
    const getApiData = async () => {
        try {
            setSpinner(false)
            const data = await fetch("https://hp-api.herokuapp.com/api/characters");
            const json = await data.json();
            setData(json);

        } catch (error) {
            console.log("There's an error" + error);
        }
    }

    useEffect(() => {
        getApiData();
    }, []);
    return (
        <>
            <div className="container">
                <h1 className="fw-bold my-5 text-center display-4">
                    Harry Potter Characters
                </h1>
                {
                    spinner === true ? <Loading /> : <div className="row">
                        {
                            data.map((chars) => {
                                return (
                                    <>
                                        <div className="col-11 col-sm-6 col-md-4 m-auto">
                                            <div className="card border-0 shadow-lg my-3">
                                                <div className="card-body d-flex justify-content-around align-items-center">
                                                    <img src={chars.image} alt="" className="" />
                                                    <div>
                                                        <h2>{chars.name}</h2>
                                                        <hr />
                                                        <h5>{chars.actor}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </>
                                )
                            })
                        }
                    </div>

                }
            </div>
        </>
    )
}

export default Characters
