import React from 'react';
import Directory from '../../components/directory/directory.component';
import Test from '../../test/test';
import TestNew from '../../test/testNew';
import './homepage.styles.scss'

const HomePage = ()=>(
    <div className='homepage'>
        {/* <Test/>
        <TestNew/> */}
       <Directory/>
    </div>
)
export default HomePage;