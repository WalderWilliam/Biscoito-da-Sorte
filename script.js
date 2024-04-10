const seeLuck = document.querySelector('#seeLuck')
const seeAnotherLuck = document.querySelector('#seeAnotherLuck')
const screenOne = document.querySelector('.screenOne')
const screenTwo = document.querySelector('.screenTwo')

let luckPaper = document.querySelector('#luckPaper')

let randomNumber = Math.round(Math.random() * 10)

const luckList = [
  'Quem anda na integridade anda seguro, quem falseia seus caminhos será descoberto',
  'Não é bom agir sem reflexão; quem anda apressado acaba tropeçando. A insensatez faz a pessoa tropeçar e ela, depois, se exaspera contra Deu',
  'Inclina o ouvido e escuta as palavras dos sábios e aplica o coração ao meu conhecimento: essas palavras te serão preciosas, desde que as guardes no teu íntimo e elas transbordem de teus lábios',
  'Faz bem a sua alma quem é misericordioso; quem é cruel, aflige sua própria carne',
  'O temor do Senhor odeia o mal. Detesta o orgulho e a soberba, a má conduta e a boca falsa',
  'Não há sabedoria nem prudência, nem mesmo conselho, contra o Senhor. Treina-se o cavalo para o dia da batalha, mas quem dá a vitória é o Senhor',
  'O temor do Senhor é o princípio do conhecimento; sabedoria e disciplina, os tolos as desprezam',
  'Aplica teu coração ao ensino e teus ouvidos às palavras que trazem conhecimento',
  'Em todo o tempo ama o amigo e para a hora da angústia nasce o irmão',
  'A morte e a vida estão no poder da língua; e aquele que a ama comerá do seu fruto',
  'Pois ainda que o justo caia sete vezes, tornará a erguer-se, mas os ímpios são arrastados pela calamidade'
]

luckList[randomNumber]

seeLuck.addEventListener('click', seeTheLuck)
seeAnotherLuck.addEventListener('click', seeOtherLuck)

function toogleScreen() {
  screenOne.classList.toggle('hide')
  screenTwo.classList.toggle('hide')
}

function seeTheLuck() {
  randomNumber = Math.round(Math.random() * 10)
  luckPaper.innerText = luckList[randomNumber]
  toogleScreen()
}

function seeOtherLuck() {
  luckPaper.innerText = luckList[randomNumber]
  toogleScreen()
}
