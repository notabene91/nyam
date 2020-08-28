import React from 'react';
import './App.css'
import './fonts/fonts.css'
import Card from './components/Card'

function App() {

  // Как мог попытался эмулировать какую то дату, приходящую с сервера.
  // Для отключения карточки служит ключ disabled
  const data = [
    { title: 'Нямушка', subtitle: 'с фуа-гра', portions: '10  ', textPortions: 'порций', mouse: '1 ', textMouse: 'мышь в подарок', weight: '0.5', product: 'Печень утки разварная с артишоками.', disabled: false },
    { title: 'Нямушка', subtitle: 'с рыбой', portions: '40  ', textPortions: 'порций', mouse: '2 ', textMouse: 'мыши в подарок', weight: '2', product: 'Головы щучьи с чесноком да свежайшая сёмгушка.', disabled: false },
    { title: 'Нямушка', subtitle: 'с курой', portions: '100  ', textPortions: 'порций', mouse: '5 ', textMouse: 'мышей в подарок, заказчик доволен', weight: '5', product: 'Филе из цыплят с трюфелями в бульоне.', disabled: true },
  ]
  return (
    <div className="main">
      <h1 className="main__title">Ты сегодня покормил кота?</h1>
      <div className="main__container">
        {data.map(({ title, subtitle, portions, textPortions, mouse, textMouse, weight, product, disabled }) => {
          return <Card
            key={subtitle}
            title={title}
            subtitle={subtitle}
            portions={portions}
            textPortions={textPortions}
            mouse={mouse}
            textMouse={textMouse}
            weight={weight}
            product={product}
            disabled={disabled}
          />
        })
        }
      </div>
    </div>
  )
}

export default App;
