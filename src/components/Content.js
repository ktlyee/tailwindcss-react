import React from 'react'
import menu from '../Data'

const Content = () => {
    return (
        <>
            {menu.map((data) => {
                const {name, image, description ,price} = data
                return (
                    <div className='menu-card'>
                        <img src={image} alt="egg menu" className="h-full rounded mb-20 shadow" />
                        <div className='center-content'>
                            <h2 className="text-2xl mb-2">{name}</h2>
                            <p className="mb-2">{description}</p>
                            <span>${price}</span>
                        </div>
                    </div>
                )
            })}
            {/* <div className='menu-card'>
                <img src="https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Baked-Cheddar-Eggs---Potatoes_EXPS_CWFM19_134913_C10_12_5b.jpg" alt="egg" className="h-full rounded mb-20 shadow" />
                <div className='center-content'>
                    <h2 className="text-2xl mb-2">Baked Cheddar Eggs & Potatoes</h2>
                    <p className="mb-2">Cripsy, delicious, and nutritious</p>
                    <span>$16</span>
                </div>
            </div>
            <div className='menu-card'>
                <img src="https://www.tasteofhome.com/wp-content/uploads/2018/01/exps189054_HCK163687D07_31_5b-1.jpg?fit=700,1024g" alt="egg" className="h-full rounded mb-20 shadow" />
                <div className='center-content'>
                    <h2 className="text-2xl mb-2">Sausage-Sweet Potato Hash & Eggs</h2>
                    <p className="mb-2">Cripsy, delicious, and nutritious</p>
                    <span>$25</span>
                </div>
            </div> */}
        </>
    )
}

export default Content
