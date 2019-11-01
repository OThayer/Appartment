class AddPaymentsColumn < ActiveRecord::Migration[5.2]
  def change
    create_table :payments do |t|
      t.string :name, null: false, default: "Rent"
      t.string :description, null: false
      t.string :permalink
      t.integer :price, null: false
      t.references :user, null: false

      t.timestamps
    end
  end
end
