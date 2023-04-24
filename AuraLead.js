({
    /*define uma função chamada handleSuccess que será acionada quando o formulário de edição do registro for bem-sucedido.*/
    handleSuccess : function(component, event, helper) {
        
        /*estamos criando um evento de "show toast" usando a API do Lightning, e armazenando-o na variável toastEvent.*/
        var toastEvent = $A.get("e.force:showToast");
        
        /*definindo os parâmetros do evento de "show toast", título da mensagem, a mensagem em si e o tipo como "success", que define o estilo e o ícone da mensagem.*/
        toastEvent.setParams({
            "title": "Parabéns!",
            "message": "Lead criado com sucesso.",
            "type": "success"
        });
        
        /*Aqui estamos acionando o evento de "show toast" usando o método fire(), e a mensagem de sucesso será exibida na tela.*/
        toastEvent.fire();
        
        /*Aqui estamos atualizando a página atual para mostrar o novo registro criado usando o evento*/
        $A.get("e.force:refreshView").fire();
    }
})