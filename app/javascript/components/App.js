import React from 'react';;
import InvestorForm from './InvestorForm';
import InvestorList from './InvestorList';

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <InvestorForm></InvestorForm>
        <InvestorList></InvestorList>
      </React.Fragment>
    );
  }
}

export default App;
