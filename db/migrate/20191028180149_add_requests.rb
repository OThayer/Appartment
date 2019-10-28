class AddRequests < ActiveRecord::Migration[5.2]
  def change
    create_table :requests do |t|
      t.string :description, null: false
      t.string :type, null: false
      t.belongs_to :user, null: false

      t.timestamps null:false
  end
 end
end
