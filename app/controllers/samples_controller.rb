class SamplesController < ApplicationController
  def index
  end

  def pretty_template
    render layout: false
  end
end
