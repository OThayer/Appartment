class ChangeTypeColumn < ActiveRecord::Migration[5.2]
  def change
    rename_column :requests, :type, :work_type
  end
end
