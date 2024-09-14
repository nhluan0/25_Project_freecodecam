import UseLocalStorage from './UseLocalStorage'

const LitghAndDarkMode = () => {
  const [theme, setTheme] = UseLocalStorage('theme', 'dark')
  function handleChangeTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  console.log(theme)
  return (
    <div className="container-bg" data-luan={theme}>
      <h1>Hello work</h1>
      <button className="btn btn-sm btn-primary" onClick={handleChangeTheme}>
        Change theme
      </button>
    </div>
  )
}

export default LitghAndDarkMode
