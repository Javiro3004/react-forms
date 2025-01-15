import { Control, FieldError, Controller } from "react-hook-form";
import  "./CustomInput.css";
import {formValue } from "../models/form.model";


interface Props { // interfaz con las propiedades del esquema necesarias para el componente
    name :keyof formValue;
    control: Control<formValue>;
    label:string;
    type? : string 
    error? : FieldError;

}

const inputForm = ({ name, control, label, type, error }: Props) => {
    return(
        <div className='form-group'>
            <label htmlFor={name}>{label}</label>
            <Controller name={name} control={control} /*controller: renderiza de manera ordenanda el form en este caso solo la propiedad name  */
            render={({field}) => <input id={name} type={type} /*renderiza las propiedades field de la seccion del name como value blur etc  */
            {...field} className={`form control ${error ? "is invalid ": ""} `}/>} />{/*tranfiere los valores de field a input con {...field}*/}

            {error && <p className='error '>{error.message}</p>}
        </div>
    )
}

export default inputForm;