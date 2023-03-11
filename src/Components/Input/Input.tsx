import React from 'react';

type InputPropsType ={
    title: string
    setTitle: (title:string)=>void
}

export const Input = (props:InputPropsType) => {
    const onChangeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
       props.setTitle(event.currentTarget.value)

    }
    return (
        <input value={props.title} type="text" onChange={onChangeInputHandler}/>    );
};

