import React from 'react';
import style from './FormCard.module.css';

export interface FormCardProps {
  id: number;
  avatar: string;
  firstName: string;
  lastName: string;
  birthday: string;
  city: string;
  gender: string;
  agreement: boolean;
}

export function FormCard({
  id,
  avatar,
  firstName,
  lastName,
  birthday,
  city,
  gender,
}: FormCardProps) {
  return (
    <div className={style.card} id={`${id}`}>
      <img src={avatar} alt={firstName} width="200" />
      <h3 className={style.name}>
        {firstName} {lastName}
      </h3>
      <p className={style.birthday}>{birthday}</p>
      <p className={style.city}>{city}</p>
      <p className={style.gender}>{gender}</p>
    </div>
  );
}
