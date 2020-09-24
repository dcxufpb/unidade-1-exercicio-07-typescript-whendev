function isNullOrEmpty(s: String) {
  return s == null || s.length == 0;
}

function dados_loja_param(nome_loja: string,
  logradouro: string,
  numero: number,
  complemento: string,
  bairro: string,
  municipio: string,
  estado: string,
  cep: string,
  telefone: string,
  observacao: string,
  cnpj: string,
  inscricao_estadual: string) {
  // Implemente aqui
  if (nome_loja == "") {
    throw new Error(`O campo nome da loja é obrigatório`);
  }

  if (logradouro == "") {
    throw new Error(`O campo logradouro do endereço é obrigatório`);
  }

  if (municipio == "") {
    throw new Error(`O campo município do endereço é obrigatório`);
  }

  if (estado == "") {
    throw new Error(`O campo estado do endereço é obrigatório`);
  }

  if (cnpj == "") {
    throw new Error(`O campo CNPJ da loja é obrigatório`);
  }

  if (inscricao_estadual == "") {
    throw new Error(`O campo inscrição estadual da loja é obrigatório`);
  }


  let _COMPLEMENTO = "";
		if (complemento != ""){
			_COMPLEMENTO = " " + complemento;
		}

		let _BAIRRO = "";
		if (bairro != "") {
			_BAIRRO = bairro + " - ";
		}

		let _CEP = "";
		let _TELEFONE = "";

		if (!isNullOrEmpty(cep)) {
			_CEP = "CEP:" + cep;
			if (telefone != ""){
				_TELEFONE = " Tel " + telefone;
			}
		} else {
			_CEP = "";
			if (telefone != ""){
				_TELEFONE = "Tel " + telefone;
			}
    }
    
    let _OBSERVACAO = "";
    if(observacao != ""){
      _OBSERVACAO = observacao;
    }

    let _NUMERO;
    if (numero != 0){
      _NUMERO = numero;
    }

    if (numero == 0){
      _NUMERO = "s/n";
    }

  let show = `${nome_loja}
${logradouro}, ${_NUMERO}${_COMPLEMENTO}
${_BAIRRO}${municipio} - ${estado}
${_CEP}${_TELEFONE}
${observacao}
CNPJ: ${cnpj}
IE: ${inscricao_estadual}
`;
  return show
  }
module.exports = dados_loja_param;
