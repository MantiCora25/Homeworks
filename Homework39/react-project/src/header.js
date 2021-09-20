import react from 'react';
import styled from 'styled-components'
import './css/Header.module.css';

const NavMenu = styled.div`
    ul{
        list-style: circle;
        display: flex;
        background: cyan;
        padding: 30px;
    }
    li{
        margin-right: 50px;
    }
    @media (max-width: 700px){
        ul{
            display: block;
        }
    }

`  

const Header= () => {
    return (
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <NavMenu>
                            <ul>
                                <li><a href="/home">Home</a></li>
                                <li><a href="/about">About</a></li>
                                <li><a href="/news">News</a></li>
                                <li><a href="/contacts">Contacts</a></li>
                            </ul>
                        </NavMenu>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;