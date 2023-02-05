import { useState } from 'react';
import { baseColaboradores } from "./baseColaboradores.js"
import 'bootstrap/dist/css/bootstrap.min.css';

const Colaboradores = () => {
    const [nuevoColaborador, setNuevoColaborador] = useState({ nombre: (""), correo: ("") });
    const [listaColaboradores, setListaColaboradores] = useState(baseColaboradores)
    const [buscadorColaboradores, setBuscadorColaboradores] = useState("")

    const handleChange = (e, propiedad) => {
        setNuevoColaborador({ ...nuevoColaborador, [propiedad]: e.target.value })
    }

    const handleClick = () => {
        setListaColaboradores([...listaColaboradores, { ...nuevoColaborador, id: Date.now() }])
    }

    const handleSearch = (e) => {
        setBuscadorColaboradores(e.target.value)
    }

    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <h3 className="navbar-brand text-white">Buscador de Colaboradores</h3>
                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            placeholder="Busca un colaborador"
                            onChange={handleSearch}
                            type="search"
                            aria-label="Search" />
                    </form>
                </div>
            </nav>
            <main className="mt-5 mx-3">
                <label htmlFor="">Nombre del colaborador</label>
                <input
                    onChange={(ev) => {
                        handleChange(ev, "nombre")
                    }}
                    className="form-control"
                    name="nombreColaborador"
                    placeholder="Ingresa el nombre del colaborador"
                    type="text" />
                <label htmlFor="">Correo del colaborador</label>
                <input
                    onChange={(ev) => {
                        handleChange(ev, "correo")
                    }}
                    className="form-control"
                    name="correoColaborador"
                    placeholder="Ingresa correo del colaborador"
                    type="email" />
                <button
                    className="btn btn-primary"
                    onClick={handleClick}>
                    Agregar colaborador
                </button>
            </main>
            <hr />
            <section className="mt-5 mx-3">
                <h2>Listado de colaboradores</h2>
                <ul>
                    {listaColaboradores.filter((colaborador) => {
                        return (colaborador.nombre.toLowerCase().includes(buscadorColaboradores.toLowerCase()))
                    }).map(colaborador => {
                        return (
                            <li key={colaborador.id}>
                                {colaborador.nombre} - {colaborador.correo}
                            </li>)
                    })}
                </ul>
            </section>
        </div>
    );
}




export default Colaboradores;