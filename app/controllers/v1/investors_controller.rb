module V1
  class InvestorsController < ApplicationController
    def index
      render json: { data: investors }.to_json
    end

    private

    def investors
      [
        {
          firstName: 'Ali',
          lastName: 'J'
        },
        {
          firstName: 'George',
          lastName: 'Best'
        },
        {
          firstName: 'Lucy',
          lastName: 'Powers'
        },
    ]
    end
  end
end

