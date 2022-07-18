import { useState, useEffect } from 'react';
import Error from './Error';


const Form = ({ patients, setPatients, patient, setPatient }) => {
    const [pet, setPet] = useState('');
    const [owner, setOwner] = useState('');
    const [email, setEmail] = useState('');
    const [discharge, setDischarge] = useState('');
    const [symptom, setSymptom] = useState('');

    useEffect( () => {
        if (Object.keys(patient).length > 0) {
            const { pet, owner, email, discharge, symptom } = patient;
            setPet(pet);
            setOwner(owner);
            setEmail(email);
            setDischarge(discharge);
            setSymptom(symptom);
        }   
    }, [patient] );


    const [error, setError] = useState(false);

    const generateId = () => {
        const random = Math.random().toString(36).substr(2);
        const date = Date.now().toString(36);

        return random + date;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if ([pet, owner, email, discharge, symptom].includes('')) {
            setError(true);
            return        
        }
        
        setError(false);

        const patientsObj = {
            pet,
            owner,
            email,
            discharge,
            symptom
        }

        if (patient.id) {
            patientsObj.id = patient.id;

            const udatedPatients = patients.map( patientState => patientState.id === patient.id ?
                patientsObj : patientState);
            
            setPatients( udatedPatients );
            setPatient({});
            
        } else {
            patientsObj.id = generateId();
            setPatients([...patients, patientsObj]);            
        }


        setPet('');
        setOwner('');
        setEmail('');
        setDischarge('');
        setSymptom('');
    }
  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
        <p className="text-lg mt-5 text-center mb-10">
            Añade Pacientes y {''}
            <span className="text-indigo-600 font-bold">Administralos</span>
        </p>
        <form 
            className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5"
            onSubmit={handleSubmit}>
                { error && 
                    <Error>
                        <p>Todos los campos son obligatorios</p>
                    </Error>
                }
            <div className="mb-5">
                <label htmlFor="pet" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
                <input 
                    id="pet"
                    type="text"
                    placeholder="Nombre de la Mascota"
                    className="border-2 w-full p-2 mt-2 placeholde-gray-400 rounded-md"
                    value={pet}
                    onChange={ e => setPet(e.target.value) } />
            </div>
            <div className="mb-5">
                <label htmlFor="owner" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
                <input 
                    id="owner"
                    type="text"
                    placeholder="Nombre del Propietario"
                    className="border-2 w-full p-2 mt-2 placeholde-gray-400 rounded-md"
                    value={owner}
                    onChange={ e => setOwner(e.target.value) } />
            </div>
            <div className="mb-5">
                <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
                <input 
                    id="email"
                    type="email"
                    placeholder="Email Contacto Propietario"
                    className="border-2 w-full p-2 mt-2 placeholde-gray-400 rounded-md"
                    value={email}
                    onChange={ e => setEmail(e.target.value) } />
            </div>
            <div className="mb-5">
                <label htmlFor="discharge" className="block text-gray-700 uppercase font-bold">Alta</label>
                <input 
                    id="discharge"
                    type="date"
                    className="border-2 w-full p-2 mt-2 rounded-md"
                    value={discharge}
                    onChange={ e => setDischarge(e.target.value) } />
            </div>
            <div className="mb-5">
                <label htmlFor="symptom" className="block text-gray-700 uppercase font-bold">Síntomas</label>
                <textarea 
                    id="symptom"
                    placeholder="Describe los Síntomas"
                    className="border-2 w-full p-2 mt-2 placeholde-gray-400 rounded-md"
                    value={symptom}
                    onChange={ e => setSymptom(e.target.value) } />
            </div>
            <input 
            type="submit" 
            value={ patient.id ? 'Guardar Cambios': 'Agregar Paciente' }
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold cursor-pointer hover:bg-indigo-700 transition-all rounded-lg" />
        </form>
    </div>
  )
}

export default Form