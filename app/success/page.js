'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';


import { runFireworks } from './utils';

const Success = () => {


    useEffect( () => {
        localStorage.clear();
    
        runFireworks();
    }, [] );

    return (
        <div className="success-wrapper">
            <div className="success">
                <p className="icon">
                    <BsBagCheckFill />
                </p>
                <h2>Siparişiniz İçin Teşekkür Ederiz!</h2>
                <p className="email-msg">Yakında sizinle iletişime geçeceğiz.</p>
                <p className="description">
                    Eğer herhangi bir sorunuz varsa, lütfen e-posta yoluyla iletişime geçin: 
                    <a className="email" href="mailto:mahmoudamr700@gmail.com">
                        mahmoudamr700@gmail.com
                    </a>
                </p>
                <Link href="/">
                    <button type="button" width="300px" className="btn">
                        Devam Et Alışveriş
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Success