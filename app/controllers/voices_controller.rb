class VoicesController < ApplicationController

  def applewatchsubmit
    @voice = Voice.new(voice_params)
    if @voice.save
      redirect_to :action => "applewatch", :alert => "Sumbit Success"
    else
      render :applewatch
    end
  end

  def applewatch
    @voice = Voice.new
  end

  def threejstemplate
  end

  def maptest
  end

  def getVoices
    @latestVoices =Voice.where("created_at >= ?", Time.zone.now.beginning_of_day)
    render :json => @latestVoices

  end

  def create
    @voice = Voice.new
  end

  def submit
    @voice = Voice.new(voice_params)
    if @voice.save
      redirect_to :action => "create", :alert => "Sumbit Success"
    else
      render :create
    end
  end

  private
    def voice_params
      params.require(:voice).permit(:text, :locationX, :locationY, :emotion, :time)
    end
end
