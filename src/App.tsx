import React from 'react';
import logo from './logo.svg';
import './App.css';
import {NavLink, Outlet, Route, Routes, useNavigate, useParams, useSearchParams} from "react-router-dom";

function App() {


    return (
        <div className="App">
            {/*<span><NavLink to={'/'}>main</NavLink></span>*/}
            {/*<span> </span>*/}
            {/*<span><NavLink to={'/login'}>login</NavLink></span>*/}
            {/*<span> </span>*/}
            {/*<span><NavLink to={'/profile'}>profile</NavLink></span>*/}
            {/*<span> </span>*/}
            {/*<span><NavLink to={'/profile/settings'}>settings</NavLink></span>*/}
            {/*<Routes>*/}
            {/*    <Route path={'/*'} element={<div>404</div>}/>*/}
            {/*    <Route path={'/'} element={<div>main</div>}/>*/}
            {/*    <Route path={'/login'} element={<div>login</div>}/>*/}
            {/*    <Route path={'/profile/'} element={*/}
            {/*        <div>profile<Outlet/></div>}>*/}
            {/*        <Route index element={<div>create id</div>}/>*/}
            {/*        <Route path={'*'} element={<div>page not found</div>}/>*/}
            {/*        <Route path={':id'} element={<div>id</div>}/>*/}
            {/*        <Route path={'/profile/settings'} element={<div>settings</div>}/>*/}
            {/*    </Route>*/}
            {/*</Routes>*/}
            <NavLink to='/' style={({isActive}) => {
                return {color: isActive ? "lime" : 'black'}
            }}>MAIN --</NavLink>
            <NavLink className={(s) => s.isActive ? 'activ' : ''} to='/users'>USERS --</NavLink>
            <NavLink className={(s) => s.isActive ? 'activ' : ''} to='/messages'>MESSAGES --</NavLink>
            <NavLink className={(s) => s.isActive ? 'activ' : ''} to='/profile'>PROFILE --</NavLink>
            <NavLink className={(s) => s.isActive ? 'activ' : ''} to='/profile/myPosts'>MYPOST --</NavLink>
            <NavLink className={(s) => s.isActive ? 'activ' : ''} to='/users/1/Igor'>USER ID 1 </NavLink>


            <Routes>
                <Route path='/*' element={<div>Error 404</div>}/>
                <Route path='/' element={<div>MAIN</div>}/>
                <Route path='/users/:id/:name' element={<Users/>}/>
                <Route path='/messages' element={<div><Outlet/><Messages/></div>}>
                    <Route index element={<div>CHANGE MESSAGES</div>}/>
                    <Route path=':messages' element={<div>NEW MESSAGES</div>}/>
                </Route>
                <Route path='/profile' element={<div>MY PROFILE<Outlet/></div>}>
                    <Route path=':nameID' element={<div>ID</div>}/>
                    <Route path='/profile/myPosts' element={<div>MY POST</div>}/>
                </Route>


            </Routes>


        </div>
    );
}

export const Users = () => {
    const param = useParams<'id' | 'name'>()
    console.log(param)
    const navigate = useNavigate()

    return (<div>USERS
        <button onClick={() => {
            navigate('/messages')
        }}>messages
        </button>
    </div>)

}

export const Messages = () => {
   const [perem,setPerem] = useSearchParams()
    console.log(perem.get('message'))
    console.log(Object.fromEntries(perem))

    return (<div>
        <ul>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </ul>
    </div>)

}


export default App;
