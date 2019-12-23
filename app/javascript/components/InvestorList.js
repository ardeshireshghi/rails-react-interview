import React from 'react';

import InvestorListComponent from './InvestorListComponent';

class InvestorList extends React.Component {
  state = {
    investors: []
  };

  fetchInvestors = async () => {
    const response = await fetch('/v1/investors');
    const responseJson = await response.json();

    this.setState({
      investors: responseJson.data
    });
  }

  componentDidMount() {
    this.fetchInvestors();
  }

  render () {
    return (
      <InvestorListComponent data={this.state.investors}></InvestorListComponent>
    );
  }
}

export default InvestorList;
