import { useState } from 'react';
import firebase from '../../firebase-client/auth';
import Close from '../../assets/close.png'
import './addNotes.css';

const addNotes = ({ cancel }) => {

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const handleClick = async (e) => {
        e.preventDefault();
        if (text.trim() !== '') {
            try {
                firebase().post({ title, text });
                cancel();
            } catch (e) {
                console.log('Error al guardar cultivo', e)
            }
        } else {
            alert('Ingrese su cultivo');
        }

    }



    return (
        <section className='modalAdd-container-global'>
            <div className='modalAdd-content'>
                <figure className="box-close" onClick={cancel}>
                    <img src={Close} className="close" alt="close" />

                </figure>
                <form className='content-item ' onSubmit={handleClick}>
                    <p className='title-myNote'>Mi Cultivo</p>

                    <input className='title-add' type="text" name="" id="inp-title" placeholder='Nombre' onChange={(e) => setTitle(e.target.value)} ></input>

                    <textarea className='text-new' name="textarea" cols="52" rows="10" placeholder='Empiece a escribir' onChange={(e) => setText(e.target.value)} ></textarea>

                    <div className='btn-save-item'>
                        <button className='btn-save'  type="onSubmit" >Guardar </button>
                    </div>
                </form>
            </div >
        </section >

    );
};

export default addNotes;