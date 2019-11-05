class DocumentsFix < ActiveRecord::Migration[5.2]
  def change
    create_table :documents do |t|
      t.string :title
      t.string :body
      t.references :tenant
      t.references :landlord
      t.timestamps
    end
  end
end
