class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.string :title, :limit => 100
      t.string :slug, :limit => 100
      t.string :keywords, :limit => 100
      t.text :summary
      t.text :content
      t.timestamps
    end
  end
end
