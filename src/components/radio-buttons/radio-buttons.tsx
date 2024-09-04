import { GUITAR_TYPES, CountStrut } from '../../consts';
import { useState } from 'react';

function RadioButtons(): JSX.Element {

  const [guitarState, setGuitarState] = useState(GUITAR_TYPES[0].value);

  const [strutState, setStrutState] = useState(CountStrut.Four);

  return (
    <>
      <div className="input-radio edit-item__form-radio"><span>Тип товара</span>
        {GUITAR_TYPES.map((type) => (
          <>
            <input type="radio" id={type.value} name="item-type" value={type.value} onClick={() => setGuitarState(type.value)} checked={guitarState === type.value}/>
            <label htmlFor={type.value}>{type.title}</label>
          </>
        )
        )}
      </div>
      <div className="input-radio edit-item__form-radio"><span>Количество струн</span>
        {Object.values(CountStrut).map((strut) => (
          <>
            <input type="radio" id={`string-qty-${strut}`} name="string-qty" value={strut} onClick={() => setStrutState(strut)} checked={strutState === strut} />
            <label htmlFor={`string-qty-${strut}`}>{strut}</label>
          </>
        )
        )}
      </div>
    </>
  );
}

export default RadioButtons;
