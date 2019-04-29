import { Form, Field } from 'react-final-form'

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
                                name="firstName"
                                component="input"
                                type="text"
                                placeholder="First Name"
                            />
                        </div>
                        <div>
                            <label>Last Name</label>
                            <Field
                                name="lastName"
                                component="input"
                                type="email"
                                placeholder="tucorreo@correo.com"
                            />
                        </div>
                        <div>
                            <label>Teléfono / Celular</label>
                            <Field
                                name="telefono"
                                component="input"
                                type="number"
                                placeholder=""
                            />
                        </div>


                        <div>
                            <label>Favorite Color</label>
                            <Field name="favoriteColor" component="select">
                                <option />
                                <option value="#ff0000">❤️ Red</option>
                                <option value="#00ff00">💚 Green</option>
                                <option value="#0000ff">💙 Blue</option>
                            </Field>
                        </div>

                        <div>
                            <Field name="aceptaTerminos" component="input" type="checkbox" />
                            <label>Acepto los términos y condiciones de Ssangyong Motor Colombia</label>
                           
                        </div>


                        <div className="buttons">
                            <button type="submit" disabled={submitting || pristine}>
                                Enviar
            </button>

                        </div>


                        <pre>{JSON.stringify(values, 0, 2)}</pre>
                        <style jsx>{`
                                pre{
                                    color:#fff;
                                }
                        
                        `}</style>
                    </form>
                )}
            />


           
        );
    }
}

export default Formulario;