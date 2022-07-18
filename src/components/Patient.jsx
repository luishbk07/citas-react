const Patient = ({ patient, setPatient, removePatient }) => {
  const { pet, owner, email, discharge, symptom, id } = patient;
  const handleRemovePatient = () => {
    const resp = confirm(`Seguro que quieres eliminar a ${pet}`);
    if (resp) {
      removePatient(id);
    }
  }
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-lg">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre: {''}
          <span className="font-normal normal-case">{ pet }</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Propietario: {''}
          <span className="font-normal normal-case">{ owner }</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email: {''}
          <span className="font-normal normal-case">{ email }</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Fecha Alta: {''}
          <span className="font-normal normal-case">{ discharge }</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Síntomas: {''}
          <span className="font-normal normal-case">{ patient.symptom }</span>
        </p>
        <div className="flex justify-between mt-10">
          <button
            type="button"
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
            onClick={ () => setPatient(patient) }
          >Editar</button>
          <button
            type="button"
            className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
            onClick={handleRemovePatient}
          >Eliminar</button>
        </div>
      </div>
  )
}

export default Patient