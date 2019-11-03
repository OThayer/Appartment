class AddMaintenanceOicture < ActiveRecord::Migration[5.2]
  def change
    add_column :requests, :maintenance_pic, :string
  end
end
