class ChannelsController < ApplicationController
before_action :cors_preflight_check, :only => [:index]
before_action :channel_params

   def index
    @channels = Channel.all
    respond_to do |format|
      format.html
      format.json { render json: @channels,  root: false }
      
    end 
  end

  # GET /songs/1
  # GET /songs/1.json
  def show
     @channel = Channel.find(params[:id])
     respond_to do |format|
      format.html
      format.json { render json: @channel  , root: false}
    end
  end
  
  def new
    @channel = Channel.new(channel_params)
  end

  def create
    @channel = Channel.new(channel_params)
    @channel.save

    respond_to do |format|
    if @channel.save
      format.html { redirect_to @channel, notice: 'Channel was successfully created.' }
      format.json { render :show, status: :created, location: @channel }
    else
      format.html { render :show }
      format.json { render json: @channel.errors, :status => :unprocessable_entity }
    end
  end
  end


  def update
    @channel = Channel.find(params[:id])
    if @channel.update(channel_params)
      render json: @channel
    else
      render json: @channel.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @channel = Channel.find(params[:id])
    @channel.destroy
    head :no_content
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_channel
      @channel = Channel.find(params[:id])
    end

   def channel_params
    params.permit(:id, :song_id, :url, :format)
   end
end

