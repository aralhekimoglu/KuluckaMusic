class SongsController < ApplicationController
before_action :cors_preflight_check, :only => [:index]
before_action :song_params

	 def index
    @songs = Song.all
    respond_to do |format|
      format.html
      format.json { render json: @songs,  include: @channels , root: false }
      
    end 
  end

  # GET /songs/1
  # GET /songs/1.json
  def show
     @song = Song.find(params[:id])
     @ch1=@song.channels[0]
     @ch2=@song.channels[1]
     @ch3=@song.channels[2]
     @ch4=@song.channels[3]
     @ch5=@song.channels[4]
     @ch6=@song.channels[5]
     
     respond_to do |format|
      format.html
      format.json { render json: @song  , root: false}
    end
  end
  
  def new
    @song = Song.new(song_params)
  end

  def create
    @song = Song.new(song_params)
    @song.save

    @ch1 = Channel.new(channel_params1)
    @ch1.song_id=@song.id
    @ch1.save


    @ch2 = Channel.new(channel_params2)
    @ch2.song_id=@song.id
    @ch2.save

    @ch3 = Channel.new(channel_params3)
    @ch3.song_id=@song.id
    @ch3.save

    @ch4 = Channel.new(channel_params4)
    @ch4.song_id=@song.id
    @ch4.save

    @ch5 = Channel.new(channel_params5)
    @ch5.song_id=@song.id
    @ch5.save

    @ch6 = Channel.new(channel_params6)
    @ch6.song_id=@song.id
    @ch6.save

    respond_to do |format|
    if @ch6.save
      format.html { redirect_to @song, notice: 'Song was successfully created.' }
      format.json { render :show, status: :created, location: @song }
    else
      format.html { render :show }
      format.json { render json: @song.errors, :status => :unprocessable_entity }
    end
  end
  end

  def update
    @song = Song.find(params[:id])
    if @song.update(song_params)
      render json: @song
    else
      render json: @song.errors, status: :unprocessable_entity
    end
  end
  
  def destroy
    @song = Song.find(params[:id])
    @song.destroy
    head :no_content
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def song_params
    params.permit(:song_name, :singer_name , :genre, :id)
    end
   def channel_params1
      params.require(:ch1).permit(:url)
    end
    def channel_params2
      params.require(:ch2).permit(:url)
    end
    def channel_params3
      params.require(:ch3).permit(:url)
    end
    def channel_params4
      params.require(:ch4).permit(:url)
    end
    def channel_params5
      params.require(:ch5).permit(:url)
    end
    def channel_params6
      params.require(:ch6).permit(:url)
    end
end

