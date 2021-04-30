// import useStyles from "../styles/Styles"

const Login = () => {

    //  Styles
    //  const classes = useStyles();

    const handleSubmit = () => {

    }

    return (
    <>
        <section>
            <form
            onSubmit={handleSubmit}>
                <label htmlFor="user">Usuario</label>
                <input type="text" name="user"/>
            </form>
        </section>
    </>
    )
}

export default Login
