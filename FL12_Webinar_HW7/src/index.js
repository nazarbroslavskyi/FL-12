import './styles/styles.scss'
import disableAbleButtons from './disableButtons'

const WIN_SCORE = 1
const INIT_SCORE = 0
const INIT_ROUND = 1
const FINAL_SCORE = 3

const types = ['Rock', 'Paper', 'Scissors']
const typesInterface = {
    rock: 'Rock',
    paper: 'Paper',
    scissors: 'Scissors',
}
let round = INIT_ROUND

const buttonsContainer = document.querySelector('.container__buttons')
const humanWinsContainer = document.querySelector('.wins')
const computerWinsContainer = document.querySelector('.computer-wins')
const tiesCountContainer = document.querySelector('.ties-count')
const roundResultsContainer = document.querySelector('.round-results__text')
const resetButton = document.querySelector('.container__buttons__button--reset')
const buttons = [
    ...document.querySelectorAll('.container__buttons__button_type'),
]

const incrementValue = container =>
    (container.innerHTML = +container.innerHTML + WIN_SCORE)
const resetValue = container => (container.innerHTML = INIT_SCORE)

const generateType = types => types[Math.floor(Math.random() * types.length)]

const gameJudge = ({ target }) => {
    const humanType = target.dataset.type
    const generatedType = generateType(types)

    const isComputerWon =
        (generatedType === typesInterface['scissors'] &&
            humanType === typesInterface['rock']) ||
        (generatedType === typesInterface['rock'] &&
            humanType === typesInterface['paper']) ||
        (generatedType === typesInterface['paper'] &&
            humanType === typesInterface['scissors'])

    calculateGameResult(
        isComputerWon,
        humanType,
        generatedType,
        roundResultsContainer
    )
}

const calculateGameResult = (
    isComputerWon,
    humanType,
    generatedType,
    container
) => {
    if (round === FINAL_SCORE) {
        disableAbleButtons(buttons, true)
    }
    const result = isComputerWon ? 'LOST' : 'WON'
    const isTie = humanType === generatedType

    if (isTie) {
        incrementValue(tiesCountContainer)
    } else {
        isComputerWon
            ? incrementValue(computerWinsContainer)
            : incrementValue(humanWinsContainer)
    }

    container.innerHTML = `Round ${round}, ${humanType} vs. ${generatedType}, ${
        isTie ? 'TIE!' : `You've ${result}! `
    }`
    container.classList.remove('round-results__text--show')
    round++
}

const resetGame = () => {
    resetValue(tiesCountContainer)
    resetValue(computerWinsContainer)
    resetValue(humanWinsContainer)
    roundResultsContainer.classList.add('round-results__text--show')
    disableAbleButtons(buttons, false)
    round = INIT_ROUND
}

buttonsContainer.addEventListener('click', gameJudge)
resetButton.addEventListener('click', resetGame)
