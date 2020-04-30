import React from 'react'
import {HelloMessage} from '.'
import {render} from '@testing-library/react'

describe('lets check hello message',()=>{
    it('should render given message',()=>{
        const {getByText}=render(<HelloMessage  message='hello world'/>);
        getByText(/world/i);
    });
    
    it('should render given ganesh message',()=>{
        const {getByText}=render(<HelloMessage  message='Ganesh Karedla'/>);
        getByText(/Ganesh/i);
    });
});