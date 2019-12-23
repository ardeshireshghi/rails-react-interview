import React from 'react';
import PropTypes from "prop-types"
import TextField from 'radius/dist/m2dm/react/forms/text-field';

class InvestorForm extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="u-page-grid">
          <div className="card card--flexible">
          <div className="card__item card__header">Create new Investor</div>
          <div className="card__item card__content">
            <TextField
              label="First name"
              name="first_name"
              placeholder="e.g. John"
              listeners={{
                onInput: (event) => console.log('onInput trigger', event)
              }}
              type="text"
              autoComplete="off"
              disabled={false}
            />
            <TextField
              label="Last name"
              name="last_name"
              placeholder="e.g. Snow"
              listeners={{
                onInput: (event) => console.log('onInput trigger', event)
              }}
              type="text"
              autoComplete="off"
              disabled={false}
            />
            <button className="cta-primary cta--block">Create</button>
          </div>
        </div>
        </div>

      </React.Fragment>
    );
  }
}

export default InvestorForm;
