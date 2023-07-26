import { CarouselSlide, Task } from '@store'

export const getMainButtonState = (
  currentStep: number,
  slides: CarouselSlide[],
  task: Task | null,
  theme: { [key: string]: any }
) => {
  const { mode } = theme
  const { button_color, button_text_color } =
    window?.Telegram?.WebApp.themeParams

  if (task?.locked) {
    return {
      text: 'Finish previous task first',
      disabled: true,
      color: mode === 'light' ? '#F4F4F5' : '#151517',
      textColor: mode === 'light' ? '#BDBDC0' : '#55555A',
    }
  }

  const text = slides.length ? (slides[currentStep] as any).mainButton.text : ''
  return {
    text,
    disabled: task?.locked ? true : false,
    color: button_color,
    text_color: button_text_color,
  }
}
