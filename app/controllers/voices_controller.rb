class VoicesController < ApplicationController

  def population2014
    @@data = File.read("~/assets/javascripts/population2014.json")
    render :json => @@data
  end

  def vr

  end

  def viewVoices
  end

  def upvote
    @voice = Voice.find(params[:id])
    @voice.update_attribute(:votes, @voice.votes + 1)

    #If you don't want render anything at all, you should use render :nothing => true option
    render :nothing => true
  end

  def downvote
    @voice = Voice.find(params[:id])
    @voice.update_attribute(:votes, @voice.votes - 1)

    #If you don't want render anything at all, you should use render :nothing => true option
    render :nothing => true

  end

  def applewatchsubmit
    @voice = Voice.new(voice_params)
    @voice.votes = 0
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
    @voice.votes = 0
    if @voice.save
      redirect_to :action => "create", :alert => "Submit Success"
    else
      render :create
    end
  end

  private
    def voice_params
      params.require(:voice).permit(:text, :locationX, :locationY, :emotion, :time)
    end
end
