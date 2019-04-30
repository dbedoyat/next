import { Form, Field } from 'react-final-form'
import 'isomorphic-fetch'
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
}


class Formulario extends React.Component {

    render() {
        return (
            <Form
                onSubmit={onSubmit}
                initialValues={{}}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>First Name</label>
                            <Field
                                name="name"
                                component="input"
                                type="text"
                                placeholder="First Name"
                            />
                        </div>
                        <div>
                            <label>Last Name</label>
                            <Field
                                name="email"
                                component="input"
                                type="email"
                                placeholder="tucorreo@correo.com"
                            />
                        </div>
                        <div>
                            <label>Teléfono / Celular</label>
                            <Field
                                name="phone"
                                component="input"
                                type="number"
                                placeholder=""
                            />
                        </div>

                        <div>
                            <Field name="terms" component="input" type="checkbox" />
                            <label>Acepto los términos y condiciones de Ssangyong Motor Colombia</label>
                           
                        </div>

                        <div>
                            <label>Message</label>
                            <Field name="text" component="textarea" placeholder="Message" />
                        </div>


                        <div className="buttons">
                            <button type="submit"
                                
                            >
                                Enviar
                            </button>

                        </div>


                        <pre>{JSON.stringify(values, 0, 2)}</pre>
    
                        <style jsx>{`
                                pre{
                                    color:#000;
                                }
                        
                        `}</style>
                    </form>
                )}
            />


           
        );
    }
}

export default Formulario;