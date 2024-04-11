// URL do seu projeto Glitch
const url = 'https://foregoing-thankful-paradox.glitch.me';

// Função para fazer a solicitação HTTP
function keepAlive() {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Falha ao manter o aplicativo ativo');
            }
            console.log('Aplicativo mantido ativo com sucesso!');
        })
        .catch(error => {
            console.error('Erro ao manter o aplicativo ativo:', error);
        });
}

// Chamar a função keepAlive inicialmente
keepAlive();

// Configurar um intervalo para chamar a função keepAlive a cada 5 minutos
setInterval(keepAlive, 5 * 60 * 1000); // 5 minutos em milissegundos
