const disableAbleButtons = (buttons, isDisabled) => {
    buttons.forEach(button => {
        button.disabled = isDisabled
        isDisabled
            ? button.classList.add('container__buttons__button--disabled')
            : button.classList.remove('container__buttons__button--disabled')
    })
}
export default disableAbleButtons
