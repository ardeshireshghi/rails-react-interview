import React from 'react';
import InvestorItem from './InvestorItem';

class InvestorListComponent extends React.PureComponent {
  render () {
    const { data } = this.props;
    return (
      <div className="u-page-grid">
        {!data && 'No investors found!'}
        {data &&
          <React.Fragment>
            <div className="col-s-wrapper u-mb-small">
              <div className="col-s-6 colors__sample--purple-light u-color-white u-pv-small">First Name</div>
              <div className="col-s-6 colors__sample--purple-light u-color-white u-pv-small">Last Name</div>
            </div>
            {data.map((investor, index) => <InvestorItem key={index} investor={investor}></InvestorItem>)}
          </React.Fragment>
        }
      </div>
    );
  }
}

export default InvestorListComponent;
