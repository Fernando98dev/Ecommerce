import { titleFont } from '@/config/fonts';
import React from 'react'

interface Props{
    title: string;
    subtitle?: string;
    className?: string;
}

export const Title = ({title, subtitle, className}: Props) => {
  return (
    <div className={`mt-3 ${className}`}>

        <h1 className={`${titleFont.className} home__title`}>
            {title}
        </h1>

        {
            subtitle && (
                <h3 className='home__subtitle'>{subtitle}</h3>
            )
        }

    </div>
  )
}
