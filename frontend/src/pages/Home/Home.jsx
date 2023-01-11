import React from 'react';
import applicationImages from '../../utils/images.utils';
import './index.css';

const Home = () => {
    return (
        <div className="home-container centraliza">
            <div className="home-content">
                <div className="row">
                    <div className="col-12 centraliza">
                        <h1 className="centraliza">Minimun Change <span>{applicationImages.changeMoney}</span></h1>
                    </div>
                    <div className="col-12 coins-content mt-3">
                        <div className="row">
                            <div className="col-2 centraliza">
                                <div className="coin-card centraliza">
                                    <p className="text-center centraliza">1 {applicationImages.money}</p>
                                </div>
                            </div>
                            <div className="col-2 centraliza">
                                <div className="coin-card centraliza">
                                    <p className="text-center centraliza">5 {applicationImages.money}</p>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="coin-card centraliza">
                                    <p className="text-center centraliza">10 {applicationImages.money}</p>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="coin-card centraliza">
                                    <p className="text-center centraliza">25 {applicationImages.money}</p>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="coin-card centraliza">
                                    <p className="text-center centraliza">50 {applicationImages.money}</p>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="coin-card centraliza">
                                    <p className="text-center centraliza">100 {applicationImages.money}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 value-content centraliza">
                        <input type="number" name="" id="" placeholder="Insira o valor do troco" />
                        <button>Buscar <span>{applicationImages.searchMoney}</span> </button>
                    </div>
                    <div className="col-12 result-content centraliza mt-2">
                        RESULTADO
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;