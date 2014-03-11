class SamplesController < ApplicationController
  def index
    # Add some fake samples
    fake_samples = [{name: "blah"}, {name: "pretty blah"}]

    # respond to the type of request
    respond_to do |f|
      f.html
      f.json {render :json => fake_samples}
    end

  end

  def pretty_template
    render layout: false
  end
end
