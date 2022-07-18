import { useState, useEffect } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import PatientstList from "./components/PatientstList";

function App() {

  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  useEffect( () => {
    const getLS = () => {
      const patientsLS = JSON.parse(localStorage.getItem('patients')) ?? [];
      setPatients(patientsLS);
    } 
    getLS();
  }, []);

  useEffect( () => {
    setTimeout(() => {
      localStorage.setItem('patients', JSON.stringify(patients));
    }, 1000);
  }, [patients] );

  const removePatient = (id) => {
    const UpdatedPatients = patients.filter( patientState => patientState.id !== id )
    console.log(UpdatedPatients);
    setPatients(UpdatedPatients);
  }

  return (
    <div className="container mx-auto mt-20">
     <Header />
     <div className="mt-12 md:flex">
      <Form 
        patients={ patients }
        setPatients={ setPatients }
        patient={ patient }
        setPatient={ setPatient }
      />
      <PatientstList 
        patients={ patients }
        setPatient={ setPatient }
        removePatient={ removePatient }
      />
     </div>
    </div>
  )
}

export default App
