let nome = 'Vinicius'

let dataAtual = new Date()

let horas = dataAtual.getHours()
let minutos = dataAtual.getMinutes()

horas = horas < 10 ? '0' + horas : horas
minutos = minutos < 10 ? '0' + minutos : minutos

let horaAtual = `${horas}:${minutos}`

console.log(`Meu nome é ${nome}. Estou aprendendo JavaScript às ${horaAtual}`)