// import useStyles from "../styles/Styles";

const Reset = () => {

    //  Styles
    // const classes = useStyles();

    const handleSubmit = () => {

    }

    return (
    <>
        <section>
            <form action=""
            onSubmit={handleSubmit}>
                <label htmlFor="user">Reiniciar Usuario</label>
                <input type="text" name="user"/>
            </form>
        </section>
    </>
    )
}

export default Reset
