import './Main.css'

import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export class Main extends Component {
    
    render() {
        

        return (
            <>
                <p className="main_text">
                    Если у Вас украли велосипед из нашего проката, сообщите нам об этом!
                </p>
                <Link to="/report" className='btn_report'>
                    Сообщить о краже
                </Link>
            </>    
        )
    }

}
