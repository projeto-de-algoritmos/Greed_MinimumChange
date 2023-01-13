import money from '../assets/change_money.png';
import { FcCurrencyExchange } from 'react-icons/fc';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { FaSearchDollar } from 'react-icons/fa';
import { AiFillWarning } from "react-icons/ai";

const applicationImages = {
    changeMoney: <FcCurrencyExchange size={60} />,
    money: <RiMoneyDollarCircleFill size={40} />,
    searchMoney: <FaSearchDollar size={30} />,
    warning: <AiFillWarning size={30} color="red" /> 
}

export default applicationImages;