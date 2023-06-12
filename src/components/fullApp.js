import React from 'react';
import Header from './header';
import TodosLogic from './TodosLogic';
// import InputField from './input';
// import ListSection from './listSection';

const FullApp = () => (
  <div className="Appholder">
    <Header />
    <TodosLogic />
    {/* <InputField />
    <ListSection /> */}
  </div>
);

export default FullApp;
