import React, { useState } from "react";
import { Steps } from "primereact/steps";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import { Dialog } from "primereact/dialog";
import { Checkbox } from "primereact/checkbox";

const AddFormDialog = ({
  visible,
  onHide,
  formData,
  setFormData,
  activeIndex,
  setActiveIndex,
  nextStep,
  prevStep,
  onSave,
  handleSubmit
}) => {
  //const [activeIndex, setActiveIndex] = useState(0);
  /* const [formData, setFormData] = useState({
    condicaoVitima: "",
    atendimento: "",
    novoEndereco: "",
    bairro: "",
    municipio: "",
    unidadeVisita: "",
    cmdtguarnicao: "",
    varaFamiliar: "",
    numeroProcesso: "",
    nomeVitima: "",
    dataNascimento: "",
    rg: "",
    cpf: "",
    bairroVitima: "",
    enderecoVitima: "",
    perimetro: "",
    cidade: "",
    estado: "Pará",
    dataVisita: "",
    horaVisita: "",
    sexo: "",
    etnia: "",
    grauEscolaridade: "",
    grauEscolaridadeOutro: "",
    estadoCivil: "",
    estadoCivilOutro: "",
    trabalha: "",
    rendaFamiliar: "",
    possuiFilhos: "",
    quantidadeFilhos: "",
    filhosMoramComVoce: "",
    programaSocial: "",
    qualProgramaSocial: "",
    condicaoMoradia: "",
    condicaoMoradiaOutro: "",
    consomeAlcoolDrogas: "",
    qualAlcoolDrogas: "",
    grauParentesco: "",
    medidasCumpridas: "",
    descumprimento: [],
    frequenciaContato: "",
    periodoUltimoContato: "",
    apresentaMarcasViolencia: "",
    tipoViolencia: [],
    tipoViolenciaOutro: "",
    nomeAutor: "",
    enderecoAutor: "",
    perimetroAutor: "",
    sexoAutor: "",
    situacaoOcupacionalAutor: "",
    situacaoOcupacionalOutro: "",
    antecedentesCriminais: "",
    jaFoiPreso: "",
    usoAlcool: "",
    frequenciaUsoAlcool: "",
    tratamentoDependenciaQuimica: "",
    transtornoMental: "",
    tratamentoRemedioControlado: "",
    notificacaoMedidasProtetivas: "",
    observacoesGerais: "",
  }); */

  const steps = [
    { label: "Condição" },
    { label: "Atendimento" },
    { label: "Localização" },
    { label: "Unidade de Visita" },
    { label: "Vara Familiar" },
    { label: "Informações" },
    { label: "Qualificação" },
    { label: "Trabalho" },
    { label: "Drogas" },
    { label: "Violência" },
    { label: "Autor" },
  ];

  /* const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }; */

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, value } = e.target;
    // Check if the current value is already in the array
    if (formData[name].includes(value)) {
      // If it is, remove it from the array
      setFormData((prevState) => ({
        ...prevState,
        [name]: prevState[name].filter((item) => item !== value),
      }));
    } else {
      // If it is not, add it to the array
      setFormData((prevState) => ({
        ...prevState,
        [name]: [...prevState[name], value],
      }));
    }
  };

  const renderStepContent = () => {
    switch (activeIndex) {
      case 0:
        return (
          <div>
            <h5>Condição da Vítima</h5>
            {["A VÍTIMA ESTAVA PRESENTE NO LOCAL", "A VÍTIMA ESTAVA AUSENTE", "ENDEREÇO NÃO LOCALIZADO", "MUDANÇA DE ENDEREÇO"].map((option) => (
              <div key={option} className="p-field-radiobutton">
                <RadioButton
                  inputId={option}
                  name="condicaoVitima"
                  value={option}
                  onChange={handleInputChange}
                  checked={formData.condicaoVitima === option}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
            <div className="p-field">
              <label>Outro:</label>
              <InputText
                name="condicaoVitimaOutro"
                value={formData.condicaoVitimaOutro || ""}
                onChange={handleInputChange}
              />
            </div>
          </div>
        );
      case 1:
        return (
          <div>
            <h5>Atendimento</h5>
            {["PRESENCIAL", "PRESENCIAL NA RESIDÊNCIA", "PRESENCIAL NO LOCAL DE TRABALHO", "POR TELEFONE", "NÃO REALIZADA EM VIRTUDE DE AUSÊNCIA DA VÍTIMA"].map((option) => (
              <div key={option} className="p-field-radiobutton">
                <RadioButton
                  inputId={option}
                  name="atendimento"
                  value={option}
                  onChange={handleInputChange}
                  checked={formData.atendimento === option}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
            <div className="p-field">
              <label>Outro:</label>
              <InputText
                name="atendimentoOutro"
                value={formData.atendimentoOutro || ""}
                onChange={handleInputChange}
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h5>Endereço</h5>
            <div className="p-field">
              <label htmlFor="novoEndereco">EM CASO DE MUDANÇA DE ENDEREÇO. QUAL O NOVO ENDEREÇO?</label>
              <InputText
                id="novoEndereco"
                name="novoEndereco"
                value={formData.novoEndereco}
                onChange={handleInputChange}
              />
            </div>
            <div className="p-field">
              <label htmlFor="bairro">Bairro</label>
              <InputText
                id="bairro"
                name="bairro"
                value={formData.bairro}
                onChange={handleInputChange}
              />
            </div>

            <h5>Localização</h5>
            <div className="p-field-radiobutton">
              <RadioButton
                inputId="municipioBelem"
                name="municipio"
                value="BELÉM"
                onChange={handleInputChange}
                checked={formData.municipio === "BELÉM"}
              />
              <label htmlFor="municipioBelem">BELÉM</label>
            </div>
            <div className="p-field-radiobutton">
              <RadioButton
                inputId="municipioAnanindeua"
                name="municipio"
                value="ANANINDEUA"
                onChange={handleInputChange}
                checked={formData.municipio === "ANANINDEUA"}
              />
              <label htmlFor="municipioAnanindeua">ANANINDEUA</label>
            </div>
            <div className="p-field">
              <label>Outro:</label>
              <InputText
                name="municipioOutro"
                value={formData.municipioOutro || ""}
                onChange={handleInputChange}
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div>

            <h5>Unidade de Visita</h5>
            {["GUARDA MUNICIPAL DE ANANINDEUA", "6º BPM", "29º BPM", "30º BPM"].map((option) => (
              <div key={option} className="p-field-radiobutton">
                <RadioButton
                  inputId={option}
                  name="unidadeVisita"
                  value={option}
                  onChange={handleInputChange}
                  checked={formData.unidadeVisita === option}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
            <div className="p-field">
              <label>COMANDANTE DA GUANIÇÃO:</label>
              <InputText
                name="cmdtguarnicao"
                value={formData.cmdtguarnicao || ""}
                onChange={handleInputChange}
              />
            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <h5>8. VARA FAMILIAR</h5>
            <div className="p-field-radiobutton">
              <RadioButton
                inputId="4VVDF"
                name="varaFamiliar"
                value="4º VVDF - ANANINDEUA"
                onChange={handleInputChange}
                checked={formData.varaFamiliar === "4º VVDF - ANANINDEUA"}
              />
              <label htmlFor="4VVDF">4º VVDF - ANANINDEUA</label>
            </div>
            <div className="p-field">
              <label>Outro:</label>
              <InputText
                name="varaFamiliarOutro"
                value={formData.varaFamiliarOutro || ""}
                onChange={handleInputChange}
              />
            </div>

            <div className="p-field">
              <label htmlFor="numeroProcesso">9. NÚMERO DO PROCESSO</label>
              <InputText
                id="numeroProcesso"
                name="numeroProcesso"
                value={formData.numeroProcesso}
                onChange={handleInputChange}
              />
            </div>
          </div>
        );
      case 5:
        return (
          <div>
            <h5>Informações da Vítima</h5>
            <div className="p-field">
              <label htmlFor="nomeVitima">10. NOME DA VÍTIMA</label>
              <InputText
                id="nomeVitima"
                name="nomeVitima"
                value={formData.nomeVitima}
                onChange={handleInputChange}
              />
            </div>
            <div className="p-field">
              <label htmlFor="dataNascimento">11. DATA DE NASCIMENTO</label>
              <InputText
                id="dataNascimento"
                name="dataNascimento"
                value={formData.dataNascimento}
                onChange={handleInputChange}
                placeholder="Exemplo: 7 de janeiro de 2019"
              />
            </div>
            <div className="p-field">
              <label htmlFor="rg">12. RG</label>
              <InputText id="rg" name="rg" value={formData.rg} onChange={handleInputChange} />
            </div>
            <div className="p-field">
              <label htmlFor="cpf">13. CPF</label>
              <InputText id="cpf" name="cpf" value={formData.cpf} onChange={handleInputChange} />
            </div>
            <div className="p-field">
              <label htmlFor="bairroVitima">14. BAIRRO</label>
              <InputText
                id="bairroVitima"
                name="bairroVitima"
                value={formData.bairroVitima}
                onChange={handleInputChange}
              />
            </div>
            <div className="p-field">
              <label htmlFor="enderecoVitima">15. ENDEREÇO</label>
              <InputText
                id="enderecoVitima"
                name="enderecoVitima"
                value={formData.enderecoVitima}
                onChange={handleInputChange}
              />
            </div>
            <div className="p-field">
              <label htmlFor="perimetro">16. PERÍMETRO</label>
              <InputText
                id="perimetro"
                name="perimetro"
                value={formData.perimetro}
                onChange={handleInputChange}
              />
            </div>

            <h5>17. CIDADE</h5>
            <div className="p-field-radiobutton">
              <RadioButton
                inputId="cidadeBelem"
                name="cidade"
                value="Belém"
                onChange={handleInputChange}
                checked={formData.cidade === "Belém"}
              />
              <label htmlFor="cidadeBelem">Belém</label>
            </div>
            <div className="p-field-radiobutton">
              <RadioButton
                inputId="cidadeAnanindeua"
                name="cidade"
                value="Ananindeua"
                onChange={handleInputChange}
                checked={formData.cidade === "Ananindeua"}
              />
              <label htmlFor="cidadeAnanindeua">Ananindeua</label>
            </div>
            <div className="p-field">
              <label>Outro:</label>
              <InputText
                name="cidadeOutro"
                value={formData.cidadeOutro || ""}
                onChange={handleInputChange}
              />
            </div>

            <h5>18. ESTADO</h5>
            <div className="p-field-radiobutton">
              <RadioButton
                inputId="estadoPara"
                name="estado"
                value="Pará"
                onChange={handleInputChange}
                checked={formData.estado === "Pará"}
              />
              <label htmlFor="estadoPara">Pará</label>
            </div>

            <div className="p-field">
              <label htmlFor="dataVisita">19. DATA DA VISITA</label>
              <InputText
                id="dataVisita"
                name="dataVisita"
                value={formData.dataVisita}
                onChange={handleInputChange}
                placeholder="Exemplo: 7 de janeiro de 2019"
              />
            </div>
            <div className="p-field">
              <label htmlFor="horaVisita">20. HORA DA VISITA</label>
              <InputText
                id="horaVisita"
                name="horaVisita"
                value={formData.horaVisita}
                onChange={handleInputChange}
                placeholder="Exemplo: 08h30"
              />
            </div>
          </div>
        );
      case 6:
        return (
          <div>
            <h5>Sexo</h5>
            {["FEMININO", "MASCULINO"].map((option) => (
              <div key={option} className="p-field-radiobutton">
                <RadioButton
                  inputId={option}
                  name="sexo"
                  value={option}
                  onChange={handleInputChange}
                  checked={formData.sexo === option}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}

            <h5>Etnia / Cor</h5>
            {["BRANCA", "NEGRA", "PARDA", "ORIENTAL", "INDÍGENA"].map((option) => (
              <div key={option} className="p-field-radiobutton">
                <RadioButton
                  inputId={option}
                  name="etnia"
                  value={option}
                  onChange={handleInputChange}
                  checked={formData.etnia === option}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}

            <h5>Grau de Escolaridade</h5>
            {[
              "ENSINO FUNDAMENTAL INCOMPLETO",
              "ENSINO FUNDAMENTAL COMPLETO",
              "ENSINO MÉDIO COMPLETO",
              "ENSINO MÉDIO INCOMPLETO",
              "ENSINO SUPERIOR COMPLETO",
              "ENSINO SUPERIOR INCOMPLETO",
            ].map((option) => (
              <div key={option} className="p-field-radiobutton">
                <RadioButton
                  inputId={option}
                  name="grauEscolaridade"
                  value={option}
                  onChange={handleInputChange}
                  checked={formData.grauEscolaridade === option}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
            <div className="p-field">
              <label>Outro:</label>
              <InputText
                name="grauEscolaridadeOutro"
                value={formData.grauEscolaridadeOutro || ""}
                onChange={handleInputChange}
              />
            </div>

            <h5>Estado Civil</h5>
            {["CASADO (A)", "UNIÃO ESTÁVEL", "SOLTEIRO", "DIVORCIADO", "VIÚVO"].map((option) => (
              <div key={option} className="p-field-radiobutton">
                <RadioButton
                  inputId={option}
                  name="estadoCivil"
                  value={option}
                  onChange={handleInputChange}
                  checked={formData.estadoCivil === option}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
            <div className="p-field">
              <label>Outro:</label>
              <InputText
                name="estadoCivilOutro"
                value={formData.estadoCivilOutro || ""}
                onChange={handleInputChange}
              />
            </div>
          </div>
        );
      case 7:
        return (
          <div>
            <h5>Trabalha?</h5>
            {["Sim", "Não"].map((option) => (
              <div key={option} className="p-field-radiobutton">
                <RadioButton
                  inputId={option}
                  name="trabalha"
                  value={option}
                  onChange={handleInputChange}
                  checked={formData.trabalha === option}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}

            <h5>Qual a Renda Familiar?</h5>
            {["UM SALÁRIO", "MENOS DE UM SALÁRIO", "MAIS DE UM SALÁRIO", "NÃO DECLAROU"].map((option) => (
              <div key={option} className="p-field-radiobutton">
                <RadioButton
                  inputId={option}
                  name="rendaFamiliar"
                  value={option}
                  onChange={handleInputChange}
                  checked={formData.rendaFamiliar === option}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
            <div className="p-field">
              <label>Outro:</label>
              <InputText
                name="rendaFamiliarOutro"
                value={formData.rendaFamiliarOutro || ""}
                onChange={handleInputChange}
              />
            </div>

            <h5>Possui Filhos?</h5>
            {["Sim", "Não"].map((option) => (
              <div key={option} className="p-field-radiobutton">
                <RadioButton
                  inputId={option}
                  name="possuiFilhos"
                  value={option}
                  onChange={handleInputChange}
                  checked={formData.possuiFilhos === option}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}

            <h5>Se Sim, Quantos?</h5>
            {["01", "02", "03", "04"].map((option) => (
              <div key={option} className="p-field-radiobutton">
                <RadioButton
                  inputId={option}
                  name="quantidadeFilhos"
                  value={option}
                  onChange={handleInputChange}
                  checked={formData.quantidadeFilhos === option}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
            <div className="p-field">
              <label>Outro:</label>
              <InputText
                name="quantidadeFilhosOutro"
                value={formData.quantidadeFilhosOutro || ""}
                onChange={handleInputChange}
              />
            </div>

            <h5>Quantos Moram com Você?</h5>
            {["01", "02", "03", "04"].map((option) => (
              <div key={option} className="p-field-radiobutton">
                <RadioButton
                  inputId={option}
                  name="filhosMoramComVoce"
                  value={option}
                  onChange={handleInputChange}
                  checked={formData.filhosMoramComVoce === option}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
            <div className="p-field">
              <label>Outro:</label>
              <InputText
                name="filhosMoramComVoceOutro"
                value={formData.filhosMoramComVoceOutro || ""}
                onChange={handleInputChange}
              />
            </div>

            <h5>Está Inserido em Algum Programa Social?</h5>
            {["Sim", "Não"].map((option) => (
              <div key={option} className="p-field-radiobutton">
                <RadioButton
                  inputId={option}
                  name="programaSocial"
                  value={option}
                  onChange={handleInputChange}
                  checked={formData.programaSocial === option}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}

            <div className="p-field">
              <label>Qual Programa Social Está Inserido?</label>
              <InputText
                name="qualProgramaSocial"
                value={formData.qualProgramaSocial || ""}
                onChange={handleInputChange}
              />
            </div>

            <h5>Qual a Condição de Moradia?</h5>
            {["ALUGADA", "CEDIDA", "PRÓPRIA", "PRÓPRIA DE TERCEIROS"].map((option) => (
              <div key={option} className="p-field-radiobutton">
                <RadioButton
                  inputId={option}
                  name="condicaoMoradia"
                  value={option}
                  onChange={handleInputChange}
                  checked={formData.condicaoMoradia === option}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
            <div className="p-field">
              <label>Outro:</label>
              <InputText
                name="condicaoMoradiaOutro"
                value={formData.condicaoMoradiaOutro || ""}
                onChange={handleInputChange}
              />
            </div>
          </div>
        );

      case 8:
        return (
          <div>
            <h5>Consome Álcool / Drogas?</h5>
            <div className="p-field-radiobutton">
              <RadioButton
                inputId="alcoolDrogasSim"
                name="consomeAlcoolDrogas"
                value="Sim"
                onChange={handleInputChange}
                checked={formData.consomeAlcoolDrogas === "Sim"}
              />
              <label htmlFor="alcoolDrogasSim">Sim</label>
            </div>
            <div className="p-field-radiobutton">
              <RadioButton
                inputId="alcoolDrogasNao"
                name="consomeAlcoolDrogas"
                value="Não"
                onChange={handleInputChange}
                checked={formData.consomeAlcoolDrogas === "Não"}
              />
              <label htmlFor="alcoolDrogasNao">Não</label>
            </div>
            {formData.consomeAlcoolDrogas === "Sim" && (
              <div className="p-field">
                <label htmlFor="qualAlcoolDrogas">Se sim, qual?</label>
                <InputText
                  id="qualAlcoolDrogas"
                  name="qualAlcoolDrogas"
                  value={formData.qualAlcoolDrogas || ""}
                  onChange={handleInputChange}
                />
              </div>
            )}
          </div>
        );

      case 9:
        return (
          <div>
            <h5>Grau de Parentesco com o Autor</h5>
            {["MARIDO", "EX CÔNJUGE", "NAMORADO", "FILHO", "IRMÃO", "PADRASTO", "PAI", "EX NAMORADO"].map((option) => (
              <div key={option} className="p-field-radiobutton">
                <RadioButton
                  inputId={option}
                  name="grauParentesco"
                  value={option}
                  onChange={handleInputChange}
                  checked={formData.grauParentesco === option}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
            <div className="p-field">
              <label>Outro:</label>
              <InputText
                name="grauParentescoOutro"
                value={formData.grauParentescoOutro || ""}
                onChange={handleInputChange}
              />
            </div>

            <h5>As Medidas Protetivas Estão Sendo Cumpridas?</h5>
            {["SIM", "NÃO"].map((option) => (
              <div key={option} className="p-field-radiobutton">
                <RadioButton
                  inputId={option}
                  name="medidasCumpridas"
                  value={option}
                  onChange={handleInputChange}
                  checked={formData.medidasCumpridas === option}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}

            {formData.medidasCumpridas === "NÃO" && (
              <div>
                <h5>Se Não, de Que Forma as Medidas Estão Sendo Descumpridas?</h5>
                {["TELEFONE", "REDES SOCIAIS", "NO LOCAL DA RESIDÊNCIA", "NO LOCAL DE TRABALHO"].map((option) => (
                  <div key={option} className="p-field-checkbox">
                    <Checkbox
                      inputId={option}
                      name="descumprimento"
                      value={option}
                      onChange={handleCheckboxChange}
                      checked={formData.descumprimento.includes(option)}
                    />
                    <label htmlFor={option}>{option}</label>
                  </div>
                ))}
                <div className="p-field">
                  <label>Outro:</label>
                  <InputText
                    name="descumprimentoOutro"
                    value={formData.descumprimentoOutro || ""}
                    onChange={handleInputChange}
                  />
                </div>

                <h5>Com Que Frequência?</h5>
                {["DIARIAMENTE", "SEMANALMENTE"].map((option) => (
                  <div key={option} className="p-field-radiobutton">
                    <RadioButton
                      inputId={option}
                      name="frequenciaContato"
                      value={option}
                      onChange={handleInputChange}
                      checked={formData.frequenciaContato === option}
                    />
                    <label htmlFor={option}>{option}</label>
                  </div>
                ))}
                <div className="p-field">
                  <label>Outro:</label>
                  <InputText
                    name="frequenciaContatoOutro"
                    value={formData.frequenciaContatoOutro || ""}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            )}

            <h5>Qual Foi o Período do Último Contato com o Autor?</h5>
            {["UM A SETE DIAS", "UMA A DUAS SEMANAS", "DUAS SEMANAS A UM MÊS", "UM A SEIS MESES", "UM ANO OU MAIS"].map((option) => (
              <div key={option} className="p-field-radiobutton">
                <RadioButton
                  inputId={option}
                  name="periodoUltimoContato"
                  value={option}
                  onChange={handleInputChange}
                  checked={formData.periodoUltimoContato === option}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}

            <h5>Apresenta Marcas de Violência?</h5>
            {["SIM", "NÃO"].map((option) => (
              <div key={option} className="p-field-radiobutton">
                <RadioButton
                  inputId={option}
                  name="apresentaMarcasViolencia"
                  value={option}
                  onChange={handleInputChange}
                  checked={formData.apresentaMarcasViolencia === option}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}

            {formData.apresentaMarcasViolencia === "SIM" && (
              <div>
                <h5>Se Sim, Qual Tipo de Violência Está Sofrendo Atualmente?</h5>
                {["FÍSICA", "PSICOLOGICA", "SEXUAL", "PATRIMONIAL", "MORAL"].map((option) => (
                  <div key={option} className="p-field-checkbox">
                    <Checkbox
                      inputId={option}
                      name="tipoViolencia"
                      value={option}
                      onChange={handleCheckboxChange}
                      checked={formData.tipoViolencia.includes(option)}
                    />
                    <label htmlFor={option}>{option}</label>
                  </div>
                ))}
                <div className="p-field">
                  <label>Outro:</label>
                  <InputText
                    name="tipoViolenciaOutro"
                    value={formData.tipoViolenciaOutro || ""}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            )}
          </div>
        );

      case 10:
        return (
          <div>
            <h5>Nome do Autor</h5>
            <div className="p-field">
              <InputText
                name="nomeAutor"
                value={formData.nomeAutor || ""}
                onChange={handleInputChange}
              />
            </div>

            <h5>Endereço</h5>
            <div className="p-field">
              <InputText
                name="enderecoAutor"
                value={formData.enderecoAutor || ""}
                onChange={handleInputChange}
              />
            </div>

            <h5>Perímetro</h5>
            <div className="p-field">
              <InputText
                name="perimetroAutor"
                value={formData.perimetroAutor || ""}
                onChange={handleInputChange}
              />
            </div>

            <h5>Sexo</h5>
            {["FEMININO", "MASCULINO"].map((option) => (
              <div key={option} className="p-field-radiobutton">
                <RadioButton
                  inputId={option}
                  name="sexoAutor"
                  value={option}
                  onChange={handleInputChange}
                  checked={formData.sexoAutor === option}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}

            <h5>Qual a Situação Ocupacional do Autor?</h5>
            {["EMPREGADO", "DESEMPREGADO", "AUTÔNOMO", "APOSENTADO"].map((option) => (
              <div key={option} className="p-field-radiobutton">
                <RadioButton
                  inputId={option}
                  name="situacaoOcupacionalAutor"
                  value={option}
                  onChange={handleInputChange}
                  checked={formData.situacaoOcupacionalAutor === option}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
            <div className="p-field">
              <label>Outro:</label>
              <InputText
                name="situacaoOcupacionalOutro"
                value={formData.situacaoOcupacionalOutro || ""}
                onChange={handleInputChange}
              />
            </div>

            <h5>O Autor Possui Antecedentes Criminais?</h5>
            {["Sim", "Não"].map((option) => (
              <div key={option} className="p-field-radiobutton">
                <RadioButton
                  inputId={option}
                  name="antecedentesCriminais"
                  value={option}
                  onChange={handleInputChange}
                  checked={formData.antecedentesCriminais === option}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}

            <h5>O Autor Já Foi Preso?</h5>
            {["Sim", "Não"].map((option) => (
              <div key={option} className="p-field-radiobutton">
                <RadioButton
                  inputId={option}
                  name="autorJaFoiPreso"
                  value={option}
                  onChange={handleInputChange}
                  checked={formData.autorJaFoiPreso === option}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}

            <h5>O Autor Faz ou Já Fez Uso de Álcool?</h5>
            {["Sim", "Não"].map((option) => (
              <div key={option} className="p-field-radiobutton">
                <RadioButton
                  inputId={option}
                  name="usoAlcool"
                  value={option}
                  onChange={handleInputChange}
                  checked={formData.usoAlcool === option}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}

            {formData.usoAlcool === "Sim" && (
              <div className="p-field">
                <label>Se Sim, Com Que Frequência?</label>
                <InputText
                  name="frequenciaUsoAlcool"
                  value={formData.frequenciaUsoAlcool || ""}
                  onChange={handleInputChange}
                />
              </div>
            )}

            <h5>O Autor Submeteu-se ou Realiza Tratamento para Dependência Química?</h5>
            {["Sim", "Não"].map((option) => (
              <div key={option} className="p-field-radiobutton">
                <RadioButton
                  inputId={option}
                  name="tratamentoDependencia"
                  value={option}
                  onChange={handleInputChange}
                  checked={formData.tratamentoDependencia === option}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}

            <h5>O Autor Possui Algum Tipo de Transtorno Mental?</h5>
            {["Sim", "Não"].map((option) => (
              <div key={option} className="p-field-radiobutton">
                <RadioButton
                  inputId={option}
                  name="transtornoMental"
                  value={option}
                  onChange={handleInputChange}
                  checked={formData.transtornoMental === option}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}

            <h5>O Autor Faz Tratamento ou Usa Remédio Controlado?</h5>
            {["Sim", "Não"].map((option) => (
              <div key={option} className="p-field-radiobutton">
                <RadioButton
                  inputId={option}
                  name="remedioControlado"
                  value={option}
                  onChange={handleInputChange}
                  checked={formData.remedioControlado === option}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}

            <h5>Sabe Informar Se o Autor Foi Notificado Sobre as Medidas Protetivas?</h5>
            {["Sim", "Não"].map((option) => (
              <div key={option} className="p-field-radiobutton">
                <RadioButton
                  inputId={option}
                  name="notificacaoMedidas"
                  value={option}
                  onChange={handleInputChange}
                  checked={formData.notificacaoMedidas === option}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}

            <h5>Observações Gerais</h5>
            <div className="p-field">
              <InputText
                name="observacoesGerais"
                value={formData.observacoesGerais || ""}
                onChange={handleInputChange}
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  /* const nextStep = () => setActiveIndex((prevIndex) => prevIndex + 1);
  const prevStep = () => setActiveIndex((prevIndex) => prevIndex - 1);
  const handleSubmit = () => {
    onSave(formData);
    setActiveIndex(0);
  }; */

  return (
    <Dialog
      visible={visible}
      style={{ width: "70vw" }}
      header="Questionário de Atendimento"
      modal
      onHide={onHide}
    >
      <Steps
        model={steps}
        activeIndex={activeIndex}
        onSelect={(e) => setActiveIndex(e.index)}
        style={{ textDecoration: "none" }}
      />
      <div className="p-mt-3">{renderStepContent()}</div>
      <div className="p-mt-3">
        {activeIndex > 0 && (
          <Button label="Voltar" icon="pi pi-arrow-left" className="p-button-secondary" onClick={prevStep} />
        )}
        {activeIndex < steps.length - 1 ? (
          <Button label="Próximo" icon="pi pi-arrow-right" className="p-button-primary" onClick={nextStep} />
        ) : (
          <Button label="Enviar" icon="pi pi-check" className="p-button-success" onClick={onSave} />
        )}
      </div>
    </Dialog>
  );
};

export default AddFormDialog;
