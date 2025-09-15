// client/src/utils/telegram.js
export function getTelegramEnv() {
  if (window.Telegram?.WebApp) {
    // реальное окружение Telegram
    return window.Telegram.WebApp;
  } else {
    // отладочный режим для браузера
    console.warn("⚠️ Запущено в браузере, используется фейковое окружение Telegram");
    return {
      initDataUnsafe: {
        user: {
          id: 123456,
          first_name: "Test",
          username: "debug_user"
        }
      },
      themeParams: {
        bg_color: "#ffffff",
        text_color: "#000000",
        button_color: "#2cab37",
      },
      HapticFeedback: {
        impactOccurred: () => {},
      },
      MainButton: {
        show: () => {},
        hide: () => {},
        setText: () => {},
        onClick: () => {},
      },
      BackButton: {
        show: () => {},
        hide: () => {},
        onClick: () => {},
      }
    };
  }
}
