import React from 'react'
import './App.scss'
import Button, { ButtonSize, ButtonType } from './components/Button/button'
const App: React.FC = () => {
  return (
    <>
      <Button
        autoFocus={true}
        btnType={ButtonType.Primary}
        size={ButtonSize.large}
      >
        Hello
      </Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
        Hello
      </Button>
      <Button btnType={ButtonType.Default} size={ButtonSize.large}>
        Hello
      </Button>
      <Button size={ButtonSize.large} disabled={true}>
        World
      </Button>
      <Button
        target='_blank'
        btnType={ButtonType.Link}
        href={'http://www.baidu.com'}
      >
        Baidu Link
      </Button>
      <Button
        target='_blank'
        btnType={ButtonType.Link}
        disabled={true}
        href={'http://www.baidu.com'}
      >
        Baidu Link
      </Button>
    </>
  )
}

export default App
