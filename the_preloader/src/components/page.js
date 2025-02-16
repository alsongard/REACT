import React from 'react'
import Preloader from './preloader';
import Header from './header';
import HomePage from "./homePage";
import Footer from "./footer";
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

export default function Page() {
    const [isLoading, setIsLoading] = React.useState(true);
    React.useEffect(()=>{
        const timer = setTimeout(()=>{
            setTimeout(()=>{
                setIsLoading(false)
            }, 5000)
        })
        return  ()=>{clearTimeout(timer)};
    },[])

    return (
        <div>
            {isLoading ? (<Preloader/> ): (
                <main className="page ">
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<div><Header/> <Outlet/> <Footer/> </div>}>
                                <Route index element={<HomePage/>}/>
                            </Route>
                        </Routes>

                    
                    </BrowserRouter>
                </main>
            )}
        </div>
    )
}


/**
 *                         <Header/>
                        <section>
                            <h1>The Preloader</h1>
                            <p>Lorem ispum</p>
                        </section>
 */