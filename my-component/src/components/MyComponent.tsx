import { useState } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { DIcon, DButton, DInput, DList, DListItemMovement } from '@dynamic-framework/ui-react';


export default function MyComponent() {


  const movements = [
    {
      id: "1",
      amount: 6000,
      date: "10/08/2023",
      description: "Credit card"
    },
    {
      id: "2",
      amount: -1200,
      date: "10/08/2023",
      description: "Checking account"
    },
    {
      id: "3",
      amount: 5000,
      date: "10/08/2023",
      description: "Savings account"
    }
  ]


  const myClickHandler = () => {
    console.log('myClickHandler called');
  }
 
  return (
    <>

      <h2 className='mb-5'>My Account</h2>

      <DList className='mb-5'>

      {movements.map((movement) => (

        <DListItemMovement
          key={movement.id}
          amount={movement.amount}
          date={movement.date}
          description={movement.description}
        />

      ))}

      </DList>

      <DButton text='Add movement' onClick={myClickHandler} />
       

    </>
  );
}
