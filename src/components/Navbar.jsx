import React from 'react'

export default function Navbar() {
    const date=new Date();
    const day=date.getDay();
    const month=date.getMonth()+1;
    const year=date.getFullYear();
    console.log(day)
    return (
        <>
            <nav class="navbar navbar-light bg-primary">
                <div class="container-fluid d-flex justify-content-between">
                    <a class="navbar-brand" href="#">
                        Movie App
                    </a>
                    <h5 className='text-light'>0{day}.0{month}.{year} y</h5>
                </div>
            </nav>
        </>
    )
}
