import { useState } from 'react'
import { FormBlock, FormControl, FormField, FormLabel, FormWrapper } from './form.styled'
import plusIcon from '../../assets/images/plus.png'



export const Form = (props: { creatNewToDo: Function }) => {
    const [text, setText] = useState<string>('')
    

    const fomSubmit = (event: React.BaseSyntheticEvent) => {
        event.preventDefault()
        if (text) {
            props.creatNewToDo(text)
            setText('')
        }
    }


    return (
        <FormWrapper>
            <FormBlock action="#" onSubmit={fomSubmit}>
                <FormLabel>
                    <FormField value = {text}
                    type="text" 
                    onChange={(e) => setText(e.target.value)} />
                    <FormControl icon={plusIcon}/>
                </FormLabel>
            </FormBlock>
        </FormWrapper>
    )
}
