class CreateEmbeddings < ActiveRecord::Migration
  def change
    create_table :embeddings do |t|
      t.string :name, :limit => 100
      t.string :url, :limit => 1024

      t.string :title, :limit => 100
      t.text :description
      t.timestamps
    end
  end
end
