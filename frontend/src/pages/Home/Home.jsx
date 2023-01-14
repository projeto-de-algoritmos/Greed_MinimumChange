import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import { getChangeByValue } from '../../services/change.service';
import applicationImages from '../../utils/images.utils';
import './index.css';

const Home = () => {

    const [value, setValue] = useState(1);
    const [change, setChange] = useState(false);
    const [coins, setCoins] = useState([
        {
            value: 1,
            qty: 0,
        },
        {
            value: 5,
            qty: 0,
        },
        {
            value: 10,
            qty: 0,
        },
        {
            value: 25,
            qty: 0,
        },
        {
            value: 50,
            qty: 0,
        },
        {
            value: 100,
            qty: 0,
        },
    ]);


    const handleGetChangeByValue = async () => {
        const change = (await getChangeByValue(value)).data;
        var result = Object.keys(change).map((key) => [Number(key), change[key]]);
        setCoins([
            {
                value: 1,
                qty: result[0][1],
            },
            {
                value: 5,
                qty: result[1][1],
            },
            {
                value: 10,
                qty: result[2][1],
            },
            {
                value: 25,
                qty: result[3][1],
            },
            {
                value: 50,
                qty: result[4][1],
            },
            {
                value: 100,
                qty: result[5][1],
            },
        ]);
        setChange(true);
    }

    const handleResetValues = () => {
        setCoins([
            {
                value: 1,
                qty: 0,
            },
            {
                value: 5,
                qty: 0,
            },
            {
                value: 10,
                qty: 0,
            },
            {
                value: 25,
                qty: 0,
            },
            {
                value: 50,
                qty: 0,
            },
            {
                value: 100,
                qty: 0,
            },
        ]);
        setValue(0);
        setChange(false);
        const fileInput = document.querySelector("#value")
        fileInput.value = ""
    }

    return (
        <div className="home-container centraliza">
            <div className="home-content">
                <div className="row">
                    <div className="col-12 centraliza">
                        <h1 className="centraliza">Minimun Change <span>{applicationImages.changeMoney}</span></h1>
                    </div>
                    <div className="centraliza">
                        <p>Cálculo do troco com a menor quantidade de moedas possíveis.</p>

                    </div>
                    <div className="col-12 coins-content mt-3">
                        <div className="row">
                            {
                                coins.map((coin, index) => {
                                    return (
                                        <div className="col-md-2 col-4 mt-md-1 mt-3 centraliza" key={index}>
                                            <div className="coin-card centraliza">
                                                <p className="text-center centraliza">{coin.value} {applicationImages.money}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="col-12 value-content centraliza">
                        <input type="number" name="" id="value" placeholder="Insira o valor do troco" onChange={(e) => setValue(e.target.value)} min="1" max="10" step="0.01" />
                        <button onClick={() => value >= 1 && handleGetChangeByValue()}>Buscar <span>{applicationImages.searchMoney}</span> </button>
                    </div>

                    {
                        (value < 1 || (value % 1 !== 0)) &&
                        <div className="centraliza">
                            <Alert variant='danger' style={{ width: "auto" }}>
                                {applicationImages.warning} Não aceitamos números negativos e decimais
                            </Alert>
                        </div>
                    }
                    <div className="col-12 centraliza mt-2">
                        <div className="row">
                            {change &&
                                coins.map((coin, index) => {
                                    return (
                                        <div className="col-md-4 col-6">
                                            <Alert variant='warning' className="centraliza text-center" key={index} style={{ marginRight: '10px' }}>
                                                <span style={{ fontWeight: "bold", marginRight: "3px", fontSize: "20px" }}>{coin.qty}</span> {coin.qty === 1 ? "Moeda" : "Moedas"} de  <span style={{ fontWeight: "bold", marginLeft: "5px", fontSize: "20px" }}>{coin.value}</span>
                                            </Alert>
                                        </div>

                                    )
                                })
                            }
                        </div>
                    </div>
                    {console.log(value)}
                    <div className="col-12 result-content centraliza mt-2">
                        <button onClick={() => handleResetValues()}>Zerar Valores</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Home;