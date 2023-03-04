import Datas from '../../datas/data'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Aboutcollapse from '../../Components/Collapse/Collapse'
import '../../Styles/Housing.css'
import pinkstar from '../../assets/pinkStart.svg'
import greystar from '../../assets/greyStart.svg'
import Slideshow from '../../Components/Slideshow/Slideshow'

export default function Housing() {
    const id = useParams('id').id
    const data = Datas.filter((data) => data.id === id)
    const rating = data[0].rating
    const host = data[0].host.picture
    const equipment = [data[0].equipments]
    // console.log(equipment);

    return (
        <main className="main">
            <Slideshow data={data[0]} alt={data[0].title}/>
            <div className="HousingContent">
                <div className="content">
                    <h1>{data[0].title}</h1>
                    <p>{data[0].location}</p>
                    <ul className="tags">
                        {data[0].tags.map((tag, index) => {
                            return <li key={index}>{tag}</li>
                        })}
                    </ul>
                </div>
                <div className="content ">
                    <div className="host">
                        <p>{data[0].host.name}</p>
                        <div className="hostImg"><img src={host} alt="" /></div>
                    </div>
                    <div className="rating">
                        {[...Array(5)].map((star, index) => {
                            const rateValue = index + 1
                            return (
                                <img
                                    key={index}
                                    src={
                                        rateValue <= rating
                                            ? pinkstar
                                            : greystar
                                    }
                                    alt="star"
                                />
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className="housingCollapse">
                <div className="collapse">
                    <Aboutcollapse
                        title={'Description'}
                        content={data[0].description}
                    />
                </div>
                <div className="collapse collapseTag">
                    <Aboutcollapse
                        title={'Équipements'}
                        content={equipment}
                    />
                </div>
            </div>
        </main>
    )
}

