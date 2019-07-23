

class Formulario extends React.Component {

    render() {
        return (
            <div>

            <form action="../mail.php" method="POST">
            <p>Name</p> <input type="text" name="name" />
            <p>Email</p> <input type="text" name="email" />
            <p>Phone</p> <input type="text" name="phone" />

            <input type="submit" value="Send" /><input type="reset" value="Clear" />
            </form>

            </div>

        );
    }
}

export default Formulario;