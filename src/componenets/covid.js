import React,{useEffect,useState} from 'react'
import './covid.css';

export const Covid = () => {

    const [data,setData]=useState([]);

    const getCovidData=async()=>{
        try{
        const res=await fetch('https://api.covid19india.org/data.json');
        const actualdata=await res.json();
        console.log(actualdata);
        setData(actualdata.statewise[0]);
        }catch(e){
            console.log(e);
        }
    }

    useEffect(() => {
        getCovidData();
    }, []);

    return (
    <>
        <h1>🔴 LIVE </h1>
        <h2>COVID-19 CORONAVIRUS TRACKER</h2>

        <section>
            <ul>
                <li className="card">
                <div className="card_main">
                    <div className="card_inner">
                        <p className="card_name"><span>Our</span> Country</p>
                        <p className="card_total card_small">India</p>
                    </div>
                </div>
                </li>
                <li className="card">
                <div className="card_main">
                    <div className="card_inner">
                        <p className="card_name"><span>Total</span> Recovered</p>
                        <p className="card_total card_small">{data.recovered}</p>
                    </div>
                </div>
                </li>
                <li className="card">
                <div className="card_main">
                    <div className="card_inner">
                        <p className="card_name"><span>Total</span> Confirmed</p>
                        <p className="card_total card_small">{data.confirmed}</p>
                    </div>
                </div>
                </li>
                <li className="card">
                <div className="card_main">
                    <div className="card_inner">
                        <p className="card_name"><span>Total</span> Deaths</p>
                        <p className="card_total card_small">{data.deaths}</p>
                    </div>
                </div>
                </li>
                <li className="card">
                <div className="card_main">
                    <div className="card_inner">
                        <p className="card_name"><span>Total</span> Active</p>
                        <p className="card_total card_small">{data.active}</p>
                    </div>
                </div>
                </li>
                <li className="card">
                <div className="card_main">
                    <div className="card_inner">
                        <p className="card_name"><span>Last</span> Updated</p>
                        <p className="card_total card_small">{data.lastupdatedtime}</p>
                    </div>
                </div>
                </li>
            </ul>
        </section>
    </>
    )
}
