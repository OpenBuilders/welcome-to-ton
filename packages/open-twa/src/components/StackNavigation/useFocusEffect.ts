import { useEffect } from 'react'
import { useStackNavigation } from './useStackNavigation'

type EffectCallback = () => undefined | void | (() => void)

export function useFocusEffect(effect: EffectCallback) {
  const navigation = useStackNavigation()

  if (arguments[1] !== undefined) {
    const message =
      "You passed a second argument to 'useFocusEffect', but it only accepts one argument. " +
      "If you want to pass a dependency array, you can use 'React.useCallback':\n\n" +
      'useFocusEffect(\n' +
      '  React.useCallback(() => {\n' +
      '    // Your code here\n' +
      '  }, [depA, depB])\n' +
      ');\n\n' +
      'See usage guide: https://reactnavigation.org/docs/use-focus-effect'

    console.error(message)
  }

  useEffect(() => {
    let isFocused = false
    let cleanup: undefined | void | (() => void)

    const callback = () => {
      const destroy = effect()

      if (destroy === undefined || typeof destroy === 'function') {
        return destroy
      }

      if (process.env.NODE_ENV !== 'production') {
        let message =
          'An effect function must not return anything besides a function, which is used for clean-up.'

        if (destroy === null) {
          message +=
            " You returned 'null'. If your effect does not require clean-up, return 'undefined' (or nothing)."
        } else if (typeof (destroy as any).then === 'function') {
          message +=
            "\n\nIt looks like you wrote 'useFocusEffect(async () => ...)' or returned a Promise. " +
            'Instead, write the async function inside your effect ' +
            'and call it immediately:\n\n' +
            'useFocusEffect(\n' +
            '  React.useCallback(() => {\n' +
            '    async function fetchData() {\n' +
            '      // You can await here\n' +
            '      const response = await MyAPI.getData(someId);\n' +
            '      // ...\n' +
            '    }\n\n' +
            '    fetchData();\n' +
            '  }, [someId])\n' +
            ');\n\n' +
            'See usage guide: https://reactnavigation.org/docs/use-focus-effect'
        } else {
          message += ` You returned '${JSON.stringify(destroy)}'.`
        }

        console.error(message)
      }
    }

    if (navigation.isFocused) {
      cleanup = callback()
      isFocused = true
    }

    return () => {
      if (cleanup !== undefined) {
        cleanup()
      }
    }

    // console.log('handle route change here', location)
  }, [navigation])
}
