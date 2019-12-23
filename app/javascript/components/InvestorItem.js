import React from 'react';

function InvestorItem({investor}) {
  return (
    <React.Fragment>
        <div className="col-s-wrapper u-mb-small">
          <div className="col-s-6">{investor.firstName}</div>
          <div className="col-s-6">{investor.lastName}</div>
        </div>
      </React.Fragment>
    );
}

export default InvestorItem;

