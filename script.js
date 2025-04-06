let tarefas = []

const adicionarTarefa = function (tarefa) {
    tarefas.push(tarefa)
    console.log(`Tarefa adicionada: ${tarefa}`)
}

const listarTarefas = () => {
    if (tarefas.length === 0) {
        console.log("Nenhuma tarefa na lista.")
    } else {
        console.log("Lista de Tarefas:")
        tarefas.forEach((tarefa, indice) => console.log(`${indice}: ${tarefa}`))
    }
}

const gerenciarTarefas = (acao, indice, novaTarefa) => {
    switch (acao) {
        case "remover":
            if (indice >= 0 && indice < tarefas.length) {
                console.log(`Tarefa removida: ${tarefas.splice(indice, 1)}`)
            } else {
                console.log("Índice inválido.")
            }
            break
        case "atualizar":
            if (indice >= 0 && indice < tarefas.length) {
                tarefas[indice] = novaTarefa;
                console.log(`Tarefa atualizada para: ${novaTarefa}`)
            } else {
                console.log("Índice inválido.")
            }
            break
        case "concluir":
            if (indice >= 0 && indice < tarefas.length) {
                tarefas[indice] = `✅ ${tarefas[indice]}`
                console.log(`Tarefa concluída: ${tarefas[indice]}`)
            } else {
                console.log("Índice inválido.")
            }
            break
        default:
            console.log("Ação inválida.")
    }
}

while (true) {
    const acao = prompt("Escolha uma ação:\n1 - Adicionar tarefa\n2 - Remover tarefa\n3 - Listar tarefas\n4 - Atualizar tarefa\n5 - Concluir tarefa\n6 - Sair")

    if (acao === "6") {
        console.log("Encerrando o programa.")
        break
    }

    switch (acao) {
        case "1":
            const novaTarefa = prompt("Digite o nome da tarefa:")
            adicionarTarefa(novaTarefa)
            break
        case "2":
        case "4":
        case "5":
            const indiceTarefa = parseInt(prompt("Digite o índice da tarefa:"))
            const novaDescricao = acao === "4" ? prompt("Digite a nova descrição da tarefa:") : null
            gerenciarTarefas(acao === "2" ? "remover" : acao === "4" ? "atualizar" : "concluir", indiceTarefa, novaDescricao)
            break
        case "3":
            listarTarefas()
            break
        default:
            console.log("Opção inválida.")
    }
}