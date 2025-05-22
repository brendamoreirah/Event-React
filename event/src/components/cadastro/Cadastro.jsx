import "./Cadastro.css";
import Botao from "../botao/Botao"

const Cadastro = (props) => {
    return (
        <section className="section_cadastro">
            <form onSubmit={props.funcCadastro} action="" className="layuot_grid form_cadastro">
                <h1>{props.tituloCadastro}</h1>
                <hr />
                <div className="campos_cadastro">
                    <div className="banner_cadastro">
                        <img src={props.img_banner} />
                    </div>
                    <div className="campo_preen">
                        <div className="campo_cad_nome">
                            <label htmlFor=""></label>
                            <input type="text" nome="nome" placeholder={props.nomes}
                                value={props.valorInput}
                                onChange={(e) => props.setValorInput(e.target.value)} />
                        </div>
                        <div className="campo_cad_genero" style={{ display: props.visibilidade }}>
                            <label htmlFor="genero"></label>
                            <select name="genero" id="">
                                <option value="" disabled selected>Tipo Evento</option>
                                <option value="">Chocolate</option>
                                <option value="">Avela</option>
                                <option value="">Ninho</option>
                            </select>
                        </div>
                        <Botao nomeDoBotao="Cadastrar" />
                    </div>
                </div>
            </form>
        </section>
    )
}

export default Cadastro;