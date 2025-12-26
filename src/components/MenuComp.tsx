//=====================================================================================================================================================================================================
//                                                                                         REACT
//=====================================================================================================================================================================================================
import { Link } from "react-router";
import { useTheme } from '../context/ThemeContext';

//=====================================================================================================================================================================================================
//                                                                                        BOOTSTRAP
//=====================================================================================================================================================================================================
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import react from '../assets/react.svg';
import { Button } from "react-bootstrap";

export default function MenuComp() {
    const { botonBg, textBotonBg, botonBgBody, textBotonBgBody, setBotonBg, setTextBotonBg, setBotonBgBody, setTextBotonBgBody } = useTheme();

    function cambiarIcono() {
        const icono = document.querySelector('i') as HTMLElement;

        if (icono?.classList.contains('bi-brightness-high')) {
            icono.classList.remove("bi-brightness-high");
            icono.classList.add("bi-moon");

            setBotonBg('light');
            setTextBotonBg('text-dark');
            setBotonBgBody('dark');
            setTextBotonBgBody('text-light');
        } else {
            icono.classList.remove("bi-moon");
            icono.classList.add("bi-brightness-high");

            setBotonBg('dark');
            setTextBotonBg('text-light');
            setBotonBgBody('light');
            setTextBotonBgBody('text-dark');
        }
    }

    return (<header>
        <span className={`${textBotonBgBody}`}></span><span className={`${botonBgBody}`}></span><span className={`${textBotonBg}`}></span>{/*Esto no hace nada*/}
        <Navbar bg="dark" data-bs-theme={botonBg} className="d-flex justify-content-center" style={{ transition: "1s", borderBottom: "2px white solid" }}>
            <Container>
                <Navbar.Brand><img src={react}></img></Navbar.Brand>

                <Nav className="d-flex justify-content-center">
                    <div className="p-1">
                        <Link className={`text-decoration-none text-light`} to={''}>Inicio</Link>&nbsp;&nbsp;
                        <Link className={`text-decoration-none text-light`} to={'dinosaurios'}>Dinosaurios</Link>&nbsp;
                    </div>

                    <div>
                        <Button variant="dark" onClick={() => cambiarIcono()}><i className="bi bi-brightness-high"></i></Button>
                    </div>
                </Nav>
            </Container>
        </Navbar>
    </header>)
}
