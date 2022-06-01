import React ,{useState} from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from 'react-router';
import axios from 'axios'

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, "trop petit")
    .max(50, "trop long!")
    .required("Ce champ est obligatoire"),
 
  email: Yup.string()
    .email("email invalide")
    .required("l'email est obligatoire"),
  password: Yup.string()
    .required("Mot de passe est obligatoire")
    .min(8, "Mot de passe doit être plus grand que 8 caractères")
    .max(50, "Mot de passe doit être plus petit que 50 caractères"),

  acceptTerms: Yup.bool().oneOf(
    [true],
    "Accepter les conditions est obligatoire"
  )
});

const initialValues = {
  name: "",
 
  email: "",
  password: "",

  acceptTerms: false
};



const Singup = () => {
    const navigate = useNavigate()
    const handleSubmit =async (values) => {
        const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/auth/user/login`, values);
        await localStorage.setItem('token', res.data.token);
        setTimeout(()=>{
          navigate('/app/Profile')
        }, 500)
      }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 pt-3">
          <h1 className="text-center">Inscription</h1>
          <div style={{display:'flex', justifyContent:'space-evenly',padding:'150px',width:'500px'}}>
            <img style={{width:'800px',}} src='https://img.freepik.com/vecteurs-libre/illustration-concept-connexion-mobile_114360-83.jpg?w=2000' alt='singup' />
       
          <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => handleSubmit(values)}
           
          >
            {({ resetForm }) => (
              <Form style={{    marginTop: "149px"}}>
              
                <div className="form-group mb-3">
                  <label htmlFor="lastName">Nom:</label>
                  <Field
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="small"
                    className="text-danger"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="email">Email:</label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="email"
                    component="small"
                    className="text-danger"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password">Mot de passe:</label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="password"
                    component="small"
                    className="text-danger"
                  />
                </div>
               
                <div className="form-group form-check mb-5">
                  <Field
                    name="acceptTerms"
                    type="checkbox"
                    className="form-check-input"
                  />
                  <label htmlFor="acceptTerms" className="form-check-label">
                    J'ai lu et j'accepte les conditions
                  </label>
                  <ErrorMessage
                    name="acceptTerms"
                    component="small"
                    className="text-danger d-block"
                  />
                </div>
                <div className="form-group d-flex justify-content-end gap-3">
                  <button type="submit" className="btn btn-primary">
                    S'inscrire
                  </button>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="btn btn-danger"
                  >
                    Annuler
                  </button>
                </div>
              </Form>
            )}
          </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singup;
