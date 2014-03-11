class SamplesController < ApplicationController
  def index
    # Add some fake samples
    @samples = [{name: "blah", description: "hahaha"},
                {name: "pretty blah", "that is funny"}]

    # respond to the type of request
    respond_to do |f|
      f.html
      f.json {render :json => @samples}
    end

  end

  def pretty_template
    render layout: false
  end

  def create
    new_sample = params[:sample]
    sample = Sample.create(new_sample)

    respond_to do |f|
      f.html {redirect_to samples_path}
      f.json {render json: sample}
    end
  end

end
