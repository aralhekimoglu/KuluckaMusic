class CreateSongs < ActiveRecord::Migration[5.0]
  def change
    create_table :songs do |t|
      t.string :singer_name
      t.string :song_name
      t.string :genre
      t.string :tag
      t.timestamps
    end
  end
end
