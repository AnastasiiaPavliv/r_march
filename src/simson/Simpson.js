import React from 'react';

const Simpson = (props) => {
    const {firstname, surname,age, gender, photo }= props
    return (
        <div>
            <h3>{firstname} {surname}</h3>
            <h3>{age}</h3>
            <h3>{gender}</h3>
            <img src={photo} alt={firstname}/>
        </div>
    );
};

export {Simpson};
// 1. Описати всю сім'ю сімпсонів (5 персонажів).
// Характеристики : ім‘я приізвище вік стать, фотографія
// (посиланням на зовнішній ресурс,тобто не локальна фотка)
// Інфу брати звідки завгодно,хоч придумайте.
// Але для цього є сайт який ви юзали на жс