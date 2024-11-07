import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';

// Componente de Modal para Adicionar Contato
const EditFormDialog = ({ visible, onHide, onSave, contactData }) => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    fone: ''
  });

  // Atualiza os dados do formulário
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    if (contactData) {
      setFormData(contactData);
    }
  }, [contactData]);

  // Submissão do formulário
  const handleSubmit = () => {
    onSave(formData); // Passa os dados editados para a função onSave
    onHide(); // Fecha o modal após salvar
  };

  return (
    <Dialog
      header="Editar Contato"
      visible={visible}
      style={{ width: '400px' }}
      footer={
        <div>
          <Button label="Cancelar" icon="pi pi-times" onClick={onHide} className="p-button-text" />
          <Button label="Salvar" icon="pi pi-check" onClick={handleSubmit} autoFocus />
        </div>
      }
      onHide={onHide}
    >
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label htmlFor="nome">Nome:</label>
        <InputText
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleInputChange}
          style={{ width: '100%' }}
        />
      </div>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label htmlFor="email">Email:</label>
        <InputText
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          style={{ width: '100%' }}
        />
      </div>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label htmlFor="fone">Telefone:</label>
        <InputText
          id="fone"
          name="fone"
          value={formData.fone}
          onChange={handleInputChange}
          style={{ width: '100%' }}
        />
      </div>
    </Dialog>
  );
};

export default EditFormDialog;
