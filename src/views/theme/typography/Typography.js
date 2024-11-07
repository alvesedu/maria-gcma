import React, { useState } from 'react';
import { CCard, CCardHeader, CCardBody } from '@coreui/react';
import { DocsLink } from 'src/components';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import AddFormDialog from './AddFormDialog';
import EditFormDialog from './EditFormDialog';

const MyComponent = () => {
  const [isDialogVisible, setDialogVisible] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [isEditDialogVisible, setEditDialogVisible] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const [formData, setFormData] = useState({
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
  });

  // Função para abrir o modal
  const openDialog = () => setDialogVisible(true);

  // Função para fechar o modal
  //const closeDialog = () => setDialogVisible(false);

  const closeDialog = () => {
    setDialogVisible(false);
    setActiveIndex(0); // Redefine o passo ao fechar o modal
  };

  const handleSave = (data) => {
    const newContact = { ...formData, id: Date.now() }; // Adiciona um id único ao novo contato
    setContacts((prevContacts) => [...prevContacts, newContact]);
    closeDialog();
  };

  const handleEdit = (contact) => {
    setSelectedContact(contact);
    setEditDialogVisible(true); // Abre o modal de edição
  };

  const handleUpdate = (updatedContact) => {
    setContacts((prevContacts) =>
      prevContacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      )
    );
    setEditDialogVisible(false);
  };

  const handleDelete = (id) => {
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
  };

  const nextStep = () => setActiveIndex((prevIndex) => prevIndex + 1);
  const prevStep = () => setActiveIndex((prevIndex) => prevIndex - 1);
  const handleSubmit = (data) => {
    handleSave(data); // Salva os dados e fecha o modal
  };

  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          PRIMEIRO ATENDIMENTO À VITIMA
        </CCardHeader>
        <CCardBody>
          {/* Input e botão de pesquisa dentro do card */}
          <div style={styles.searchContainer}>
            <InputText
              style={styles.input}
              placeholder="Digite sua pesquisa..."
            />
            <Button
              label="Pesquisar"
              style={styles.button}
              icon="pi pi-search"
              onClick={() => console.log('Pesquisar clicado')}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
            <Button label="Adicionar" icon="pi pi-check" className="p-button-success" onClick={openDialog} />
          </div>

          {/* <div>
            <AddFormDialog visible={isDialogVisible} onHide={closeDialog} onSave={handleSave} />
          </div> */}

          <div>
            <AddFormDialog
              visible={isDialogVisible}
              onHide={closeDialog}
              formData={formData}
              setFormData={setFormData}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              nextStep={nextStep}
              prevStep={prevStep}
              onSave={handleSave}
              handleSubmit={handleSubmit}
            />
          </div>

          <div>
            <EditFormDialog
              visible={isEditDialogVisible}
              onHide={() => setEditDialogVisible(false)}
              onSave={handleUpdate}
              contactData={selectedContact}
            />
          </div>

          {/* Mapeia a lista de contatos para exibir um card para cada contato */}
          {contacts.map((contact) => (
            <Card key={contact.id} style={styles.card}>
              <h5>Informações da Vítima</h5>
              <div style={styles.field}>
                <span style={styles.label}>Nome da Vítima:</span>
                <span>{contact.nomeVitima}</span>
              </div>
              <div style={styles.field}>
                <span style={styles.label}>RG:</span>
                <span>{contact.rg}</span>
              </div>
              <div style={styles.field}>
                <span style={styles.label}>CPF:</span>
                <span>{contact.cpf}</span>
              </div>
              <div style={styles.field}>
                <span style={styles.label}>Data de Nascimento:</span>
                <span>{contact.dataNascimento}</span>
              </div>
              <div style={styles.field}>
                <span style={styles.label}>Sexo:</span>
                <span>{contact.sexo}</span>
              </div>
              {/* Adicione outros campos conforme necessário */}

              {/* Botões Editar e Excluir */}
              <div style={styles.buttonContainer}>
                <Button
                  label="Editar"
                  icon="pi pi-pencil"
                  className="p-button-rounded p-button-warning"
                  onClick={() => handleEdit(contact)}
                />
                <Button
                  label="Excluir"
                  icon="pi pi-trash"
                  className="p-button-rounded p-button-danger"
                  onClick={() => handleDelete(contact.id)}
                />
              </div>
            </Card>
          ))}

        </CCardBody>
      </CCard>
    </>
  );
};

const styles = {
  searchContainer: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    gap: '0',
    marginBottom: '1rem',
  },
  input: {
    flex: 1,
    borderRadius: '4px 0 0 4px',
  },
  button: {
    borderRadius: '0 4px 4px 0',
  },
  card: {
    marginTop: '1rem',
    padding: '1rem',
  },
  field: {
    marginBottom: '0.5rem',
  },
  label: {
    fontWeight: 'bold',
    marginRight: '0.5rem',
  },
  buttonContainer: {
    display: 'flex',
    gap: '0.5rem',
    marginTop: '1rem',
  },
};

export default MyComponent;
