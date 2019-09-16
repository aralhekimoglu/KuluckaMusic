class SongSerializer < ActiveModel::Serializer
	
  attributes :id , :created_at ,:singer_name ,:song_name , :genre , :tag 
  
end
